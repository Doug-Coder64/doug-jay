import { Button } from "@mui/material";
import { display, width } from "@mui/system";
const Navbar = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button href='/' variant='contained' color='secondary' sx={{ mx: 1 }}>
          About
        </Button>
        {/* <Button
          href='/registry'
          variant='contained'
          color='secondary'
          sx={{ mx: 1 }}
        >
          Registry
        </Button> */}
        <Button
          href='/location'
          variant='contained'
          color='secondary'
          sx={{ mx: 1 }}
        >
          Location
        </Button>
      </div>
    </>
  );
};

export default Navbar;
