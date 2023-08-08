import { device } from "../../constants/deviceType/deviceType";
import { MainTitle } from "../MainPage/MainPage.styled";
import styled from "styled-components";

export const EventDetailTitle = styled(MainTitle)`
  color: ${(props) => props.theme.colors.textTitle};
  margin-bottom: 24px;
  margin-top: 0px;
  display: block;

  @media ${device.tablet} {
    display: block;
    font-size: 32px;
    font-weight: 600;
    line-height: 1.5;
  }

  @media ${device.desktop} {
    top: 0px;
    margin-bottom: 25px;
    margin-top: 17px;
  }
`;

export const EventDetailWrapper = styled.div`
  margin: 24px auto;

  @media ${device.desktop} {
    width: 628px;
  }
`;
