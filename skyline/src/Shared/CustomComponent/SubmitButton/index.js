import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export default function CustomButton({ submit, handleClick, title, loading }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "white",
    backgroundColor: "#010e30",
    width: "10vw",
    border: "1px solid white",
    marginTop: title === "SAVE" ? "10vh" : "10vh",
    marginBottom: title === "SAVE" ? "5vh" : "5vh",

    "&:hover": {
      backgroundColor: "white",
      color: "#010e30",
      width: "12vw",
    },
    opacity: isVisible ? 1 : 0, // Fade-in animation
    transition: "width 0.5s ease-in-out", // Fade-in animation
  }));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomButton
        type={submit}
        size="large"
        block
        disabled={loading}
        edge="start"
        color="inherit"
        sx={{ mr: 4, ml: 4 }}
        onClick={handleClick}
      >
        {title}
      </CustomButton>
    </div>
  );
}


export  function SubmitButton({ submit, loading, title }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const CustomButton = styled(Button)(({ theme }) => ({
    color: "white",
    borderColor: "white",
    backgroundColor: "#010e30",
    width: "10vw",
    border: "1px solid white",
    marginTop: title === "SAVE" ? "0vh" : "10vh",
    marginBottom: title === "SAVE" ? "10vh" : "5vh",
    "&:hover": {
      backgroundColor: "white",
      color: "#010e30",
      width: "12vw",
    },
    opacity: isVisible ? 1 : 0, // Fade-in animation
    transition: "width 0.5s ease-in-out", // Fade-in animation
  }));

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CustomButton
        type={submit}
        size="large"
        block
        edge="start"
        color="inherit"
        disabled={loading}
        sx={{ mr: 4, ml: 4 }}
      >
        {title}
      </CustomButton>
    </div>
  );
}


