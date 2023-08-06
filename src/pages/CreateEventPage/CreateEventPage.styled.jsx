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

// export const CategoryInput = styled(select)`
//   display: flex;
//   width: 240px;
//   padding: 16px 12px;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 8px;
//   border: 1px solid ${baseTheme.colors.border};

//   color: ${baseTheme.colors.inputText};
//   font-size: 16px;
//   font-weight: 400;
//   line-height: 1.5;
//   position: relative;
// `;

// export const InputText = styled(Field)`
//   display: flex;
//   width: 240px;
//   padding: 16px 12px;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 8px;
//   border: 1px solid
//     ${(props) =>
//       props.haserror ? baseTheme.colors.hight : baseTheme.colors.border};
//   &:focus {
//     border: 1px solid ${baseTheme.colors.lavander};
//   }
// `;

// export const ErrMes = styled(ErrorMessage)`
//   color: ${baseTheme.colors.hight};
//   text-align: right;
//   font-size: 12px;
//   font-weight: 400;
//   line-height: 1.33;
// `;

// export const DescriptionInput = styled(Field)`
//   width: 240px;
//   height: 156px;
//   padding: 16px 12px;
//   justify-content: space-between;
//   resize: none;
//   border-radius: 8px;
//   border: 1px solid ${baseTheme.colors.border};
// `;

// export const DeleteBtn = styled.button`
//   width: 24px;
//   height: 24px;
//   padding: 0;
//   background-color: transparent;
//   border: none;

//   position: absolute;
//   top: 27px;
//   right: -16px;

//   fill: ${(props) => (props.haserror ? baseTheme.colors.hight : "#7b61ff")};
// `;

// export const DeleteBtnDesciprion = styled.button`
//   width: 24px;
//   height: 24px;
//   padding: 0;
//   background-color: transparent;
//   border: none;

//   position: absolute;
//   top: 35px;
//   right: -16px;
// `;

// export const DateInput = styled(DatePicker)`
//   display: flex;
//   width: 240px;
//   padding: 16px 12px;
//   justify-content: space-between;
//   align-items: center;

//   border-radius: 8px;
//   border: 1px solid ${baseTheme.colors.border};

//   color: ${baseTheme.colors.lavander};
//   font-size: 16px;
//   font-weight: 400;
//   line-height: normal;
//   text-transform: capitalize;
// `;

// export const LocationInput = styled(Field)`
//   display: flex;
//   width: 240px;
//   padding: 16px 12px;
//   justify-content: space-between;
//   align-items: center;
//   border-radius: 8px;
//   border: 1px solid ${baseTheme.colors.border};
// `;

export const ToggleWrapper = styled.div`
  position: absolute;
  top: 27px;
  left: 232px;
`;

// export const CanselCalendarBtn = styled.button`
//   display: flex;
//   padding: 8px 16px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;
//   cursor: pointer;

//   border-radius: 4px;
//   border: 1px solid ${baseTheme.colors.lavander};

//   color: ${baseTheme.colors.lavander};
//   text-align: center;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 1.33;
//   background-color: ${baseTheme.colors.white};
// `;

// export const ChooseCalendarBtn = styled.button`
//   margin-left: 43px;
//   display: flex;
//   padding: 8px 16px;
//   justify-content: center;
//   align-items: center;
//   gap: 10px;

//   border-radius: 4px;
//   background: ${baseTheme.colors.lavander};

//   color: ${baseTheme.colors.white};
//   text-align: center;
//   font-size: 12px;
//   font-weight: 500;
//   line-height: 1.33;
// `;

export const CalendarBtnWrapper = styled.div`
  display: inline-flex;
`;
