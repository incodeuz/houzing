import React from "react";
import Filter from "../Filter";
import CardCarousel from "./CardCarousel";
import Carousel from "./Carousel";
import { Container } from "./style";

const Home = () => {
  return (
    <Container>
      <Filter />
      <Carousel />
      <CardCarousel />
    </Container>
  );
};

export default Home;
