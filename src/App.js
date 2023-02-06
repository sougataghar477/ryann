import * as React from "react";
import Hero from "./components/Hero";
import { Header } from "./components/Header";
// import { About } from './components/About';
import About from "./components/About";
import Exclusive from "./components/Exclusive";
import { Buy } from "./components/Buy";
import { Checkout } from "./components/Checkout";
import { Route, Routes } from "react-router-dom";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import {
  ThemeProvider,
  theme,
  ColorModeProvider,
  CSSReset,
} from "@chakra-ui/react";
import themeConfig from "./theme";
function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Header />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/exclusive" element={<Exclusive />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/cart" element={<Checkout />} />
          </Routes>
        </ColorModeProvider>
      </ThemeProvider>
    </ChakraProvider>
  );
}
export default App;
