import React, { memo } from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  children,
  onClick,
  width,
  height,
  ml,
  mar,
  mb,
  mt,
  onChange,
  defaultValue,
  value,
  placeholder,
  pl,
  name,
}) => {
  return (
    <Wrapper ml={ml} mt={mt} mb={mb} mar={mar} pl={pl}>
      <Icon>{children}</Icon>
      <Container
        // children={children}
        onClick={onClick}
        width={width}
        height={height}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        pl={pl}
        name={name}
      ></Container>
    </Wrapper>
  );
};

export default memo(Input);
