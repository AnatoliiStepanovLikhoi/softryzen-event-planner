import { device } from "../../constants/deviceType/deviceType";
import { MainTitle } from "../MainPage/MainPage.styled";
import styled from "styled-components";

export const CreateEventTitle = styled(MainTitle)`
  color: ${(props) => props.theme.colors.textTitle};
  margin-bottom: 24px;
  margin-top: 24px;
  display: block;

  @media ${device.tablet} {
    display: block;
    margin-top: 24px;
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

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 272px;
  gap: 16px;

  border-radius: 8px;
  background: ${(props) => props.theme.colors.backgroundWhite};
  box-shadow: ${(props) => props.theme.colors.card.cardShadow};
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 240px;
  height: 100px;
  margin: 40px 16px 20px 16px;
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 240px;
  height: 180px;
  margin: 0 16px 20px 16px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 240px;
  margin: 0 16px 20px 16px;
  position: relative;
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100px;
  margin: 0 16px 20px 16px;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.accent};
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
`;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 27px;
  left: 232px;
`;

export const CalendarBtnWrapper = styled.div`
  display: inline-flex;
`;
