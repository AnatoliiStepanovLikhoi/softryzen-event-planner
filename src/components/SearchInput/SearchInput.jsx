import { useState } from "react";
import { StyledInput, ClearIcon } from "./SearchInput.styled";
import useEventStore from "../../services/eventStore";
import debounce from "lodash.debounce";

// eslint-disable-next-line react/prop-types
const SearchInput = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");
  const setFilterValue = useEventStore((state) => state.setFilterValue);

  const handleClearClick = () => {
    setInputValue("");
    setFilterValue("");
  };

  const debouncedSearch = debounce(setFilterValue, 500);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(event) => handleInputChange(event)}
      />
      {inputValue && <ClearIcon onClick={handleClearClick} />}
    </>
  );
};

export default SearchInput;
