import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components";
import { Container, Subtitle, Title } from "./src/styles/App";

import darkTheme from "./src/styles/themes/dark";
import lightTheme from "./src/styles/themes/light";

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Title>Meetup UI/UX</Title>
        <Subtitle>Aprendendo a utilizar o Styled Components</Subtitle>
        <StatusBar style="auto" />
      </Container>
    </ThemeProvider>
  );
}
