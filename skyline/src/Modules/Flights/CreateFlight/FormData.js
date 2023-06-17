 export default FormData = [
  {
    name: "departureTime",
    value: "",
    inputType: "time",
    label: "DepartureTime",
    labelInput: "DepartureTime",
    errorMessage: "Please enter a Departure Time",
  },
  {
    name: "arivalTime",
    value: "",
    inputType: "time",
    label: "ArivalTime",
    labelInput: "ArivalTime",
    errorMessage: "Please enter a arival Time ",
  },

  {
    name: "departure",
    value: "",
    label: "Departure",
    labelInput: "Departure",
    errorMessage: "Please enter a Departure",
  },
];


// const [SelectInput, setSelectInput] = React.useState([
//   {
//     value: airportCompanyFrom,
//     helperText: "please select airport from",
//     handleChange: handleChangeAirportFrom,
//     items: airportCompany,
//     flag: "airport",
//   },
//   {
//     value: { airportCompanyTo },
//     helperText: "please select airport to",
//     handleChange: { handleChangeAirportTo },
//     items: { airportCompany },
//     flag: "airport",
//   },
//   {
//     value: { countryFromName },
//     helperText: "please select country from",
//     handleChange: { handleChangeCountryFrom },
//     items: { country },
//     flag: "country",
//   },
//   {
//     value: { countryToName },
//     helperText: "please select country to",
//     handleChange: { handleChangeCountryTo },
//     items: { country },
//     flag: "country",
//   },
//   {
//     value: { classesName },
//     helperText: "please select class",
//     handleChange: { handleChangeclass },
//     items: { classes },
//     flag: "class",
//   },
// ]);