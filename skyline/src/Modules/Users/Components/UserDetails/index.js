 import  { useState } from 'react';
import './style.css';
import Layout from './../../../../Shared/Layout/';
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled ,useMediaQuery } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";

import rony from "./../../../../images/rony.jpg";
import id1 from "./../../../../images/id1.jpg";

import id2 from "./../../../../images/id2.jpg";

export default function UserDetails() {
      const [selectedPhoto, setSelectedPhoto] = useState(null);

  const [isEmailActive, setIsEmailActive] = useState(false);

  const handleEmailClick = () => {
    setIsEmailActive(true);
  };


const Item1 = styled(Paper)(({ theme }) => ({
  backgroundColor: "#010e30",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
  fontWeight:"bold",
  fontSize:"22px"
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "white",
  padding: theme.spacing(1),
  textAlign: "center",
  color: "black",
  minHeight:"10vh"
}));

  const isMediumScreen = useMediaQuery("(max-width: 960px)");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  const openPhoto = (photo) => {
    setSelectedPhoto(photo);
  };

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

 
  return (
    <Layout>
      <Grid container direction="row">
        <Avatar
          alt="Rony"
          src={rony}
          style={{
            width: "10vw",
            height: "10vw",
            backgroundColor: "#010e30",
            cursor: "pointer",
            marginLeft: "10vh",
          }}
          onClick={() => openPhoto(rony)}
        />
        {/* <FormControlLabel
          sx={{
            display: "block",
          }}
          control={
            <Switch
              checked={loading}
              onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          }
          label="Loading"
        /> */}
      </Grid>

      <Box
        sx={{
          flexGrow: 1,
          marginTop: "10vh",
          marginLeft: "10vh",
          marginBottom: "10vh",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            container
            direction="row"
            spacing={2}
            xs={isSmallScreen ? 12 : isMediumScreen ? 12 : 8}
          >
            <Grid container direction="row">
              <Grid
                xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 4.5}
                style={{ margin: "10px" }}
              >
                <Item1>Name</Item1>
                <Item>Raneen Gaber</Item>
              </Grid>
              <Grid
                item
                xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 4.5}
                style={{ margin: "10px" }}
              >
                <Item1>User Name</Item1>
                <Item>Rony</Item>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={8}>
              <Grid
                item
                xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 5}
                style={{ margin: "10px" }}
              >
                <Item1>Age</Item1>
                <Item>22</Item>
              </Grid>
              <Grid
                item
                xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 5}
                style={{ margin: "10px" }}
              >
                <Item1>Role</Item1>
                <Item>Admin</Item>
              </Grid>
            </Grid>
            <Grid container direction="row" spacing={8}>
              <Grid
                item
                xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 5}
                style={{ margin: "10px" }}
              >
                <Item1>Email</Item1>
                <Item>
                  raneen.gaber42@gmail.com
                  <br />
                  Status: <span style={{ color: "green" }}> active</span>
                </Item>
              </Grid>
              <Grid
                item
                xs={isSmallScreen ? 12 : isMediumScreen ? 8 : 5}
                style={{ margin: "10px" }}
              >
                <Item1>Phone</Item1>
                <Item>
                  01091731371
                  <br />
                  Status: <span style={{ color: "green" }}> active</span>
                </Item>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            direction="column"
            spacing={4}
            xs={isSmallScreen ? 12 : isMediumScreen ? 4 : 4}
          >
            <Grid item xs={isSmallScreen ? 12 : isMediumScreen ? 4 : 4}>
              <Item1>Front ID Photo</Item1>
              <Item>
                <ButtonBase onClick={() => openPhoto(id1)}>
                  <img src={id1} alt="id" width="200px" height="200px" />
                </ButtonBase>
              </Item>
            </Grid>

            <Grid item xs={isSmallScreen ? 12 : isMediumScreen ? 4 : 4}>
              <Item1>Back ID Photo</Item1>
              <Item>
                <ButtonBase onClick={() => openPhoto(id2)}>
                  <img src={id2} alt="id" width="200px" height="200px" />
                </ButtonBase>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {selectedPhoto && (
        <Dialog
          open={openPhoto}
          onClose={closePhoto}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <img src={selectedPhoto} alt="id" width="600px" height="600px" />

          <DialogActions>
            <Button onClick={closePhoto}>close</Button>
          </DialogActions>
        </Dialog>
      )}
    </Layout>
  );
}
