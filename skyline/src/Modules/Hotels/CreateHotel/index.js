import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Form } from "antd";
import Layout from "./../../../Shared/Layout";
import axiosApi from "../../../Globals/Api/axios";
import HotelForm from "./Form";
import Loading from "./../../../Shared/CustomComponent/Loading/index";
import AlertDialogSlide from "./../../../Shared/CustomComponent/PopupText/index";
import CustomButton from "../../../Shared/CustomComponent/SubmitButton";
import CustomHeadeing from "../../../Shared/CustomComponent/CustomHeading";

const CreateHotel = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

  const submit = async (props) => {
    setLoading(true);
    console.log(props);
    const response = await axiosApi
      .post(
        "/api/v1/hotels",
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
    if (response!==undefined) {
      setLoading(false);
      setSubmitted(true);
             navigate(`/Hotel/HotelList`);

    }

    console.log(response);
  };
  return (
    <Layout>
      <div>
        {loading ? <Loading /> : null}
        {submitted ? (
          <AlertDialogSlide message="Form Create Successfully!." />
        ) : null}
        <CustomHeadeing title="Create Hotel" />
        <Form autoComplete="off" onFinish={submit} component="form">
          <HotelForm />
          <CustomButton submit="submit" loading={loading} title="SAVE" />
        </Form>
      </div>
    </Layout>
  );
};

export default CreateHotel;
