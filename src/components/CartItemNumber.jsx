import React from "react";
import { Text } from "@chakra-ui/react";

export const CartItemNumber = ({ n }) => {
  return (
    <Text
      pos={"absolute"}
      bg="black"
      color={"white"}
      top="-90%"
      left={"70%"}
      zIndex={10}
      fontSize="14px"
      verticalAlign={"center"}
      w="20px"
      h="20px"
      textAlign={"center"}
      borderRadius="50%"
    >
      {n}
    </Text>
  );
};
