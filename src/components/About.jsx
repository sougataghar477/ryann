import React from "react";
import {
  SimpleGrid,
  Box,
  Container,
  Image,
  Heading,
  Text,
} from "@chakra-ui/react";
export default function About() {
  return (
    <Container
      maxW={"6xl"}
      height="100vh"
      px={[6, 12, 12, 24]}
      py={[12, 12, 12, 12]}
    >
      <SimpleGrid gap="32px" columns={[1, 1, 2]}>
        <Box>
          <Heading lineHeight={"30px"}>About</Heading>
          <Text lineHeight={2} fontSize="18">
            Ryann Murphy is a beautiful and young famous Model & Social Media
            Influencer who was born in Los Angeles, California, United States on
            19th January 1993 and currently she living in Los Angeles,
            California, United States with her Family, She Ryann Murphy follows
            Christian and she was born in a Christian Family.
          </Text>
        </Box>
        <Box>
          <Image borderRadius={"20px"} src="./740full-ryann-murp9hy.jpg" />
        </Box>
      </SimpleGrid>
    </Container>
  );
}
