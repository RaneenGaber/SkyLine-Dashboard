import React, { useState } from "react";
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
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close";
import axiosApi from "../../../../../Globals/Api/axios";
import AddRoomForm from "./AddRoomForm/index";
import { Button, Form } from "antd";
import CustomButton, {
  SubmitButton,
} from "./../../../../../Shared/CustomComponent/SubmitButton/index";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import FormData from "form-data";
import authHeader from "../../../../../Globals/auth-header";

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

export default function RoomCard({
  hotelId,
  _id,
  name,
  image,
  type,
  space,
  persons,
  Beds,
  facilities,
  notfacilities,
  price,
  handelDelete,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#010e30",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "10px",
  }));
  const [selectedImage, setSelectedImage] = useState('');

  const handelImage = (e) => {
    setSelectedImage(e.target.files[0]);
    console.log("Selected image", e.target.files[0]);
    uploadPhoto();
  };

  const uploadPhoto = async () => {
    try {
      const formData = new FormData();
      formData.append("image", selectedImage);
      console.log("formData", formData); // Handle the response data accordingly

      const res = await axiosApi.post(
        `/api/v1/rooms/uploadRoomImage/${_id}/${hotelId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${authHeader["x-auth-token"]}`,
          },
          withCredentials: true,
        }
      );
      console.log("jjjj", res.data); // Handle the response data accordingly
    } catch (error) {
      console.log(error);
      // Handle any errors that occurred during the request
    }
  };

  return (
    <Card
      sx={{
        maxWidth: 400,
        backgroundColor: "rgba(0,0,0,0.5)",
        color: "white",
        borderRadius: "20px",
      }}
    >
      <Typography
        sx={{
          fontSize: "20PX",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EditCalendarIcon
          sx={{
            fontSize: "40px",
            cursor: "pointer",
            color: "white",
            paddingTop: "15px",
            paddingLeft: "15px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Replace with your desired darker color
            },
          }}
        />
        <CloseIcon
          sx={{
            fontSize: "40px",
            cursor: "pointer",
            color: "white",
            paddingTop: "15px",
            paddingRight: "15px",
            padding: "20px",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Replace with your desired darker color
            },
          }}
          onClick={() => handelDelete(_id)}
        />
      </Typography>
      <CardHeader
        action={<Typography sx={{}}>{price} $</Typography>}
        title={name}
        subheader={type + " " + space + " m"}
      />
      <div
        style={{
          width: "100%",
          height: "200px",
          border: "1px dashed gray",
        }}
      >
        <input type="file" name="file" onChange={handelImage} />
       <button onClick={uploadPhoto}>upload</button>
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            style={{ width: "100%", height: "100%" }}
          />
        ) : (
          <CardMedia
            component="img"
            height="194"
            image={image}
            alt="image"
          />
        )}
      </div>
      <CardContent>
        <Typography sx={{ fontSize: "20PX", fontWeight: "bold" }}>
          persons
        </Typography>
        <Typography sx={{ fontSize: "16PX", fontWeight: "bold" }}>
          {persons.adults} adults {persons.child} chiled
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
        <CardContent>
          <Typography sx={{ fontSize: "20PX", fontWeight: "bold" }}>
            Facilities
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {facilities.map((facility) => (
              <Grid item xs={3} md={3} style={{ margin: "10px" }}>
                <Item>{facility}</Item>
              </Grid>
            ))}
          </Grid>
          <Typography sx={{ fontSize: "20PX", fontWeight: "bold" }}>
            No Facilities
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            {notfacilities.map((facility) => (
              <Grid item xs={4} md={4} style={{ margin: "10px" }}>
                <Item>{facility}</Item>
              </Grid>
            ))}
          </Grid>
          <CardContent>
            <Typography sx={{ fontSize: "20PX", fontWeight: "bold" }}>
              Beds
            </Typography>
            <Typography sx={{ fontSize: "16PX", fontWeight: "bold" }}>
              {Beds.bigBed} big {Beds.bed} small
            </Typography>
          </CardContent>
        </CardContent>
      </Collapse>
    </Card>
  );
}
export function RoomAddCard({ _id, setRooms }) {
  const [add, setAdd] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [facilities, setFacilities] = React.useState([]);
  const [noFacilities, setNoFacilities] = React.useState([]);
  const handleClick = () => {
    setAdd(true);
  };

  const submit = async (props) => {
    console.log("props", props);
    console.log("facilities", facilities);
    console.log("noFacilities", noFacilities);
    console.log("id", _id);

    setLoading(true);
    const response = await axiosApi
      .post(
        "/api/v1/rooms",
        JSON.stringify({
          persons: {
            adults: props.persons,
            child: 0,
          },
          Beds: {
            bed: props.beds,
            bigBed: 0,
          },
          name: props.name,
          type: props.type,
          space: props.space,
          facilities: facilities,
          notfacilities: noFacilities,
          price: props.price,
          hotelId: _id,
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("user"),
          },
          withCredential: true,
        }
      )
      .catch((error) => {
        console.log(error.message);
        alert("Error submitting form");
        setLoading(false);
      });
    if (response !== undefined) {
      setLoading(false);
      setAdd(true);
      // setRooms((prev)=>[...prev,])
    }

    console.log(response);
  };
  return (
    <>
      {add ? (
        <div>
          <Typography
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "22px",
              backgroundColor: "rgba(0,0,0,0.5)",
              padding: "10px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          >
            Create Room
          </Typography>
          <Form autoComplete="off" onFinish={submit} component="form">
            <AddRoomForm
              setFacilities={setFacilities}
              setNoFacilities={setNoFacilities}
            />
            <SubmitButton submit="submit" loading={loading} title="SAVE" />
          </Form>
        </div>
      ) : (
        <Card
          sx={{
            height: "47vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
            color: "white",
            borderRadius: "20px",
          }}
        >
          <CardContent>
            <IconButton
              sx={{
                padding: "20px",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Replace with your desired darker color
                },
              }}
              onClick={handleClick}
            >
              <LibraryAddIcon
                color="white"
                sx={{ fontSize: "66px", color: "white" }}
              />
            </IconButton>
          </CardContent>
        </Card>
      )}
    </>
  );
}
