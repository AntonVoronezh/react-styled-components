import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";
import Flex from "./components/Flex";
import Console from "./components/Console";
import Button from "./components/Button";

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
        <Title >Console cmd 2022. AntonVoronezh</Title>
      </Flex>
      <Flex direction={"column"} margin={"10px 0"}>
        <Console />
        <Button color={"green"} self={"flex-end"}>
          Отправить
        </Button>
      </Flex>
    </AppWrapper>
  );
}

export default App;
