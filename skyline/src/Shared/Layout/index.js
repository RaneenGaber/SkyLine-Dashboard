import { useState } from "react";
import { Navigate } from "react-router-dom";
import NavMenu from "./../Menu";
import Topbar from "../Topbar";
import authHeader from "../../Globals/auth-header";
import Container from "@mui/material/Container";
import { useMediaQuery } from "@mui/material";
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
    <Container fixed>
      <Box>
        <Topbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      </Box>
      <Box style={{ width: "100%" }}>
        <Box
          style={{
            height: "100%",
            position: "fixed",
            background: "#010e30",
            left: "0px",
            width: isSmallScreen ? "90px" : collapsed ? "90px" : "240px",
            transform: collapsed ? "translate(-250, 0)" : "translate(0px, 0)",
            transition: "all 0.5s ease-in-out",
            paddingTop: "4rem",
          }}
        >
          <NavMenu collapsed={collapsed} />
        </Box>
        <Box style={{ paddingTop: "6rem", marginLeft: "240px", width: "70%" }}>
          <div>{children}</div>
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
