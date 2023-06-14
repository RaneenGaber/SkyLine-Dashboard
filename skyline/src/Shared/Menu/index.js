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
import "./style.css";
import PopupState, {bindMenu } from "material-ui-popup-state";

const NavMenu = ({ collapsed }) => {
  const location = useLocation();

  const NewMenuItem = styled(MenuItem)(({ theme }) => ({
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      width: "130%",
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
                width: "130%",
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
                    marginRight: "30px",
                  }}
                />

                {route.sub ? null : route.label}
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
                          marginRight: "30px",
                        }}
                      />

                      {route.label}
                    </Link>
                  </NewMenuItem>
                  <Menu {...bindMenu(popupState)}>
                    {route.sub.map((subRoute, index) => {
                      return subRoute.display ? (
                        <NewMenuItem key={index}>
                          <Link to={subRoute.path} key={index + subRoute.path}>
                            {subRoute.label}
                          </Link>
                          <Divider
                            sx={{
                              my: 0.5,
                              borderWidth: "2px",
                              borderColor: "white",
                              opacity: 0.8,
                              width: collapsed ? "0" : "130%",
                            }}
                          />
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
