import styled from "@emotion/styled";

export const Container = styled.main`
  max-width: 1340px;
  padding-inline: 80px;
  margin-inline: auto;
  /* margin-block: 64px 110px; */
  padding-block: 174px 120px;
  position: relative;
  min-height: calc(100vh - 385px);

  @media (max-width: 768px) {
    padding-inline: 16px;
  }
`;

export const Header = styled.h2`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
  position: relative;

  > img {
    position: absolute;
    top: 114px;
    left: 442px; // 523px
    z-index: 0;

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const SubHeader = styled.h3`
  font-size: 20px;
  font-weight: 600;
  line-height: 24.38px;
  margin-block: 29px 21px;
  font-variant: small-caps;
`;

export const Grid = styled.div`
  display: grid;
  grid-template: auto / 580px auto;
  gap: 120px;
  z-index: 10;
  position: relative;

  @media (max-width: 1340px) {
    grid-template: auto / 480px auto;
  }
  @media (max-width: 1280px) {
    grid-template: auto / 400px auto;
    gap: 60px;
  }
  @media (max-width: 920px) {
    grid-template: repeat(2, auto) / auto;
    gap: 16px;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const OrderWrapper = styled.div`
  margin-top: 37px;
  background: var(--secondary-color);
  padding: 16px;

  @media (max-width: 920px) {
    grid-row-start: 1;
  }
`;
export const Error = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 24.38px;
  font-variant: small-caps;
  margin-bottom: 32px;
`;
