import { useLocation, useNavigate } from "react-router-dom";
import { GoBackButton, StyledArrow } from "./BackButton.styled";

export function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(location?.state?.from ?? "/");
  };

  return (
    <GoBackButton type="button" onClick={handleClick} aria-label="Go back">
      <StyledArrow />
      Back
    </GoBackButton>
  );
}
