import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Form } from "antd";
import styles from "./styles.module.css";
import { MenuItem } from "@mui/material";

export default function CustomTextField({
  label,
  value,
  handleChange,
  error,
  errorMessage,
  type,
  name,
}) {
  return (
    <Grid xs={4} md={3} style={{ margin: "10px" }}>
      <Form.Item value={value} name={name}>
        <div className={styles.fadeIn}>
          <TextField
            label={label}
            value={value}
            name={name}
            type={type ? "number" : "text"}
            onChange={handleChange}
            variant="filled"
            className={styles.customTextField}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
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
            error={error}
            helperText={error ? errorMessage  : ""}
          />
        </div>
      </Form.Item>
    </Grid>
  );
}

export  function SelectInput({
  value,
  handleChange,
  items,
  flag,
  label,
  name
}) {
  return (
    <Grid xs={4} md={3} style={{ margin: "10px" }}>
      <Form.Item
        value={value}
        className={styles.fadeIn}
        name={name} // Set the field name
      >
        <TextField
          select
          label={label}
          value={value}
          onChange={handleChange}
          variant="filled"
          className={styles.customTextField}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
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
      </Form.Item>
    </Grid>
  );
}