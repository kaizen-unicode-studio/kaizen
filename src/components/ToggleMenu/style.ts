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
