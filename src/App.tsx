import React from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "./styles/themes/dark";
import Globalstyles from "./styles/Globalstyles.";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={dark}>
      <Globalstyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
