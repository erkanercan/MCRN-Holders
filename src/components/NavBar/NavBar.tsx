import { Box, Flex, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import * as React from "react";
import { NavContent } from "./NavContent";

export const NavBar = () => (
  <Box
    as="header"
    height="16"
    bg={useColorModeValue("white", "gray.800")}
    position="relative"
  >
    <Box
      height="100%"
      maxW="7xl"
      mx="auto"
      ps={{ base: "6", md: "8" }}
      pe={{ base: "5", md: "0" }}
    >
      <Flex
        as="nav"
        aria-label="Site navigation"
        align="center"
        justify="space-between"
        height="100%"
      >
        <Box as="a" href="#" rel="home">
          {/* Replace this ⬇️ with your company name */}
          <VisuallyHidden>Envelope</VisuallyHidden>
        </Box>
        <NavContent.Desktop display={{ base: "none", md: "flex" }} />
        <NavContent.Mobile display={{ base: "flex", md: "none" }} />
      </Flex>
    </Box>
  </Box>
);
