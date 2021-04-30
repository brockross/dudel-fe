import { useTimer } from "react-timer-hook";
import sampleEndData from "./sample-end-data.json";

const TimerTest = () => {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp: time,
    autoStart: true,
  });

  // a set of components, which are each passed an expiryStamp and an onExpire handler--in which a setSomething is called to update this component's state and begin the next timed component
  // really could make a single TimedWrapper component which takes in those props, and use those for pretty much any timed section of the game
  // how to structure a "chaining" api? i.e., after TimedComponent1 fires its expiry handler, start TimedComponent2

  return (
    <div>{`Timer running = ${isRunning}. ${minutes} minutes and ${seconds} seconds.`}</div>
  );
};

export default TimerTest;
