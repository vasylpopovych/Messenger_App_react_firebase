import { Box, Button, Container, Grid } from "@mui/material";
import React, { useContext } from "react";
import { Context } from "..";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {

  const { auth } = useContext(Context);
  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50 }}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid
          container
          style={{ width: 300, background: "#cedbf5", borderRadius: 5 }}
          alignItems={"center"}
          justifyContent={"center"}
          direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant="contained">
              Enter with Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
