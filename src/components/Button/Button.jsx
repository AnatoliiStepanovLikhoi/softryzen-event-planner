/* eslint-disable react/prop-types */
import { StyledButton } from "./Button.styled";

export const Button = ({ text, onClick, label }) => {
  return (
    <StyledButton onClick={onClick} type="button" aria-label={label}>
      {text}
    </StyledButton>
  );
};
