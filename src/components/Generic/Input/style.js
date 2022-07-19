import styled from "styled-components";

const Container = styled.input`
  display: flex;
  font-family: "Montserrat";
  font-family: "Montserrat";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;

  align-items: center;
  border-radius: 2px;
  border: var(--inputBorder);
  padding-left: ${({ pl }) => (pl ? "15px" : "45px")};
  height: ${({ height }) => height || "44px"};
  width: ${({ width }) => width || "100%"};
  /* :active {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(0.9, 0.9);
  } */
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mar }) => `${mar}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-top: ${({ mt }) => `${mt}px`};
`;

const Icon = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 25px;
  z-index: 9;
`;
export { Container, Wrapper, Icon };
