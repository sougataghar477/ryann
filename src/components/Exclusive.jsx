import React from "react";
import { CopyIcon } from "@chakra-ui/icons";
import {
  SimpleGrid,
  Box,
  Container,
  Image,
  Heading,
  Text,
  Button,
  Icon,
  useClipboard,
  useToast,
} from "@chakra-ui/react";
export default function Exclusive() {
  const { onCopy, value, setValue, hasCopied } = useClipboard("");
  const toast = useToast();
  const copyToClipboard = (value) => {
    setValue(value);
    onCopy();
  };
  const copyLink = () => {
    copyToClipboard("https://onlyfans.com/itsryannmurphy");
    toast({
      title: "Link Copied.",
      status: "success",
      duration: 2000,
      isClosable: true,
      colorScheme: "black",
    });
  };

  const ofBtnProps = {
    mt: "24px",
    borderRadius: "0",
    borderWidth: "2px",
  };
  return (
    <Container
      maxW={"6xl"}
      height="100vh"
      px={[6, 12, 12, 24]}
      py={[12, 12, 12, 12]}
    >
      <SimpleGrid gap="32px" columns={[1, 1, 2]}>
        <Box>
          <Heading lineHeight={"1.6"}>Exclusive Content</Heading>
          <Text lineHeight={2} fontSize="18">
            Head over to my onlyfans page if you want to know me more and get
            exclusive photos 😉!
          </Text>
          <Button
            onClick={() => window.open("https://onlyfans.com/itsryannmurphy")}
            size={"lg"}
            variant={"outline"}
            colorScheme="black"
            {...ofBtnProps}
          >
            Check out my Onlyfans
          </Button>
          <br />
          <Button
            onClick={copyLink}
            size={"lg"}
            variant={"outline"}
            colorScheme="black"
            {...ofBtnProps}
          >
            Copy URL <CopyIcon ml="8px" />{" "}
          </Button>
        </Box>
        <Box>
          <Image borderRadius={"20px"} src="./740full-ryann-murph2y.jpg" />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
