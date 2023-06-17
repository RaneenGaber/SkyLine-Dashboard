import * as React from "react";
import Menu from "@mui/material/Menu";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";
import SourceIcon from "@mui/icons-material/Source";
import LinkIcon from "@mui/icons-material/Link";
import routes from "../../Globals/routes";
import { useMediaQuery } from "@mui/material";

import "./style.css";
import PopupState, {bindMenu } from "material-ui-popup-state";

const NavMenu = ({ collapsed }) => {
  const location = useLocation();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const NewMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      width: "100%",
    },
  }));

  return (
    <Stack>
      <MenuList>
        {routes.map((route, index) => {
          return route.display && !route.sub ? (
            <NewMenuItem
              key={index}
              sx={{
                borderBottom: "3px solid white",
                width: "100%",
                backgroundColor:
                  location.pathname === route.path
                    ? "rgba(255, 255, 255, 0.3)"
                    : "transparent",
              }}
            >
              <Link
                to={route.path}
                key={index}
                id={route.path}
                style={{
                  color: "white",
                  fontSize: "22px",
                }}
              >
                <SourceIcon
                  sx={{ color: "white" }}
                  style={{
                    size: "22px",
                    marginRight: "20px",
                  }}
                />
                {collapsed || isSmallScreen
                  ? null
                  : route.sub
                  ? null
                  : route.label}
              </Link>
            </NewMenuItem>
          ) : route.sub ? (
            <PopupState variant="popover" popupId="demo-popup-menu" key={index}>
              {(popupState) => (
                <>
                  <NewMenuItem>
                    <Link
                      to={route.path}
                      key={route.path}
                      id={route.path}
                      style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "22px",
                      }}
                    >
                      <LinkIcon
                        sx={{ color: "white" }}
                        style={{
                          size: "22px",
                          marginRight: "20px",
                        }}
                      />
                      {collapsed || isSmallScreen ? null : route.label}
                    </Link>
                  </NewMenuItem>
                  <Menu {...bindMenu(popupState)}>
                    {route.sub.map((subRoute, index) => {
                      return subRoute.display ? (
                        <NewMenuItem key={index}>
                          <Link to={subRoute.path} key={index + subRoute.path}>
                            {}
                            {collapsed || isSmallScreen ? null : subRoute.label}
                          </Link>
                        </NewMenuItem>
                      ) : null;
                    })}
                  </Menu>
                </>
              )}
            </PopupState>
          ) : null;
        })}
      </MenuList>
    </Stack>
  );
};

export default NavMenu;
