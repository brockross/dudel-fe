import styled from "styled-components";
import Link from "next/link";

import { ContentWrapper } from "src/components/shared/shared-styled";

export default function App() {
  return (
    <ContentWrapper>
      <Link href="/pre-game">
        <Title>dudel.</Title>
      </Link>
    </ContentWrapper>
  );
}

const Title = styled.p`
  font-family: Helvetica;
  color: teal;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;
