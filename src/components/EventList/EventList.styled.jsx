import styled from "styled-components";
import { device } from "../../constants/deviceType/deviceType";

export const EventListWrapper = styled.ul`
  display: grid;
  gap: 24px;
  margin-top: 40px;

  @media ${device.tablet} {
    margin-top: 40px;
    grid-template-areas:
      "a a"
      "a a"
      "a a";
  }

  @media ${device.desktop} {
    margin-top: 40px;
    grid-template-areas:
      "a a a a"
      "a a a a";
  }
`;
