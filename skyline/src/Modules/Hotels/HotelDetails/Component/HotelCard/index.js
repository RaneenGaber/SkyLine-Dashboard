import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HotelCard({
  name,
  desc,
  country,
  city,
  address,
  price,
  //   longitude,
  //   latitude,
  image,
}) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        maxWidth: 1000,
        borderRadius: "20px",
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
      }}
    >
      <CardHeader
        action={
          <>
            <Typography
              sx={{
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingRight: "10px",
                fontSize: "20px",
              }}
            >
              {country}
            </Typography>
            <Typography>{city}</Typography>
          </>
        }
        title={name}
        subheader={address}
        color="white"
        sx={{ padding: "20px" ,color:"white"}}
      />

      <CardMedia component="img" height="250" image={image} alt={name} />
      <CardContent>
        <Typography variant="body2" sx={{ padding: "10px" }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
}
