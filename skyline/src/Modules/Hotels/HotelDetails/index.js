import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../../Shared/Layout";
import axiosApi from "../../../Globals/Api/axios";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import HotelForm from "../CreateHotel/Form";
import CustomHeadeing from "../../../Shared/CustomComponent/CustomHeading";
import CustomButton from "../../../Shared/CustomComponent/SubmitButton";
import HotelCard from "./Component/HotelCard";
import Loading from "../../../Shared/CustomComponent/Loading";
import RoomCard, { RoomAddCard } from "./Component/Room";
import { Form } from "antd";

export default function HotelDetails(props) {
  const { _id } = useParams();
  const [hotel, setHotel] = useState({});
  const [rooms, setRooms] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingRooms, setLoadingRooms] = useState(false);

  const getData = async () => {
    setLoading(true);
    const response = await axiosApi
      .get(`/api/v1/hotels/${_id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .catch((err) => {
        console.error(`error${err}`);
        setError(true);
      });
    if (response !== undefined) {
      setLoading(false);
      setHotel(response.data.data.data);
      console.log("sdsd", response.data.data.data);
    }
  };
  const getRooms = async () => {
    setLoadingRooms(true);
    const response = await axiosApi
      .get(`/api/v1/rooms?hotelId=${_id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .catch((err) => {
        console.error(`error${err}`);
        setError(true);
      });
    if (response !== undefined) {
      setLoadingRooms(false);
      setRooms(response.data.data);
      console.log("roome", response.data.data);
    }
  };
  useEffect(() => {
    getData();
    getRooms();
  }, []);

  const handleEdit = () => {
    console.log("handleEdit");
    setIsEdit(true);
  };
  const submit = async () => {
    setIsEdit(false);
    const response = await axiosApi
      .patch(
        `/api/v1/hotels/${_id}`,
        JSON.stringify({
          hotelName: props.hotelName,
          price: props.price,
          country: props.country,
          city: props.city,
          address: props.address,
          description: props.hotelDesc,
          location: {
            latitude: props.latitude,
            longitude: props.longitude,
          },
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
      if(response !== undefined) {
        setIsEdit(false)
      }
    console.log("respo",response);
  };
  const handleDelete = async (_id) => {
    const response=
    await axiosApi
      .delete(`/api/v1/rooms/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("user"),
        },
        withCredential: true,
      })
      .catch((error) => {
        console.log(error.message);
        alert("Error submitting form");
      });
      if(response!== undefined) {

        const updatedData = rooms.filter((item) => item._id!==_id);
        setRooms(updatedData);
      }

  };

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {isEdit ? (
          <>
            <CustomHeadeing title="Edit Hotel" />
            <Form autoComplete="off" onFinish={submit} component="form">
              <HotelForm />
              <CustomButton submit="submit" loading={loading} title="SAVE" />
            </Form>
          </>
        ) : (
          <>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <CustomHeadeing title="Hotel Details" />
              <CustomButton handleClick={handleEdit} title="Edit" />
            </Grid>
            {loading ? (
              <div>
                <Loading />
              </div>
            ) : null}
            <HotelCard
              name={hotel.hotelName}
              desc={hotel.description}
              image={hotel.hotelPhoto}
              price={hotel.price}
              city={hotel.city}
              address={hotel.address}
              country={hotel.country}
              // longitude={hotel.location.longitude}
              // latitude={hotel.location.latitude}
            />
            <CustomHeadeing title="Rooms" />
            {loadingRooms ? <Loading /> : null}
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {rooms.map((room) => (
                <Grid
                  item
                  xs={8}
                  md={4.5}
                  style={{
                    marginTop: "20px",
                    marginLeft: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <RoomCard
                    hotelId={_id}
                    _id={room._id}
                    name={room.name}
                    type={room.type}
                    persons={room.persons}
                    space={room.space}
                    Beds={room.Beds}
                    price={room.price}
                    image={room.roomPhoto}
                    facilities={room.facilities}
                    notfacilities={room.notfacilities}
                    handelDelete={handleDelete}
                  />
                </Grid>
              ))}
              <Grid item xs={8} md={3.5} style={{ margin: "20px" }}>
                <RoomAddCard _id={_id} setRooms={setRooms} />
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Layout>
  );
}
