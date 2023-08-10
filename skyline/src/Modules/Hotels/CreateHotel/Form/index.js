import { useState } from "react";
import CustomTextField, {SelectInput} from "./../../../../Shared/CustomComponent/TextField";
import Grid from "@mui/material/Grid";

const HotelForm = () => {
  const [country, setCountry] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [hotelNameError, setHotelNameError] = useState("");
  const [hotelDesc, setHotelDescChange] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");

  const [price, setPrice] = useState("");
  const [latitude, setLatitude] = useState("");
    const [latitudeError, setLatitudeError] = useState(false);

  const [longitude, setLongitude] = useState("");
  const [longitudeError, setLongitudeError] = useState(false);

  const [city, setCity] = useState("");
  const [allCountry, setAllCountry] = useState([
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
  const [allCity, setAllCity] = useState([
    "Cairo",
    "Alexandria",
    "Giza",
    "Shubra El Kheima",
    "Port Said",
    "Suez",
    "Luxor",
    "Mansoura",
    "Tanta",
    "Asyut",
    "Ismailia",
    "Fayoum",
    "Zagazig",
    "Aswan",
    "Damietta",
    "Damanhur",
    "Minya",
    "Beni Suef",
    "Hurghada",
    "Qena",
    "Tokyo",
    "Delhi",
    "Shanghai",
    "São Paulo",
    "Mumbai",
    "Beijing",
    "Dhaka",
    "Mexico City",
    "Osaka",
    "Karachi",
    "Chongqing",
    "Istanbul",
    "Buenos Aires",
    "Kolkata",
    "Lagos",
    "Kinshasa",
    "Manila",
    "Rio de Janeiro",
    "Guangzhou",
    "Lahore",
    "Shenzhen",
    "Bangalore",
    "Moscow",
    "Tianjin",
    "Jakarta",
    "London",
    "Lima",
    "Bangkok",
    "Chennai",
    "New York City",
    "Chengdu",
    "Nairobi",
    "Hong Kong",
    "Ho Chi Minh City",
    "Hyderabad",
    "Wuhan",
    "Hangzhou",
    "Ahmedabad",
    "Kuala Lumpur",
    "Paris",
    "Riyadh",
    "Santiago",
    "Shijiazhuang",
    "Pune",
    "Johannesburg",
    "Baghdad",
    "Frankfurt",
    "Sydney",
    "Tehran",
    "Dallas",
    "Boston",
    "Miami",
    "Barcelona",
    "Casablanca",
    "Calgary",
    "Jeddah",
    "Berlin",
    "Abu Dhabi",
    "Caracas",
    "Taipei",
    "Bucharest",
    "Amman",
    "Athens",
    "San Francisco",
    "Belo Horizonte",
    "Wellington",
    "Houston",
    "Amsterdam",
    "Dublin",
    "Stockholm",
    "Budapest",
    "Zurich",
    "Seoul",
    "Lisbon",
    "Montreal",
    "Vienna",
    "Warsaw",
    "Hanoi",
    "Prague",
    "Copenhagen",
    "Brisbane",
    "Oslo",
    "Helsinki",
    "Cape Town",
    "Munich",
    "Rio Branco",
    "Nouakchott",
    "Riga",
    "Maputo",
    "Havana",
    "Belgrade",
    "Zagreb",
    "Sarajevo",
    "Vilnius",
    "Bratislava",
    "Tallinn",
  ]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };
  const handleAddressChange = (event) => {
    const value = event.target.value;

    setAddress(value);
    //const flightNumberRegex = /^(?!.*[^\p{L}\s'\-])(?!(?:.*\s){2})[\p{L}\s'\-]+$/;
    //setAddressError(!flightNumberRegex.test(value));
  };

  const handleHotelNameChange = (event) => {
    const value = event.target.value;
    setHotelName(value);

    // Validate flight number format
    // const flightNumberRegex = /^(?!.*[^\p{L}\s'\-])(?!(?:.*\s){2})[\p{L}\s'\-]+$/;
    //setHotelNameError(!flightNumberRegex.test(value));
  };
  const handleHotelDescChange = (event) => {
    const value = event.target.value;
    setHotelDescChange(value);
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    setPrice(value);
  };
  const handleLatitudeChange = (event) => {
    const value = event.target.value;
        setLatitude(value);

    const LatitudeRegex = /^[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([eE][-+]?[0-9]+)?$/
setLatitudeError(!LatitudeRegex.test(value));
  };
  const handleLongitudeChange = (event) => {
    const value = event.target.value;
    setLongitude(value);
        const LongitudeRegex =
          /^[-+]?([0-9]+(\.[0-9]*)?|\.[0-9]+)([eE][-+]?[0-9]+)?$/;
          setLongitudeError(!LongitudeRegex.test(value));

  };
  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
      <SelectInput
        label={"Country"}
        value={country}
        name="country"
        handleChange={handleCountryChange}
        items={allCountry}
      />

      <SelectInput
        label={"City"}
        value={city}
        name="city"
        handleChange={handleCityChange}
        items={allCity}
      />
      <CustomTextField
        value={hotelName}
        label="Hotel Name"
        name="hotelName"
        error={hotelNameError}
        errorMessage={"enter valid name"}
        handleChange={handleHotelNameChange}
      />
      <CustomTextField
        value={hotelDesc}
        label="Hotel Desc"
        name="hotelDesc"
        handleChange={handleHotelDescChange}
      />
      <CustomTextField
        value={address}
        label="Address"
        name="address"
        error={addressError}
        errorMessage={"enter valid address"}
        handleChange={handleAddressChange}
      />
      <CustomTextField
        value={price}
        label="Price"
        name="price"
        handleChange={handlePriceChange}
        type="number"
      />
      <CustomTextField
        value={longitude}
        label="Longitude"
        name="longitude"
        error={longitudeError}
        errorMessage={"enter valid Longitude"}
        handleChange={handleLongitudeChange}
        type="number"
      />
      <CustomTextField
        value={latitude}
        label="Latitude"
        name="latitude"
        error={latitudeError}
        errorMessage={"enter valid latitude"}
        handleChange={handleLatitudeChange}
        type="number"
      />
    </Grid>
  );
};

export default HotelForm;
