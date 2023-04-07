import React from "react";
import {Box, Button, Container, Grid} from "@mui/material";
const Login = () => {
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
            <Button>Enter with Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>

  );
}
export default Login;