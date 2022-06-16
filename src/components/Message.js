import React from "react";
import App from "../styles/App.css";
import { useContext } from "react";
import { Context } from "..";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ data }) => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  console.log(data);
  return (
    <div
      className="messageContainer"
      style={{ marginLeft: data.uid === user.uid ? "auto" : "10px" }}
    >
      <img src={data.avatar} className="messageAvatar"></img>
      <div
        className="messageText"
        style={{
          background:
            data.uid === user.uid ? "rgb(114, 182, 114)" : "rgb(162, 162, 218)",
        }}
      >
        {data.message}
      </div>
    </div>
  );
};

export default Message;
