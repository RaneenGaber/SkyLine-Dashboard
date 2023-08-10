import Login from "./../Modules/Login";
import FlightDetails from './../Modules/Flights/FlightDetails/index';
import CreateFlight from './../Modules/Flights/CreateFlight/index';
import FlightList from './../Modules/Flights/FlightList/index';
import Flight from "./../Modules/Flights/index";
import HotelDetails from "./../Modules/Hotels/HotelDetails/index";
import CreateHotel from "./../Modules/Hotels/CreateHotel/index";
import HotelList from "./../Modules/Hotels/HotelList/index";
import Hotel from "./../Modules/Hotels/index";
import Users from './../Modules/Users/index';
import UserDetails from "../Modules/Users/Components/UserDetails";

const routes = [
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
  },
  {
    path: "/User",
    component: <Users />,
    label: "Users",
    display: true,
  },
  {
    path: "/User/:_id",
    component: <UserDetails />,
    label: "UserDetails",
  },

  {
    path: "/Hotel/HotelList/Details/:_id",
    component: <HotelDetails />,
    label: "Hotel Details",
    display: false,
  },
  {
    path: "/Hotel/create",
    component: <CreateHotel />,
    label: "Create Hotel",
    display: false,
  },
  {
    path: "/Hotel/HotelList",
    component: <HotelList />,
    label: "Hotel List",
    display: false,
  },
  {
    path: "/Hotel",
    component: <Hotel />,
    label: "Hotels",
    display: true,
  },
];



export default routes;





 
