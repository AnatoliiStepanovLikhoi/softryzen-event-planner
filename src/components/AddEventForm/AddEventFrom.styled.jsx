import styled from "styled-components";
import { device } from "../../constants/deviceType/deviceType";

export const EventForm = styled.form`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  padding: 40px 16px;
  margin-top: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.backgroundWhite};
  box-shadow: ${(props) => props.theme.colors.card.cardShadow};

  button {
    padding: 16px 12px;
    margin-top: 20px;

    @media ${device.tablet} {
      position: absolute;
      right: 24px;
      bottom: 40px;
      margin-top: 0;
      width: 193px;
    }

    @media ${device.desktop} {
      right: 40px;
      bottom: 54px;
      margin-top: 0;
    }
  }

  @media ${device.tablet} {
    padding: 40px 24px;
    height: 656px;
    grid-template-columns: repeat(2, 308px);
    grid-auto-flow: column;
    grid-template-rows: repeat(5, 80px);
    align-items: flex-start;
  }

  @media ${device.desktop} {
    height: 490px;
    padding: 40px;
    grid-template-columns: repeat(3, 372px);
    grid-template-rows: repeat(3, 80px);
    column-gap: 42px;
  }
`;

export const EventLabel = styled.label`
  color: ${(props) => props.theme.colors.accent};

  font-size: 16px;
  font-weight: 400;
`;

export const EventInput = styled.input`
  width: 100%;
  padding: 16px 12px;
  color: ${(props) => props.theme.colors.categoryTitle};

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.select.divider};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  appearance: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    outline: 1px solid ${(props) => props.theme.colors.accent};
  }
`;

export const EventTextareaInput = styled.textarea`
  width: 100%;
  height: 153px;
  padding: 16px 40px 16px 12px;
  resize: none;

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.select.divider};
  color: ${(props) => props.theme.colors.categoryTitle};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${(props) => props.theme.colors.accent};
    outline: 1px solid ${(props) => props.theme.colors.accent};
  }
`;

export const EventSelect = styled.select`
  width: 100%;

  padding: 16px 35px 16px 12px;
  color: ${(props) => props.theme.colors.categoryTitle};

  font-size: 16px;
  font-weight: 400;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.select.divider};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s,
    outline 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  appearance: none;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accent};
    outline: 1px solid ${(props) => props.theme.colors.accent};
  }
`;

export const EventSelectOption = styled.option`
  border-bottom: 1px solid ${(props) => props.theme.colors.select.divider};
`;

export const EventError = styled.div`
  margin-top: 4px;
  padding: 0 15px;
  color: ${(props) => props.theme.colors.card.textPriorityHigh};
  text-align: right;
  font-size: 12px;
  line-height: 1.3;
`;

export const EventSelectBox = styled.div`
  position: relative;
  margin-top: 8px;

  svg {
    position: absolute;
    right: 15px;
    top: 15px;

    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  }
`;

export const EventFormButton = styled.button`
  width: 100%;
  padding: 16px 12px;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.backgroundWhite};
  background-color: ${(props) => props.theme.colors.button.default};
  border-radius: 8px;
  border: none;
  box-shadow: ${(props) => props.theme.colors.button.buttonShadow};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:focus,
  &:hover {
    background-color: ${(props) => props.theme.colors.button.hover};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.select.divider};
    cursor: not-allowed;
  }

  @media ${device.tablet} {
    width: 193px;
    margin-left: auto;
  }
`;
