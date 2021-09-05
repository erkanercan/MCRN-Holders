import * as React from "react";
import { Flex, Grid, HStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../components/ColorModeSwitcher";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  return (
    <Grid p={3}>
      <Flex justifySelf={["center", "flex-end"]}>
        <HStack spacing={2}>
          <ColorModeSwitcher />
          <LanguageSwitcher />
        </HStack>
      </Flex>
    </Grid>
  );
};
