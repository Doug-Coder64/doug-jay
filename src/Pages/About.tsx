import { Grid, Typography } from "@mui/material";
const About = () => {
  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={12} sx={{ mt: 5 }}>
          <Typography variant='h4' sx={{ textAlign: "center", color: "white" }}>
            August 6th, 2022
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default About;
