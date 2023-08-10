import { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

import Typography from "@mui/material/Typography";


export default function HotelCard(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 700,
        borderRadius: "20px",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        marginBottom:"50px"
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        {Object.keys(props).map((e) => (
          <Grid xs={6} md={3} style={{ margin: "10px" }}>
            <Typography
              sx={{
                padding: "20px",
                color: "black",
                fontSize: "22px",
                fontWeight: "bold",
              }}
            >
              {e}
            </Typography>
            <Typography
              sx={{
                padding: "20px",
                color: "white",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              {props[e]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Card>
  );
}
