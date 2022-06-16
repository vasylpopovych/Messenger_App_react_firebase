import React, { useContext, useState } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Grid, TextField, Button } from "@mui/material";
import { useCollectionData } from "react-firebase-hooks/firestore";
import "firebase/firestore";
import { collection, addDoc, orderBy, serverTimestamp, query } from "firebase/firestore";
import Message from "./Message";
import Loader from "./Loader";

const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const messagesCollection = query(collection(firestore, "messages"), orderBy("createdAt"));
  const [messages, loading, error] = useCollectionData(messagesCollection)
 

  const sendMessage = async () => {
    if (!value || value.trim().length === 0) return
    const docRef = await addDoc(collection(firestore, "messages"), {
      uid: user.uid,
      message: value,
      userName: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      createdAt: serverTimestamp(),
    });
    setValue("");
    console.log(value)
    
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <Grid
        container
        justify={"center"}
        alignItems={"center"}
        direction={"column"}
        style={{ height: window.innerHeight - 50, marginTop: 40 }}
      >
        <div
          style={{
            width: "80%",
            height: "50vh",
            border: "2px solid rgb(177, 181, 240)",
            overflowY: "auto",
            overflowX: 'none',
            borderRadius: 4,
          }}
        >
          {error && <strong>Error: {JSON.stringify(error)}</strong>}
          {messages.map((m) => (
            <Message key={Date.now() * Math.random()} data={m} />
          ))}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            fullWidth
            variant={"outlined"}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            SEND Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Chat;
