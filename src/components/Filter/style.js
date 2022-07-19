import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1440px;
  /* border: var(--inputBorder); */
  height: 44px;
  margin: 10px 0;
  border-radius: 2px;
  gap: 10px;
`;

Container.Modal = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  flex-direction: column;
`;

Container.ModalTitle = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  /* Color / 2 */
  margin-bottom: 10px;
  color: #0d263b;
`;

Container.ModalFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;
  gap: 20px;
`;

export { Container };
