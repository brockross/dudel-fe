import React from "react";
import { io } from "socket.io-client";

export const socket: SocketIOClient.Socket = io("http://localhost:1337");
socket.on("info", console.log);
export const SocketContext = React.createContext();
