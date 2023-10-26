import "./App.css";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import AllRoutes from "./components/AllRoutes";

function App() {
  return (
    <DIV className="App">
      <Navbar />
      <AllRoutes />
    </DIV>
  );
}

export default App;

const DIV = styled.div`
  height: 800px;
  background-image: linear-gradient(
    109.6deg,
    rgba(61, 131, 97, 1) 11.2%,
    rgba(28, 103, 88, 1) 91.1%
  );
  h3 {
    color: #054728;
  }
`;
