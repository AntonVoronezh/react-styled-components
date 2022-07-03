import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  padding: 2rem;
`;

function App() {
  return (
    <AppWrapper>
      <Flex justify={"center"}>
        <Title color={"green"}>Console cmd 2022. AntonVoronezh</Title>
      </Flex>
      <Console />
    </AppWrapper>
  );
}

export default App;
