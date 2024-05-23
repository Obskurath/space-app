import "normalize.css";
import styled from "styled-components";
import Header from "./components/Header";

const GradientBg = styled.div`
  background: linear-gradient(
    17deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100dvh;
`;

function App() {
  return (
    <>
      <GradientBg>
        <Header />
      </GradientBg>
    </>
  );
}

export default App;
