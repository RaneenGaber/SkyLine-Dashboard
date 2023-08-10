import { useState } from "react";
import { Navigate } from "react-router-dom";
import NavMenu from "./../Menu";
import Topbar from "../Topbar";
import authHeader from "../../Globals/auth-header";
import { Container, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";

const Layout = ({ children }) => {
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [collapsed, setCollapsed] = useState(isSmallScreen ? true : false);

  const toggleCollapsed = () => {
    isSmallScreen ? setCollapsed(true) : setCollapsed(!collapsed);
  };
  if (!Object.keys(authHeader()).length) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Box>
        <Topbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      </Box>
      <Box>
        <Box
          xs={2}
          style={{
            height: "100%",
            position: "fixed",
            zIndex: 30,
            background: "#010e30",
            left: "0px",
            width: isSmallScreen ? "6vw" : collapsed ? "6vw" : "12vw",
            minWidth:"90px",
            transform: collapsed ? "translate(-250, 0)" : "translate(0px, 0)",
            transition: "all 0.5s ease-in-out",
            marginTop: "5rem",
          }}
        >
          <NavMenu collapsed={collapsed} />
        </Box>
        <Box
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            paddingTop:"15vh",
            paddingLeft: isSmallScreen ? "6vw" : collapsed ? "6vw" : "12vw",
            transform: collapsed ? "translate(-250, 0)" : "translate(0px, 0)",
            transition: "all 0.5s ease-in-out",
          }}
        >
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
