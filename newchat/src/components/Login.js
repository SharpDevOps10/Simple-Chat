import React, {useContext} from "react";
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";
import firebase from 'firebase/compat/app';

const Login = () => {
  const {auth} = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);
    console.log(user);
  };


  return (
    <Container>
      <Grid container
            style={{height : window.innerHeight - 50}}
            alignItems={"center"}
            justify={"center"}
      >
        <Grid style={{width : 4000, background : 'lightgray'}}
              container
              alignItems={"center"}
              direction={"column"}
        >
          <Box p={5}>
            <Button onClick={login} variant={"outlined"}>Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>

  );
}
export default Login;