import React from "react";

export type TestyProps = {
  opt: String;
  num: Number;
};

export const TestyBoi: React.FC<TestyProps> = ({ opt, num }): JSX.Element => {
  return (
    <h2>
      hey {opt} - {num}
    </h2>
  );
};
