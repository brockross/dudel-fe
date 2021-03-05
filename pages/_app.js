import { useState } from "react";

import "../styles/globals.css";
import { SocketContext, socket } from "src/context/socket";
import { GameCodeContext } from "src/context/game-code";

function MyApp({ Component, pageProps }) {
  const [gameCode, setGameCode] = useState("");
  return (
    <SocketContext.Provider value={socket}>
      <GameCodeContext.Provider
        value={{
          gameCode,
          setGameCode,
        }}
      >
        <Component {...pageProps} />
      </GameCodeContext.Provider>
    </SocketContext.Provider>
  );
}

export default MyApp;
