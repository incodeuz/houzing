import { Carousel } from "antd";
import styled from "styled-components";
import { ReactComponent as LeftLogo } from "../../../assets/icons/left.svg";
import { ReactComponent as RightLogo } from "../../../assets/icons/right.svg";

const Container = styled.div`
  width: 100%;
`;

Container.Carousel = styled(Carousel)`
  height: fit-content;
  position: relative;
`;

const Img = styled.img`
  height: 86vh;
  width: 100%;
  background-color: black;
`;

const Left = styled(LeftLogo)`
  position: absolute;
  left: 100px;
  top: 53%;
  width: 45px;
  height: 45px;
  background: #ffffff;
  border-radius: 50%;
  z-index: 9;
`;
const Right = styled(RightLogo)`
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  right: 100px;
  top: 53%;
  z-index: 9;
  width: 45px;
  height: 45px;
`;
export { Container, Right, Left, Img };
