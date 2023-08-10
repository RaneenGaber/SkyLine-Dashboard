import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import styles from "./style.module.css";
const CustomCard = ({ title1, title2, link1, link2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Card
      style={{
        width: "35vw",
        border: "1px solid white",
        boxShadow: "6px 6px 10px rgba(0, 0, 0, 0.4)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        borderRadius: "20px",
        transform: isVisible ? "translateX(0)" : "translateX(-50%)",
        transition: "transform 0.5s ease-in",
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
          to={link1}
          id={link1}
          style={{ fontSize: "22px" }}
          className="link"
        >
          {title1}
        </Link>

        <Link
          to={link2}
          id={link2}
          style={{
            fontSize: "22px",
          }}
          className="link"
        >
          {title2}
        </Link>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
