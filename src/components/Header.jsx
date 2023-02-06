import React from "react";
import { useState } from "react";
import {
  Flex,
  Container,
  Stack,
  Text,
  IconButton,
  Box,
} from "@chakra-ui/react";
import useStore from "../Store/store";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaTwitter as Twitter } from "react-icons/fa";
import { FaInstagram as Instagram } from "react-icons/fa";
import { FaShoppingCart as Cart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as ExternalLink } from "@chakra-ui/react";
import { CartItemNumber } from "./CartItemNumber";
import { useColorMode } from "@chakra-ui/react";
export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const cartItems = useStore((state) => state.cartItems);

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/exclusive",
      name: "Exclusive Content",
    },
    // ,
    {
      path: "/buy",
      name: "Buy",
    },
  ];

  return (
    // <Container maxW={'100%'} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'>

    <Flex
      alignItems={"center"}
      display={["none", "none", "flex", "flex"]}
      justifyContent="space-between"
      px={[12, 12, 12, 24]}
      py={[12, 12, 12, 8]}
      gap={"40px"}
      maxW={"6xl"}
      m="auto"
    >
      <Flex gap={"40px"}>
        {links.map((link, ind) => (
          <Link key={ind} to={link.path}>
            <Text fontWeight={"bold"} fontSize="18px">
              {link.name}
            </Text>
          </Link>
        ))}
      </Flex>
      <Flex fontWeight={"bold"} gap={"40px"} alignItems={"center"}>
        <Box pos={"relative"}>
          <CartItemNumber n={cartItems} />
          <Link to={"/cart"}>
            <Cart />
          </Link>
        </Box>
        <ExternalLink href="https://chakra-ui.com" isExternal={true}>
          <Twitter />
        </ExternalLink>
        <ExternalLink href="https://chakra-ui.com" isExternal={true}>
          <Instagram />
        </ExternalLink>
        <Flex alignItems={"center"} gap="8px">
          <IconButton
            onClick={toggleColorMode}
            aria-label="Search database"
            icon={colorMode === "light" ? <SunIcon /> : <MoonIcon />}
          />
          <Text cursor="pointer" onClick={toggleColorMode}>
            {colorMode[0].toUpperCase() + colorMode.slice(1)} Mode
          </Text>
        </Flex>
      </Flex>
    </Flex>
    // </Container>
  );
};
