import { Route, Routes } from "react-router-dom";
import routes from "./Globals/routes";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="App">
        <Routes>
          {routes.map((route, index) => {
              return (
                <Route key={index} path={route.path} element={route.component } />
              );
            })}
        </Routes>
      </div>
    </LocalizationProvider>
  );
}
export default App;
