import { Button, HStack, Link, StackProps, Text } from "@chakra-ui/react";
import * as React from "react";
import Cookies from "universal-cookie/es6";
const cookies = new Cookies();

export const CookieBanner = (props: StackProps) => {
  const [accepted, setAccepted] = React.useState<boolean>(true);
  React.useEffect(() => {
    if (!cookies.get("cookiesAccepted")) {
      setAccepted(false);
    }
  }, []);

  const handleAccept = React.useCallback(() => {
    cookies.set("cookiesAccepted", true);
    setAccepted(true);
  }, []);

  return (
    <>
      {!accepted && (
        <HStack justify="center" spacing="4" p="4" bg="gray.700" {...props}>
          <Text color="white" fontSize={{ base: "sm", md: "md" }}>
            By using our website, you agree to the use of cookies as described
            in our{" "}
            <Link href="#" textDecoration="underline">
              cookie policy
            </Link>
          </Text>
          <Button
            bg="white"
            color="black"
            _hover={{ bg: "gray.100" }}
            size="sm"
            flexShrink={0}
            onClick={handleAccept}
          >
            Accept
          </Button>
        </HStack>
      )}
    </>
  );
};
