import React from "react";
import { Box, Container, SimpleGrid, Flex, Text } from "@chakra-ui/react";
import { Card } from "./Card";
import useToggle from "../Hooks/useToggle";
export const Buy = () => {
  const images = [
    { url: "./740full-ryann-murp9hy.jpg", price: 20 },
    { url: "740full-ryann-murph2y.jpg", price: 30 },
    { url: "740full-ryann-murphy.jpg", price: 10 },
  ];
  const imgs1 = [
    { url: "https://wallpapercave.com/wp/wp2553949.jpg", price: 20 },
    {
      url: "https://w0.peakpx.com/wallpaper/960/845/HD-wallpaper-nature-landscape-landscape-nature-thumbnail.jpg",
      price: 40,
    },
    {
      url: "https://i.pinimg.com/originals/37/6e/4e/376e4e0dab8e566bf85992ceedeb0ade.jpg",
      price: 10,
    },
  ];
  return (
    <Container
      maxW={"6xl"}
      height="100vh"
      px={[6, 12, 12, 24]}
      py={[12, 12, 12, 12]}
    >
      <SimpleGrid placeItems={"center"} gap="40px" columns={[1, 1, 3]}>
        {images.map((m, ind) => (
          <Card m={m} key={ind} />
        ))}
      </SimpleGrid>
    </Container>
  );
};
