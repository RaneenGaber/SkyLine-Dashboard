import logo from "./../../images/logo-light.png";
import authHeader from "./../../Globals/auth-header";
import { logout } from "../../Modules/Login/Services";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

const Topbar = ({ toggleCollapsed, collapsed }) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "white",
    "&:hover": {
      backgroundColor: "white",
      color: "#010e30",
    },
  }));

  return (
    <AppBar
      position="static"
      style={{
        background: "#010e30",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        zIndex: 20,
        height: "11vh",
      }}
    >
      <Toolbar style={{ margin: "10px" }}>
        <img
          src={logo}
          alt="logo"
          style={{
            width: "3.3em",
            margin: "10px",
          }}
        />
        <CustomButton
          onClick={toggleCollapsed}
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 4, ml: 4 }}
        >
          {collapsed ? (
            <MenuOpenIcon style={{ width: "30px", height: "30px" }} />
          ) : (
            <MenuIcon style={{ width: "30px", height: "30px" }} />
          )}
        </CustomButton>
        <Typography
          variant="h1"
          component="div"
          sx={{ flexGrow: 1, fontSize: "40px" }}
        >
          Skyline Dashboard
        </Typography>
        {Object.keys(authHeader()).length !== 0 && (
          <CustomButton
            variant="outlined"
            color="primary"
            onClick={() => {
              logout();
              window.location.reload();
            }}
          >
            logout
          </CustomButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Topbar;
