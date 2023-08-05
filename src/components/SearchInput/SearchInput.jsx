import { useState } from "react";
import { StyledInput, ClearIcon } from "./SearchInput.styled";

// eslint-disable-next-line react/prop-types
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
