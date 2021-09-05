import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { GenerateFud } from "./pages/GenerateFud";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <GenerateFud />
    </ChakraProvider>
  );
};
