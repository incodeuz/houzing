import React from "react";
import { useRef } from "react";
import { Container, Img, Left, Right } from "./style";
import HomeImg from "../../../assets/images/uy1.jpg";
import HomeImg2 from "../../../assets/images/uy2.jpg";
import HomeImg3 from "../../../assets/images/uy3.jpg";
import { Content } from "antd/lib/layout/layout";

const Carousel = () => {
  const sliderRef = useRef();
  return (
    <Container>
      <Left onClick={() => sliderRef.current?.next()} />
      <Right onClick={() => sliderRef.current?.prev()} />
      <Container.Carousel ref={sliderRef} dots autoplay>
        <Img src={HomeImg} alt={"image"} />
        <Img src={HomeImg2} alt={"image"} />
        <Img src={HomeImg3} alt={"image"} />
      </Container.Carousel>
    </Container>
  );
};

export default Carousel;
