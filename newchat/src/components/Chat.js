import React, {useContext, useState} from "react";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@mui/material";
import firebase from "firebase/compat/app";
const Chat = () => {
  const {auth,firestore} = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState('');
  const sendMessage = async () => {
    firestore.collection('messages').add({
      uid: user.uid,
      displayName: user.displayName,
      photoURL: user.photoURL,
      text: value,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    setValue('');
  };
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
          <TextField
            fullWidth
            rowsMax={2}
            variant={"outlined"}
            value={value}
            onChange={(e) => setValue(e.target.value)}

          />
          <Button variant={"outlined"}>Send</Button>

        </Grid>

      </Grid>
    </Container>

  );
}
export default Chat;