import React from "react";
import styled from "styled-components";

export interface SubmitButtonProps {
  handleSubmit: Function;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  handleSubmit,
  children,
}) => {
  return <Button onClick={handleSubmit}>{children || "submit"}</Button>;
};

const Button = styled.div`
  width: 100px;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #e96d29;
  color: white;
  padding: 0.5em;
  border-radius: 5px;
  cursor: pointer;
`;
