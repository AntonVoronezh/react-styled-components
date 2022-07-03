import "./App.css";
import styled from "styled-components";
import Title from "./components/Title";

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: black;
  padding: 2rem;
`;

function App() {
  return (
    <AppWrapper>
      <Title color={'red'}>7u5757</Title>
    </AppWrapper>
  );
}

export default App;
