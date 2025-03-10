import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{ flexGrow: 1 }}>
          ImproveByFaz
        </Typography>
        <Typography variant='body1'>
          <Link
            to='/'
            style={{ color: "white", textDecoration: "none", marginRight: 20 }}
          >
            Home
          </Link>
          <Link to='/list' style={{ color: "white", textDecoration: "none" }}>
            Topics
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
