import * as React from "react";
import { Box, Text, Link, VStack, Button, SlideFade } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { fudList } from "../data/fudList";
import { Layout } from "../components/Layout";

export const GenerateFud = () => {
  const { t, ready } = useTranslation();
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [fudName, setFudName] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const generateFud = React.useCallback(() => {
    setIsLoading(true);
    setIsOpen(false);
    const random = Math.floor(Math.random() * fudList.length);
    const randomElement = fudList[random];
    setTimeout(function () {
      setFudName(randomElement);
      setIsLoading(false);
      setIsOpen(true);
    }, 1000);
  }, []);

  return (
    <Layout>
      <Box>
        {ready && (
          <VStack spacing={2}>
            <Text fontSize="3xl" textAlign="center">
              <Link
                color="pink.300"
                href="https://macaronswap.finance"
                fontSize="4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                MacaronSwap
              </Link>
              {<br />}
              {t("fudPageDescription")}
            </Text>
            <Button
              colorScheme="pink"
              size="lg"
              onClick={generateFud}
              isLoading={isLoading}
            >
              {t("generateFud")}
            </Button>

            {fudName && (
              <SlideFade in={isOpen} offsetY="50px" reverse>
                <Box maxW="50vh">
                  <Text fontSize="2xl">{`FUD: ${t(
                    "fuds." + fudName + ".Text"
                  )}`}</Text>
                  <Text fontSize="1xl">{`Reality: ${t(
                    "fuds." + fudName + ".Reality"
                  )}`}</Text>
                </Box>
              </SlideFade>
            )}
          </VStack>
        )}
      </Box>
    </Layout>
  );
};
