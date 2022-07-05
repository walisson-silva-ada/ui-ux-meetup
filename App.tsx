import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Container,
  DefaultText,
  Subtitle,
  ThemeButton,
  Title,
} from "./src/styles/App";

import darkTheme from "./src/styles/themes/dark";
import lightTheme from "./src/styles/themes/light";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Container>
        <Title>Meetup UI/UX</Title>
        <Subtitle>
          Boas práticas e bibliotecas para melhorar visual e usabilidade
        </Subtitle>

        <ThemeButton onPress={() => setIsDark(!isDark)}>
          <DefaultText>Alterar tema</DefaultText>
        </ThemeButton>

        <StatusBar style={isDark ? "light" : "dark"} />
      </Container>
    </ThemeProvider>
  );
}
