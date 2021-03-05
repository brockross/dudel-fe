import React, { useState, useEffect, useContext } from "react";

import { SubmitButton } from "src/components/shared/SubmitButton";
import { SocketContext } from "src/context/socket";

export interface AddUserProps {
  handleUsernameText: Function;
  handleAddUser: Function;
}

export const AddUser: React.FC<AddUserProps> = ({
  handleUsernameText,
  handleAddUser,
}) => {
  const socket: SocketIOClient.Socket = useContext(SocketContext);

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
