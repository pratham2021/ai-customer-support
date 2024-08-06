import styled from "styled-components";
import Background from "./components/Background";
import TextSection from "./components/TextSection";

export default function Home() {
  return (
    <Wrapper className="Home">
      <Background/>
      <TextSection/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
`;