import React, { useState, useEffect, useContext } from "react";

import { SubmitButton } from "src/components/shared/SubmitButton";
import { SocketContext } from "src/context/socket";

export const AddUser: React.FC = () => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.on("user-added", ({ username }) => {
      console.log(`${username} is ready to play!`);
    });
  }, []);

  const handleUsernameText = (e: React.SyntheticEvent) => {
    setUsername((e.target as HTMLInputElement).value);
  };

  const handleAddUser = () => {
    socket.emit("add-user", { username });
  };

  return (
    <div>
      <label htmlFor="username">What's your name? </label>
      <input
        type="text"
        name="username"
        placeholder="Enter a username"
        onChange={handleUsernameText}
      />
      <SubmitButton handleSubmit={handleAddUser}>Submit</SubmitButton>
    </div>
  );
};
