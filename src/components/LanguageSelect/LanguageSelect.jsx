// import { useState } from "react";
import { StyledSelect } from "./LanguageSelect.styled";

const options = [
  { value: "EN", label: "EN" },
  { value: "UA", label: "UA" },
];
// const error = null;

const LanguageSelect = () => {
  //   const [toggled, setToggled] = useState("closed");

  return (
    <StyledSelect
      classNamePrefix="Select"
      defaultValue={options[0]}
      options={options}
    />
  );
};

export default LanguageSelect;
