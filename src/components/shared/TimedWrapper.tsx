import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useTimer } from "react-timer-hook";

type TimedWrapperProps = {
  expiryTimestamp?: number;
  displayCountdown?: boolean;
  onExpire: () => void;
  children: React.ReactNode;
};

const TimedWrapper = (props: TimedWrapperProps) => {
  const defaultTime = new Date();
  const defaultTimestamp = defaultTime.setSeconds(
    defaultTime.getSeconds() + 10
  );

  const {
    expiryTimestamp = defaultTimestamp,
    displayCountdown,
    onExpire,
    children,
  } = props;
  const { seconds, minutes, isRunning } = useTimer({
    expiryTimestamp,
    onExpire,
    autoStart: true,
  });

  return (
    <Wrapper>
      {children}
      <CountdownText shouldShow={displayCountdown} timerActive={isRunning}>
        {minutes || "00"} : {seconds}
      </CountdownText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid teal;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const CountdownText = styled.span`
  display: ${({ shouldShow }) => (shouldShow ? "inline" : "none")};
  color: ${({ timerActive }) => (timerActive ? "green" : "red")};
  font-family: monospace;
  font-size: 11px;
`;

export default TimedWrapper;
