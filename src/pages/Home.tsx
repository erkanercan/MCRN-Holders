import * as React from "react";
import { Layout } from "../components/Layout";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const { t, ready } = useTranslation();

  return (
    <Layout>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            MCRN <br />
            <Text as={"span"} color={"pink.400"}>
              Holders
            </Text>
          </Heading>
          <Text color={"gray.500"}>{ready && t("homeDescription")}</Text>
        </Stack>
      </Container>
    </Layout>
  );
};
