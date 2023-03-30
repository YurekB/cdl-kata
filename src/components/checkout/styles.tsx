import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 230px;

  div {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ScanButton = styled.button`
  width: 50px;
  height: 50px;
`;

export const TotalAmount = styled.p`
  margin: 0;
`;
