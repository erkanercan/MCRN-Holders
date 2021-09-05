import * as React from "react";
import { Box, Text, Link, VStack, Grid, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const GenerateFud = () => {
  const { t, ready } = useTranslation();

  return (
    <Box>
      {ready && (
        <Box textAlign="center" fontSize="xl">
          <Grid minH="100vh" p={3}>
            <VStack spacing={2}>
              <Text>
                <Link
                  color="pink.300"
                  href="https://macaronswap.finance"
                  fontSize="2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MacaronSwap
                </Link>{" "}
                {t("pageDescription")}
              </Text>

              <Button colorScheme="pink" size="lg">
                {t("generateFud")}
              </Button>
            </VStack>
          </Grid>
        </Box>
      )}
    </Box>
  );
};
