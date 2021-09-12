import * as React from "react";
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import { CookieBanner } from "./CookieBanner";
import { NavBar } from "./NavBar/NavBar";

export const Layout = (props: any) => {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Box as="main" minH="calc(100vh - 60px)" px={["25px", "unset"]}>
        {props.children}
      </Box>
      <CookieBanner position="absolute" bottom="0" right="0" left="0" />
    </ChakraProvider>
  );
};
