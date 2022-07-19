import styled from "styled-components";

const getType = (type) => {
  switch (type) {
    case "secondary":
      return {
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#FFFFFF",
      };
    default:
      return {
        border: "1px solid #e6e9ec",
        color: "#FFFFFF",
      };
  }
};

const Container = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-family: "Montserrat";
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  ${({ type }) => getType(type)}
  height: ${({ height }) => height || "44px"};
  width: ${({ width }) => (width ? width : "100%")};
  min-width: ${({ width }) => (width ? width : "100%")};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-right: ${({ mar }) => `${mar}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  cursor: pointer;

  :active {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(0.9, 0.9);
  }

  @media screen and (max-width: 870px) {
    display: none;
  }
`;

export { Container };
