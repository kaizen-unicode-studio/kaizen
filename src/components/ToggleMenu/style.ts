import styled from "@emotion/styled";

export const LinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  > a {
    color: var(--main-color);
    text-decoration: none;

    font-size: 24px;
    font-weight: 600;
    line-height: 29.26px;
  }
`;

export const Instagram = styled.div`
  display: flex;
  gap: 8px;
  > img {
    width: 24px;
    height: 24px;
  }
  > p {
    font-family: "Cantarell";
    font-size: 16px;
    font-weight: 400;
    line-height: 22.66px;
  }
`;

export const Info = styled.div`
  gap: 4px;
  display: flex;
  flex-direction: column;
  > p {
    font-family: Cantarell;
    font-size: 12px;
    font-weight: 400;
    line-height: 16.99px;
  }
`;

export const ModalContent = styled.div`
  position: fixed;
  top: 95px;
  background: var(--violet-dark);
  border: none;
  color: var(--main-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 95px);
  padding: 40px 0 16px;
  z-index: 40;
`;
