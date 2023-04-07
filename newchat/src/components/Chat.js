import React, {useContext} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@mui/material";
const Chat = () => {
  const {auth,firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  return (
    <Container>
      <Grid container
            style={{height : window.innerHeight - 50, marginTop : 20} }

            justify={"center"}>
            <div style={{width : '8.0%', height : '70vh', border : '1px solid gray', overflowY : 'auto'}}>


            </div>
        <Grid
          container
          direction={"column"}
          alingItems={"flex-end"}
          style={{width : '80%'}}
        >
          <TextField variant={"outlined"}/>
          <Button>Send</Button>

        </Grid>

      </Grid>
    </Container>

  );
}
export default Chat;