import { useState } from "react";
import Grid from "@mui/material/Grid";
import CustomTextField, { SelectInput } from './../../../../../../Shared/CustomComponent/TextField/index';
import * as React from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
const AddRoomForm = ({ setFacilities, setNoFacilities }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [space, setSpace] = useState("");
  
  const [persons, setPersons] = useState("");
  const [beds, setBeds] = useState("");
  const [price, setPrice] = useState("");

  const [checked, setChecked] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [checked1, setChecked1] = React.useState([false]);

  const handleChange1 = (event) => {
    setFacilities([
      "free wifi",
      "Break fast",
      "garden view",
      "kitchen",
      "sea view",
    ]);
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange2 = (event) => {
    setFacilities((prevArray) => [...prevArray, "free wifi"]);
    setChecked([
      event.target.checked,
      checked[1],
      checked[2],
      checked[3],
      checked[4],
    ]);
  };

  const handleChange3 = (event) => {
    setFacilities((prevArray) => [...prevArray, "Break fast"]);
    setChecked([
      checked[0],
      event.target.checked,
      checked[2],
      checked[3],
      checked[4],
    ]);
  };
  const handleChange4 = (event) => {
    setFacilities((prevArray) => [...prevArray, "garden view"]);
    setChecked([
      checked[0],
      checked[1],
      event.target.checked,

      checked[3],
      checked[4],
    ]);
  };
  const handleChange5 = (event) => {
    setFacilities((prevArray) => [...prevArray, "kitchen"]);
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      event.target.checked,

      checked[4],
    ]);
  };
  const handleChange6 = (event) => {
    setFacilities((prevArray) => [...prevArray, "sea view"]);
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      event.target.checked,
    ]);
  };
  const handleChange7 = (event) => {
    setNoFacilities(["partially refundable"]);
    setChecked1([event.target.checked]);
  };

  const handleChange8 = (event) => {
    setFacilities((prevArray) => [...prevArray, "free wifi"]);
    setChecked1([event.target.checked]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleSpaceChange = (event) => {
    setSpace(event.target.value);
  };
  const handleFacilitiesChange = (event) => {
    const value = event.target.value;
    setFacilities(value);
  };
  const handleNoFacilitiesChange = (event) => {
    const value = event.target.value;
    setNoFacilities(value);
  };
  const handlePersonsChange = (event) => {
    const value = event.target.value;
    setPersons(value);
  };
  const handleBedsChange = (event) => {
    const value = event.target.value;
    setBeds(value);
  };
  const children = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControlLabel
        label="free wifi"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Break fast"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
      <FormControlLabel
        label="garden view"
        control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
      />
      <FormControlLabel
        label="kitchen"
        control={<Checkbox checked={checked[3]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="sea view"
        control={<Checkbox checked={checked[4]} onChange={handleChange6} />}
      />
    </Box>
  );
  const children1 = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        ml: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FormControlLabel
        label="partially refundable"
        control={<Checkbox checked={checked1[0]} onChange={handleChange8} />}
      />
    </Box>
  );
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <CustomTextField
        value={name}
        label="Name"
        name="Name"
        handleChange={handleNameChange}
      />
      <SelectInput
        label={"type"}
        value={type}
        name="type"
        helperText={"please select type"}
        handleChange={handleTypeChange}
        items={["single", "double", "triple"]}
      />
      <CustomTextField
        value={price}
        label="price"
        name="price"
        type="number"
        handleChange={handlePriceChange}
      />
      <CustomTextField
        value={space}
        label="space"
        name="space"
        type="number"
        handleChange={handleSpaceChange}
      />
      <CustomTextField
        value={persons}
        label="persons"
        name="persons"
        type="number"
        handleChange={handlePersonsChange}
      />
      <CustomTextField
        value={beds}
        label="beds"
        name="beds"
        type="number"
        handleChange={handleBedsChange}
      />
      <Box style={{ marginLeft: "8vw" }}>
        <FormControlLabel
          label="Facilities"
          name="Facilities"
          control={
            <Checkbox
              checked={
                checked[0] &&
                checked[1] &&
                checked[2] &&
                checked[3] &&
                checked[4]
              }
              onChange={handleChange1}
            />
          }
        />
        {children}
      </Box>
      <Box style={{ marginRight: "6vw" }}>
        <FormControlLabel
          label="No Facilities"
          name="noFacilities"
          control={<Checkbox checked={checked1[0]} onChange={handleChange7} />}
        />
        {children1}
      </Box>
    </Grid>
  );
};

export default AddRoomForm;
