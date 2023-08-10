import { useState } from "react";
import { Form } from "antd";
import { useNavigate } from "react-router-dom";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Layout from "./../../../Shared/Layout";
import Grid from "@mui/material/Grid";
import axiosApi from "../../../Globals/Api/axios";
import CustomButton from "../../../Shared/CustomComponent/SubmitButton";
import CustomTextField, {SelectInput,} from "../../../Shared/CustomComponent/TextField";
import AlertDialogSlide from "../../../Shared/CustomComponent/PopupText";
import CustomHeadeing from "../../../Shared/CustomComponent/CustomHeading";
import styles from "./../../../Shared/CustomComponent/TextField/styles.module.css";
import FlightForm from "./Form";

const CreateFlight = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();



  
   const submit = async (props) => {
     setLoading(true);
     console.log("props", props);
     console.log(
       props.countryFrom,
       props.countryTo,
       props.class,
       props.maxBagPerPerson,
       props.flightNo,
       props.departureTime.format("hh:mm"),
       props.arivalTime.format("hh:mm"),
       props.departure.format("YYYY/MM/DD"),
       props.gate,
       props.price,
       props.airportFrom.id,
       props.airportTo.id
     );
  const response = await axiosApi
    .post(
      "/api/v1/flights",
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
    if (response!== undefined) {
      setSubmitted(true);
       navigate(`/Flight/FlightList`);
      //alert("flight create Successfully");
    }
    
  console.log(response);

    
   };
  return (
    <Layout>
      <div style={{ paddingBottom: " 3rem" }}>
        {submitted ? (
          <>
            <AlertDialogSlide message="Flight is Created Successfully!" />
          </>
        ) : (
          <div>
            <CustomHeadeing title="Create Flight" />
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
          </div>
         )}
          </div>
    </Layout>
  );
};

export default CreateFlight;