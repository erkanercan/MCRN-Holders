import * as React from "react";
import { Box, Text, Link, VStack, Grid, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { fudList } from "../data/fudList";

export const GenerateFud = () => {
  const { t, ready } = useTranslation();
  const [fudName, setFudName] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const generateFud = React.useCallback(() => {
    setIsLoading(true);
    const random = Math.floor(Math.random() * fudList.length);
    const randomElement = fudList[random];
    setTimeout(function () {
      setFudName(randomElement);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
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

          {fudName && (
            <Box maxW="50vh">
              <Text fontSize="2xl">{`FUD: ${t(
                "fuds." + fudName + ".Text"
              )}`}</Text>
              <Text fontSize="1xl">{`Reality: ${t(
                "fuds." + fudName + ".Reality"
              )}`}</Text>
            </Box>
          )}

          <Button
            colorScheme="pink"
            size="lg"
            onClick={generateFud}
            isLoading={isLoading}
          >
            {t("generateFud")}
          </Button>
        </VStack>
      )}
    </Box>
  );
};
