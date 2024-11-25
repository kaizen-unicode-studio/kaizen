import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  top: 20px;
  left: 20px;
  gap: 4px;
  border-radius: 50px;
  border: 2px solid #422585;
  background: transparent;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 375px) {
    width: 32px;
    height: 32px;
  }
`;
