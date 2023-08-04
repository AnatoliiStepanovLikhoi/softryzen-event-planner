import { StyledSelect } from "./LanguageSelect.styled";

const options = [
  { value: "EN", label: "EN" },
  { value: "UA", label: "UA" },
];

const LanguageSelect = () => {
  return (
    <StyledSelect
      classNamePrefix="Select"
      defaultValue={options[0]}
      options={options}
    />
  );
};

export default LanguageSelect;
