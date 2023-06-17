import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import MenuList from "@mui/material/MenuList";

export default function SelectInput({
  value,
  helperText,
  handleChange,
  items,
  flag,
  label,
}) {
  return (
    <Grid xs={6} md={3} style={{ margin: "20px" }}>
      <TextField
        select
        label={label}
        value={value}
        helperText={helperText}
        onChange={handleChange}
        variant="filled"
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
      >
        {items.map((e, id) => (
          <MenuItem key={id} value={e} style={{ color: "black" }}>
            {flag === "airport" ? e.airplaneName : e}
          </MenuItem>
        ))}
      </TextField>
    </Grid>
  );
}

export  function SelectInput1({
  value,
  handleChange,
  items,
  flag
}) {
  return (
    <TextField
      select
      value={value}
      onChange={handleChange}
      variant="filled"
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
    >
      {items.map((e, id) => (
        <MenuItem key={id} value={e} style={{ color: "black" }}>
          {flag === "airport" ? e.airplaneName : e}
        </MenuItem>
      ))}
    </TextField>
  );
}