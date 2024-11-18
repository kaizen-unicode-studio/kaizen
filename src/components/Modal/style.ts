import styled from "@emotion/styled";

export const Dialog = styled.div`
  position: absolute;
  top: 95px;
  background: var(--violet-dark);
  border: none;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 110px);
  padding: 40px 0 16px;
`;
