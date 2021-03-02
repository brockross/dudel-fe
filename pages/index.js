import { JoinOrStart } from "src/components/pre-game/JoinOrStart";
import { SocketContext, socket } from "src/context/socket";

export default function App() {
  return (
    <div>
      <h2>PRE-GAME</h2>
      <JoinOrStart />
    </div>
  );
}
