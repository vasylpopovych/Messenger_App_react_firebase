import React, { useContext } from "react";
import { AppBar, Button, Grid } from "@mui/material";
import { Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/constants";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "..";

const Navbar = () => {  
  
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant="contained">Log Out</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
                <Button variant="contained">Login</Button>
            </NavLink>
            
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
