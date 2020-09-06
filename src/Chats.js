import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="Chats">
      <Chat
        name="Mark"
        message="Hey how are you 😃!"
        timestamp="40 seconds ago"
        profilePic="4.jpg"
      />
      <Chat
        name="Oscar"
        message="Loooool"
        timestamp="55 minutes ago"
        profilePic="2.jpg"
      />
      <Chat
        name="Isabella Moner"
        message="Love you"
        timestamp="2 days ago"
        profilePic="7.jpg"
      />
      <Chat
        name="Cristina"
        message="Tot bé?"
        timestamp="1 week ago"
        profilePic="3.jpg"
      />
    </div>
  );
};
export default Chats;
