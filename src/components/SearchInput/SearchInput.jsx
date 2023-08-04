import { useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { device } from "../../constants/deviceType/deviceType";

const StyledInput = styled.input`
  /* Ваші стилі */

  display: flex;
  justify-content: space-between;
  align-items: center;
  outline: none;

  padding: 12px 12px 12px 48px;
  width: 272px;
  height: 48px;
  margin: 0;

  border-radius: ${(props) => props.theme.radii.inputNormal};
  background: ${(props) => props.theme.colors.input.bg};
  box-shadow: ${(props) => props.theme.colors.input.inputShadow};

  color: ${(props) => props.theme.colors.input.placeholderColor};
  font-size: 14px;
  font-weight: 300;
  line-height: 1;

  border: none;
  z-index: 0;

  @media ${device.tablet} {
    width: 368px;
    justify-content: center;
    align-items: center;
  }

  @media ${device.desktop} {
    width: 410px;
    justify-content: center;
    align-items: center;
  }

  &:focus {
    color: #7b61ff;
  }
`;

const ClearIcon = styled(FaTimes)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
`;

const SearchInput = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClearClick = () => {
    setInputValue("");
  };

  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && <ClearIcon onClick={handleClearClick} />}
    </>
  );
};

export default SearchInput;
