import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Text,
  Image,
  Divider,
  Heading,
} from "@chakra-ui/react";
import useStore from "../Store/store";
import { CheckoutItem } from "./CheckoutItem";
// import getProp from "../Store/getProp";
export const Checkout = () => {
  const cartItems = useStore((state) => state.cart);
  const total = useStore((state) => state.total);
  const tax = useStore((state) => state.tax);

  return (
    <Container
      maxW={"6xl"}
      height="100vh"
      px={[6, 12, 12, 24]}
      py={[12, 12, 12, 12]}
    >
      <SimpleGrid
        justifyContent={"space-between"}
        gap="32px"
        columns={[2, 2, 2]}
      >
        <Box>
          <Heading>Your Items</Heading>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <CheckoutItem item={item} index={index} />
            ))
          ) : (
            <Heading
              my="32px"
              // boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
              // py="30px"
              // textAlign={"center"}
            >
              Nothing in cart
            </Heading>
          )}
        </Box>
        <Box w={"300px"} justifySelf="end" height={"min-content"}>
          <Heading>Transaction</Heading>
          <Box
            my="32px"
            p="20px"
            lineHeight={2}
            boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
          >
            <Text textAlign={"right"} fontSize={"20px"}>
              Gross: ${total}
            </Text>
            <Text textAlign={"right"} fontSize={"20px"}>
              Tax: ${tax}
            </Text>
            <Divider size={"8px"} />
            <Text textAlign={"right"} fontWeight={"bold"} fontSize={"20px"}>
              Total: ${total + tax}
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
