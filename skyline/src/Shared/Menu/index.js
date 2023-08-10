import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Link, useLocation } from "react-router-dom";
import SourceIcon from "@mui/icons-material/Source";
import routes from "../../Globals/routes";
import { useMediaQuery } from "@mui/material";
import "./style.css";

const NavMenu = ({ collapsed }) => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const NewMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      transition: "backgroundColor 0.5s ease-in",

      width: "100%",
      borderBottom: "1px solid white",
      borderRight: "1px solid white",
    },
  }));

  return (
    <Stack>
      <MenuList>
        {routes.map((route, index) => {
          return route.display ? (
            <NewMenuItem
              key={index}
              sx={{
                width: "100%",
                backgroundColor:
                  location.pathname === route.path
                    ? "rgba(0, 0, 0, 0.7)"
                    : "transparent",
                borderBottom:
                  location.pathname === route.path ? "1px solid white" : null,
                borderRight:
                  location.pathname === route.path ? "1px solid white" : null,
              }}
            >
              <Link
                to={route.path}
                key={index}
                id={route.path}
                style={{
                  color: "white",
                  fontSize: "1.3vw",
                }}
              >
                <SourceIcon
                  sx={{ color: "white" }}
                  style={{
                    size: "1.3vw",
                    paddingRight: "10px",
                    paddingLeft: "10px",
                  }}
                />
                {collapsed || isSmallScreen
                  ? null
                  : route.sub
                  ? null
                  : route.label}
              </Link>
            </NewMenuItem>
          ) : null;
        })}
      </MenuList>
    </Stack>
  );
};

export default NavMenu;
