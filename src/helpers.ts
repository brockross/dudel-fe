// convention: "fetch"-prefixed functions mimic a RESTy interaction, where the request and response are bundled into a sort of transaction via callback. Use these in situations where the client knows what it wants and is asking for it. Use regular event emission/listening when the client needs to know information (e.g., game state updates) but doesn't necessarily know to ask for it

// export const fetchPlayerList = (socket: SocketIOClient.Socket) => {
//   return new Promise((resolve, reject) => {
//     socket.emit("fetch-player-list", (response) => {
//       resolve(response);
//     });
//     // TODO: handle errors, reject
//   });
// };

// export const fetchInitialPrompt = (socket: SocketIOClient.Socket) => {
//   return new Promise((resolve, reject) => {
//     socket.emit("fetch-initial-prompt", (response) => {
//       resolve(response);
//     });
//   });
// };

export const socketFetch = (
  socket: SocketIOClient.Socket,
  eventName: string
) => {
  return new Promise((resolve, reject) => {
    socket.emit(eventName, (response) => {
      resolve(response);
    });
    // TODO: handle errors, reject
  });
};

// not sure yet how much convention to adopt for other callback-based interactions--probably will figure that out as game logic develops. For now I'm just going to write ad-hoc callback-style functions when it seems to make sense (e.g., need to know A- if the game creation was successful, and B- what the game code is)
export const joinGame = (
  socket: SocketIOClient.Socket,
  gameCode: string
): Promise<string> => {
  return new Promise((resolve, reject) => {
    socket.emit("join-game", gameCode, (response) => {
      if (response.success) {
        resolve(response.gameCode);
      } else {
        reject(response.msg);
      }
    });
  });
};
export const createGame = (socket: SocketIOClient.Socket): Promise<string> => {
  return new Promise((resolve, reject) => {
    socket.emit("create-game", (response) => {
      if (response.success) {
        resolve(response.gameCode);
      } else {
        reject(response.msg);
      }
    });
  });
};
