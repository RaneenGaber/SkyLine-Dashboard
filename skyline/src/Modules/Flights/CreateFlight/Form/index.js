import { useState, useEffect } from "react";
import { Form } from "antd";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimeField } from "@mui/x-date-pickers/TimeField";
import CustomTextField, {SelectInput} from "./../../../../Shared/CustomComponent/TextField";
import axiosApi from "../../../../Globals/Api/axios";
import styles from "./../../../../Shared/CustomComponent/TextField/styles.module.css";
import FormData from "./../FormData";

import Grid from "@mui/material/Grid";

const FlightForm = () => {
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
 

  
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      alignItems="center"
    >
        <SelectInput
          label={"Airport From"}
          value={airportFrom}
          name="airportFrom"
          handleChange={handleChangeAirportFrom}
          items={airportCompany}
          flag={"airport"}
        />
        <SelectInput
          label={"Airport To"}
          value={airportTo}
          name="airportTo"
          handleChange={handleChangeAirportTo}
          items={airportCompany}
          flag={"airport"}
        />
        <SelectInput
          label={"Country From"}
          name="countryFrom"
          value={countryFromName}
          handleChange={handleChangeCountryFrom}
          items={country}
        />

        <SelectInput
          label={"Country To"}
          value={countryToName}
          name="countryTo"
          handleChange={handleChangeCountryTo}
          items={country}
        />
        <SelectInput
          label={"Class"}
          value={classesName}
          name="class"
          handleChange={handleChangeclass}
          items={classes}
        />
        <CustomTextField
          value={flightNo}
          label="Flight No"
          name="flightNo"
          error={flightNoError}
          errorMessage="Invalid flightNo format. It should be 3 Cabital letters followed by 2 digits."
          handleChange={handleFlightNumberChange}
        />
        <CustomTextField
          value={gate}
          label="Gate"
          name="gate"
          error={gateError}
          errorMessage="Invalid gate format. It should be 1 Cabital letters followed by 1 digits."
          handleChange={handleGateChange}
        />

        <CustomTextField
          value={maxBagPerPerson}
          label="maxBagPerPerson"
          name="maxBagPerPerson"
          handleChange={handleMaxBagPerPersonChange}
          type="number"
        />
        <CustomTextField
          label={"Price"}
          value={price}
          name="price"
          handleChange={handlePriceChange}
        />

        {formData.map((e, index) => (
          <Grid xs={6} md={3} style={{ margin: "20px" }}>
            <Form.Item
              value={e.value}
              name={e.name} // Set the field name
              key={index}
              className={styles.fadeIn}
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
                  className={styles.customTextField}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
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
                  className={styles.customTextField}
                  style={{
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  }}
                  InputProps={{
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
  );
};

export default FlightForm;
