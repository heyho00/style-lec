import { Reset } from "styled-reset";
import GlobalStyle from "./styles/GlobalStyle";

import { ThemeProvider } from "styled-components";
import { useDarkMode } from "usehooks-ts";
import defaultTheme from "./styles/defaultTheme";
import darkTheme from "./styles/darkTheme";

import Switch from "./components/Switch";
import Button from "./components/Button";

export default function App() {
  const { isDarkMode, toggle: toggleDarkMode } = useDarkMode();

  const theme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />

      <Switch />
      <Button onClick={toggleDarkMode}>Toggle DarkMode</Button>
    </ThemeProvider>
  );
}
