import { SortBtn, SortBtnTitle, SortBtnIcon } from "./SortButton.styled";

const SortButton = () => {
  return (
    <>
      <SortBtn type="buttton" aria-label="Sort events">
        <SortBtnTitle>Sort by</SortBtnTitle>
        <SortBtnIcon />
      </SortBtn>
    </>
  );
};

export default SortButton;
