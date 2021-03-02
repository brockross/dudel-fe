import "../styles/globals.css";
import { SocketContext, socket } from "src/context/socket";

function MyApp({ Component, pageProps }) {
  return (
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default MyApp;
