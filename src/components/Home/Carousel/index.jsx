import React from "react";
import { useRef } from "react";
import { Container, Img, Left, Right } from "./style";
import HomeImg from "../../../assets/images/uy1.jpg";
import HomeImg2 from "../../../assets/images/uy2.jpg";
import HomeImg3 from "../../../assets/images/uy3.jpg";
import LeftLogo from "../../../assets/icons/next.png";

const Carousel = () => {
  const sliderRef = useRef();
  return (
    <Container>
      <Left src={LeftLogo} onClick={() => sliderRef.current?.prev()} />
      <Right src={LeftLogo} onClick={() => sliderRef.current?.next()} />
      <Container.Carousel ref={sliderRef} dots autoplay>
        <Img src={HomeImg} alt={"image"} />
        <Img src={HomeImg2} alt={"image"} />
        <Img src={HomeImg3} alt={"image"} />
      </Container.Carousel>
    </Container>
  );
};

export default Carousel;
