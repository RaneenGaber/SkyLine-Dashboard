import Home from "../Modules/Home";
import Login from "./../Modules/Login";
import FlightDetails from './../Modules/Flights/FlightDetails/index';
import CreateFlight from './../Modules/Flights/CreateFlight/index';
import FlightList from './../Modules/Flights/FlightList/index';
import Flight from './../Modules/Flights/index';

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
  {
    path: "/Flight/FlightList/Details/:_id",
    component: <FlightDetails />,
    label: "Flight Details",
    display: false,
  },
  {
    path: "/Flight/create",
    component: <CreateFlight />,
    label: "Create Flight",
    display: false,
  },
  {
    path: "/Flight/FlightList",
    component: <FlightList />,
    label: "Flight List",
    display: false,
  },
  {
    path: "/Flight",
    component: <Flight />,
    label: "Flights",
    display: true,
    sub: [
      {
        path: "/Flight/create",
        component: <CreateFlight />,
        label: "Create Flight",
        display: true,
      },
      {
        path: "/Flight/FlightList",
        component: <FlightList />,
        label: "Flight List",
        display: true,
      },
    ],
  },
];



export default routes;





 
