import Typography from "@mui/material/Typography";
export default function CustomHeadeing({title}) {

  

  return (
    <Typography
      variant="h2"
      gutterBottom
      style={{
        fontSize:"60px",
        color: "white",
        textAlign: "center",
        marginBottom: " 4rem",
        marginTop: " 4rem",
        padding:"4px"
        
      }}
    >
      {title}
      <hr style={{color: "white", width:"100%"}}/>
    </Typography>
  );
}
