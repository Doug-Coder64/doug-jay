import { Grid, Typography } from "@mui/material";
import { color } from "@mui/system";

const Location = () => {
  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant='h4' sx={{ textAlign: "center", color: "white" }}>
            Location
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography
            variant='body1'
            sx={{ textAlign: "center", color: "white" }}
          >
            Ceremony and Reception will be hosted at{" "}
            <a
              href='https://goo.gl/maps/wgSKMZQSzASF56Hz5'
              target='_blank'
              style={{ color: "white" }}
            >
              The Ink House
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography
            variant='body1'
            sx={{ textAlign: "center", color: "white" }}
          >
            The Ink House
          </Typography>
          <Typography
            variant='body1'
            sx={{ textAlign: "center", color: "white" }}
          >
            117N 2nd St
          </Typography>
          <Typography
            variant='body1'
            sx={{ textAlign: "center", color: "white" }}
          >
            Edwardsville, IL 62025
          </Typography>
        </Grid>
        <Grid item sx={{ mt: 10, pb: 10 }}>
          <Typography variant='h5' sx={{ textAlign: "center", color: "white" }}>
            Map
          </Typography>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3108.880886926942!2d-89.96069998424406!3d38.81228247958383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875f986a4a45077%3A0xcd15fcc0529dcda!2sThe%20Ink%20House!5e0!3m2!1sen!2sus!4v1649620287741!5m2!1sen!2sus'
            width='600'
            height='450'
            style={{ border: 0 }}
            loading='lazy'
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default Location;
