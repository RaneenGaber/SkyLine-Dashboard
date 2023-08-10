import { useState, useEffect } from "react";
import Layout from "../../../Shared/Layout";
import axiosApi from "../../../Globals/Api/axios";
import Grid from "@mui/material/Grid";
import { Form } from "antd";
import { useParams } from "react-router-dom";
import { SelectInput } from "../../../Shared/CustomComponent/TextField";
import FlightForm from "../CreateFlight/Form";
import FlightCard from "./FlightCard"
import CustomHeadeing from "../../../Shared/CustomComponent/CustomHeading";
import CustomButton from "../../../Shared/CustomComponent/SubmitButton";
import Loading from "../../../Shared/CustomComponent/Loading";

export default function FlightDetails(props) {
  const { _id } = useParams();
  const [flight, setFlight] = useState({});
  var [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  console.log("props", _id);
  const getData = async () => {
            setLoading(true);

    const response = await axiosApi
      .get(`/api/v1/flights/${_id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .catch((err) => {
        console.error(`error${err}`);
      });
      if(response!==undefined) {
        setLoading(false)
        setFlight(response.data.data.data);
      }

  };
  console.log("flight", flight);

  useEffect(() => {
    getData();
  }, []);

  const handleEdit = () => {
    setIsEdit(true);
  };
  const submit = async (props) => {
    setIsEdit(false);
    setLoading(true);
    console.log("props", props);
    const response = await axiosApi
      .patch(
        `/api/v1/flights/${_id}`,
        JSON.stringify({
          from: props.countryFrom,
          to: props.countryTo,
          maxBagPerPerson: props.maxBagPerPerson,
          classes: props.class,
          type: "one Way",
          flightNo: props.flightNo,
          fromDate: props.departureTime.format("hh:mm"),
          toDate: props.arivalTime.format("hh:mm"),
          date: props.departure.format("YYYY/MM/DD"),
          gate: props.gate,
          price: props.price,
          airplaneCompany: props.airportFrom.id,
          airplaneCompanyrecieve: props.airportTo.id,
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
        setLoading(false);
      }
    console.log("reaponse",response);
  };

  return (
    <Layout>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CustomHeadeing title="Flight Details" />
        {isEdit ? null : <CustomButton handleClick={handleEdit} title="Edit" />}
      </Grid>
      {isEdit ? (
        <Form onFinish={submit} autoComplete="off" component="form">
          <FlightForm />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton submit="submit" loading={loading} title="SAVE" />
          </div>
        </Form>
      ) : loading ? (
        <Loading />
      ) : (
        <FlightCard
          flightNo={flight.flightNo}
          gate={flight.gate}
          price={flight.price}
          bagNo={flight.maxBagPerPerson}
          fromDate={flight.fromDate}
          toDate={flight.toDate}
          date={flight.date}
          classes={flight.classes}
          type={flight.type}
          countryFrom={flight.from}
          countryTo={flight.to}
        />
      )}
    </Layout>
  );
}
