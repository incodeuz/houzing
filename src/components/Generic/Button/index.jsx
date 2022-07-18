import React, { memo } from "react";
import { Container } from "./style";

const Button = ({ children, onClick, width, height, type, ml, mr, mb, mt }) => {
  return (
    <Container
      children={children}
      onClick={onClick}
      width={width}
      height={height}
      type={type}
      ml={ml}
      mt={mt}
      mb={mb}
      mr={mr}
    >
      {children}
    </Container>
  );
};

export default memo(Button);
