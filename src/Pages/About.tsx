import {
  Grid,
  Typography,
  InputLabel,
  Input,
  Button,
  TextField,
} from "@mui/material";
import { send } from "emailjs-com";
const About = () => {
  return (
    <>
      <Grid container justifyContent='center' alignItems='center'>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>
            Save the Date: <br /> August 6th, 2022
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>
            RSVP:
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{ mt: 1 }}
          justifyContent='center'
          alignItems='center'
        >
          <Typography
            variant='body1'
            sx={{ textAlign: "center", color: "white" }}
          >
            To RSVP, please email{" "}
            <a
              href='mailto:douglaspeterson6@gmail.com'
              target='_blank'
              style={{ color: "white" }}
            >
              Douglaspeterson6@gmail.com
            </a>
          </Typography>
          {/* <TextField
            label='Enter your Name'
            color='secondary'
            sx={{ color: "white", margin: "auto" }}
          ></TextField> */}
        </Grid>
      </Grid>
    </>
  );
};

export default About;
