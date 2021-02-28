import { JoinOrStart } from "src/components/pre-game/JoinOrStart";
import { SocketContext, socket } from "src/context/socket";

export default function App() {
  return (
    <SocketContext.Provider value={socket}>
      <h2>PRE-GAME</h2>
      <JoinOrStart />
    </SocketContext.Provider>
  );
}
