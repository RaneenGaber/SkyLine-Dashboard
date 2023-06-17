import Layout from "../../Shared/Layout";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import "./style.css";

const Flight = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",          
        
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "36px",
              marginBottom: "20px",
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            Flight
          </h1>
          <Card
            style={{
              width: "35vw",
              border: "1px solid #010e30",
              boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.4)",
              backgroundColor: "rgba(0, 0, 0,0.4)",
              borderRadius: "20px"
            }}
          >
            <CardContent
              style={{
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                height: "25vh",
                justifyContent: "space-around",
              }}
            >
              <Link
                to={"/Flight/create"}
                id={"/Flight/create"}
                style={{ fontSize: "22PX" }}
                className="link"
              >
                Create Flights
              </Link>

              <Link
                to={"/Flight/FlightList"}
                id={"/Flight/FlightList"}
                style={{
                  fontSize: "22PX",
                }}
                className="link"
              >
                Flight List
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Flight;
