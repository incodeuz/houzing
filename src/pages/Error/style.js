import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

Container.Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 131px;
  height: 44px;
  border: 1px solid black;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: black;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
  :active {
    transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transform: scale(0.9, 0.9);
  }
`;

export { Container };
