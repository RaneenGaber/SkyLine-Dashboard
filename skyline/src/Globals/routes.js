import Home from "../Modules/Home";
import Login from "./../Modules/Login";

const routes = [
  {
    path: "/",
    component: <Home />,
    label: "Home",
    display: true,
  },
  {
    path: "/login",
    component: <Login />,
    display: false,
  },
];

export default routes;
