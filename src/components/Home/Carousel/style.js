import { Carousel } from "antd";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 96px;
`;

Container.Carousel = styled(Carousel)`
  height: fit-content;
  position: relative;
`;

const Img = styled.img`
  height: 86.5vh;
  width: 100%;
  background-color: black;
`;

const Left = styled.img`
  position: absolute;
  left: 100px;
  top: 53%;
  width: 45px;
  height: 45px;
  /* background: #ffffff; */
  border-radius: 50%;
  z-index: 9;
  transform: rotate(180deg);
  opacity: 0.7;
`;
const Right = styled.img`
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  right: 100px;
  top: 53%;
  z-index: 9;
  width: 45px;
  height: 45px;
  opacity: 0.7;

  /* transform: rotate(180deg); */
`;
export { Container, Right, Left, Img };
