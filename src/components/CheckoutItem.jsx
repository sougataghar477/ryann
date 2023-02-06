import React from "react";
import { Box, Flex, Text, Image, IconButton, useToast } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import useStore from "../Store/store";
export const CheckoutItem = ({ item }) => {
  const removeFromCart = useStore((state) => state.removeFromCart);
  const toast = useToast();
  return (
    <Flex
      borderRadius={"2xl"}
      my="32px"
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      pos="relative"
    >
      <Image height={"150px"} src={item.url} />
      <Box p="16px" lineHeight={2} fontSize="20px" letterSpacing={"0.5px"}>
        <Text>
          Name: <b>Ryann Murphy</b>
        </Text>
        <Text>
          Price: <b>${item.price}</b>
        </Text>
        <Text>
          Quantity:<b>{item.quantity}</b>
        </Text>
      </Box>

      <IconButton
        pos={"absolute"}
        top="20px"
        right={"30px"}
        icon={<DeleteIcon />}
        onClick={() => {
          removeFromCart(item);
          toast({
            title: "Removed from cart.",
            status: "success",
            duration: 2000,
            isClosable: true,
          });
        }}
      />
    </Flex>
  );
};
