import React from "react";
import Reward from "./components/Reward";
import { ThemeProvider } from "react-jss";
import { theme } from "./utils/theme";
import "./styles.css";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Reward />
    </ThemeProvider>
  );
};

export default App;
