import React, { useState } from "react";
import { v4 } from "uuid";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  SimpleGrid,
  Flex,
  Text,
  Button,
  Stack,
  IconButton,
  Image,
  useToast,
} from "@chakra-ui/react";
import useStore from "../Store/store";
export const Card = ({ m }) => {
  const [quantity, setQuantity] = useState(1);
  const addToCart = useStore((store) => store.addToCart);

  const toast = useToast();
  return (
    <Box
      boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}
      borderRadius="20px"
      overflow={"hidden"}
    >
      <Image
        // _hover={{ transform: "scale(1.1)" }}
        src={m.url}
        height="400px !important"
        maxW={"310px"}
      />
      <Box p="24px">
        <Stack direction={"row"} spacing="12px" alignItems={"center"}>
          <IconButton
            icon={<MinusIcon />}
            onClick={() => (quantity <= 1 ? null : setQuantity((n) => n - 1))}
          />
          <Text fontWeight={"bold"}>{quantity}</Text>
          <IconButton
            icon={<AddIcon />}
            onClick={() => setQuantity((n) => n + 1)}
          />
        </Stack>
        <Flex mt="24px" justify={"space-between"} alignItems="center">
          <Button
            onClick={() => {
              addToCart({
                ...m,
                quantity,
                total: m.price * quantity,
                id: v4().split("-")[0],
              });
              toast({
                title: "Added to cart.",
                status: "success",
                duration: 2000,
                isClosable: true,
              });
            }}
          >
            Add to Cart
          </Button>
          <Text fontWeight={"bold"}>${m.price}</Text>
        </Flex>
      </Box>
    </Box>
  );
};
