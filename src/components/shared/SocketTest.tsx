import React, { useEffect } from "react";
import { io } from "socket.io-client";

export const SocketTest = () => {
  useEffect(() => {
    const socket = io("http://localhost:1337");
    socket.on("testyBoi", console.log);
  }, []);

  return <div>placeholder</div>;
};
