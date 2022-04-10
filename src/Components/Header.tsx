import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import edgeFloral from "../edgeFloral.png";

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={4}>
          <img src={edgeFloral} style={{ width: "20vw", margin: 0 }} />
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant='h4'
            sx={{ color: "white", textAlign: "center", m: 3 }}
          >
            Doug And Jay
          </Typography>
        </Grid>
        <Grid item></Grid>
      </Grid>
    </>
  );
};

export default Header;
