import React, { memo } from "react";
import { Container } from "./style";

const Button = ({
  children,
  onClick,
  width,
  height,
  type,
  ml,
  mar,
  mb,
  mt,
  icon,
}) => {
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
      mar={mar}
      icon={icon}
    >
      {children}
    </Container>
  );
};

export default memo(Button);
