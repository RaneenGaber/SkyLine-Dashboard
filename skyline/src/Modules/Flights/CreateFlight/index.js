import { useState, useEffect } from "react";
import { Form, Button } from "antd";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import Layout from "./../../../Shared/Layout";
import Grid from "@mui/material/Grid";

import SelectInput from "./Component";
import axiosApi from "../../../Globals/Api/axios";
import FormData from "./FormData";

const CreateFlight = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(FormData);
  const [airportFrom, setAirportFrom] = useState({});
  const [airportTo, setAirportTo] = useState({});
  const [classesName, setClassesName] = useState("");
  const [countryFromName, setCountryFromName] = useState("");
  const [countryToName, setCountryToName] = useState("");
  const [airportCompany, setAirportCompany] = useState([]);
  const [country, setCountry] = useState([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic (CAR)",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Democratic Republic of the Congo",
    "Republic of the Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (formerly Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia (formerly Macedonia)",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Palestine",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste (East Timor)",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates (UAE)",
    "United Kingdom (UK)",
    "United States of America (USA)",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City (Holy See)",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ]);
  const [classes, setClasses] = useState(["FirstA", "Business", "Economy"]);

  const [flightNo, setFlightNo] = useState("");
  const [flightNoError, setFlightNoError] = useState(false);
const [maxBagPerPerson, setMaxBagPerPerson] = useState("");
const [gate, setGate] = useState("");
const [gateError, setGateError] = useState(false);

const [price, setPrice] = useState("");




  const handleChangeAirportFrom = (event) => {
    setAirportFrom(event.target.value);
  };
  const handleChangeAirportTo = (event) => {
    setAirportTo(event.target.value);
  };
  const handleChangeCountryFrom = (event) => {
    setCountryFromName(event.target.value);
  };
  const handleChangeCountryTo = (event) => {
    setCountryToName(event.target.value);
  };
  const handleChangeclass = (event) => {
    setClassesName(event.target.value);
  };

  const getAirplaneCompany = async () => {
    const response = await axiosApi
      .get("/api/v1/airplaneCompany", {
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

    console.log("arr", response);
    setAirportCompany(response.data.data);
  };

  useEffect(() => {
    getAirplaneCompany();
  }, []);
   const handleFlightNumberChange = (event) => {
     const value = event.target.value;
     setFlightNo(value);

     // Validate flight number format
     const flightNumberRegex = /^[A-Z]{2}\d{3}$/;
     setFlightNoError(!flightNumberRegex.test(value));
   };
   const handleMaxBagPerPersonChange = (event) => {
     const value = event.target.value;
     setMaxBagPerPerson(value);

   };
   const handleGateChange = (event) => {
     const value = event.target.value;
     setGate(value);

     //Validate flight number format
     const gateRegex = /^[A-Z]{1}\d{1}$/;
     setGateError(!gateRegex.test(value));
   };
  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };
   const submit = async (props) => {
     setLoading(true);
     console.log(props);
     console.log(
       countryFromName,
       countryToName,
       classesName,
       maxBagPerPerson,
       flightNo,
       props.departureTime.format("hh:mm"),
       props.arivalTime.format("hh:mm"),
       props.departure.format("YYYY/MM/DD"),
       gate,
       price,
       airportFrom.id,
       airportTo.id
     );
if (flightNoError) {
        alert("please enter valid data");

} else {
  const response = await axiosApi
    .post(
      "/api/v1/flights",
      JSON.stringify({
        from: countryFromName,
        to: countryToName,
        maxBagPerPerson: maxBagPerPerson,
        classes: classesName,
        type: "one Way",
        flightNo: flightNo,
        fromDate: props.departureTime.format("hh:mm"),
        toDate: props.arivalTime.format("hh:mm"),
        date: props.departure.format("YYYY/MM/DD"),
        gate: gate,
        price: price,
        airplaneCompany: airportFrom.id,
        airplaneCompanyrecieve: airportTo.id,
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
    if (response.data.status === "success") {
      setSubmitted(true);
      //alert("flight create Successfully");
    }
    
  console.log(response);
}
    
   };
  return (
    <Layout>
      <div style={{ paddingBottom: " 3rem" }}>
        {submitted ? (
          <>
            <h2
              style={{
                textAlign: "center",
                paddingTop: "5rem",
                color: "white",
              }}
            >
              Flight is successfully created
            </h2>
          </>
        ) : (
          <div>
            <h1
              style={{
                textAlign: "center",
                marginBottom: " 3rem",
                color: "white",
              }}
            >
              Create Flights
            </h1>
            <Form onFinish={submit} autoComplete="off" component="form">
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <SelectInput
                  label={"Airport From"}
                  value={airportFrom}
                  helperText={"please select airport from"}
                  handleChange={handleChangeAirportFrom}
                  items={airportCompany}
                  flag={"airport"}
                />
                <SelectInput
                  label={"Airport To"}
                  value={airportTo}
                  helperText={"please select airport to"}
                  handleChange={handleChangeAirportTo}
                  items={airportCompany}
                  flag={"airport"}
                />
                <SelectInput
                  label={"Country From"}
                  value={countryFromName}
                  helperText={"please select Country from"}
                  handleChange={handleChangeCountryFrom}
                  items={country}
                />

                <SelectInput
                  label={"Country To"}
                  value={countryToName}
                  helperText={"please select Country to"}
                  handleChange={handleChangeCountryTo}
                  items={country}
                />
                <SelectInput
                  label={"Class"}
                  value={classesName}
                  helperText={"please select class"}
                  handleChange={handleChangeclass}
                  items={classes}
                />
                <Grid xs={6} md={3} style={{ margin: "20px" }}>
                  <TextField
                    label="Flight No"
                    value={flightNo}
                    variant="filled"
                    onChange={handleFlightNumberChange}
                    error={flightNoError}
                    helperText={
                      flightNoError
                        ? "Invalid flightNo format. It should be 3 Cabital letters followed by 2 digits."
                        : ""
                    }
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    style={{ width: "100%" }}
                  />
                </Grid>

                <Grid xs={6} md={3} style={{ margin: "20px" }}>
                  <TextField
                    label="Gate"
                    value={gate}
                    variant="filled"
                    onChange={handleGateChange}
                    InputProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    error={gateError}
                    helperText={
                      gateError
                        ? "Invalid gateError format. It should be 1 Cabital letters followed by 1 digits."
                        : ""
                    }
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={6} md={3} style={{ margin: "20px" }}>
                  <TextField
                    label="maxBagPerPerson"
                    value={maxBagPerPerson}
                    variant="filled"
                    onChange={handleMaxBagPerPersonChange}
                    type="number"
                    inputProps={{
                      max: "5",
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    style={{ width: "100%" }}
                  />
                </Grid>
                <Grid xs={6} md={3} style={{ margin: "20px" }}>
                  <TextField
                    label="Price"
                    value={price}
                    variant="filled"
                    onChange={handlePriceChange}
                    type="number"
                    inputProps={{
                      min: "0",
                      style: {
                        color: "white",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        color: "white",
                      },
                    }}
                    style={{ width: "100%" }}
                  />
                </Grid>

                {formData.map((e, index) => (
                  <Grid xs={6} md={3} style={{ margin: "20px" }}>
                    <Form.Item
                      value={e.value}
                      name={e.name} // Set the field name
                      key={index}
                      style={{}}
                      rules={[
                        {
                          required: true,
                          message: e.errorMessage,
                        },
                      ]}
                    >
                      {e.inputType === "time" ? (
                        <TimeField
                          label={e.label}
                          format="hh:mm a"
                          style={{
                            width: "100%",
                          }}
                          InputProps={{
                            style: {
                              color: "white",
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "white",
                            },
                          }}
                        />
                      ) : (
                        <DatePicker
                          label={e.label}
                          format="YYYY/MM/DD"
                          style={{
                            width: "100%",
                          }}
                          InputProps={{
                            style: {
                              color: "white",
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: "white",
                            },
                          }}
                        />
                      )}
                    </Form.Item>
                  </Grid>
                ))}
              </Grid>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  htmlType="submit"
                  size="large"
                  block
                  disabled={loading}
                  style={{
                    backgroundColor: "#010e30",
                    color: "white",
                    width: "20vw",
                  }}
                >
                  Apply
                </Button>
              </div>
            </Form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CreateFlight;
