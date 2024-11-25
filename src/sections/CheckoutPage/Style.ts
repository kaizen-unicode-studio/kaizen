import styled from "@emotion/styled";

export const Container = styled.section`
  max-width: 1340px;
  padding-inline: 80px;
  margin-inline: auto;
  margin-block: 64px 110px;
  position: relative;

  > img {
    position: absolute;
    top: 114px;
    left: 523px;
    z-index: 0;

    @media (max-width: 920px) {
      display: none;
    }
  }
`;

export const Header = styled.h3`
  font-size: 28px;
  font-weight: 700;
  line-height: 40px;
`;

export const SubHeader = styled.h5`
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

  > form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const OrderWrapper = styled.div`
  background: var(--secondary-color);
  padding: 16px;
`;
