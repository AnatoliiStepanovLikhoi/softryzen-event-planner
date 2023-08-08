/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import {
  CategoryWrapper,
  CategoryBtn,
  CategoryButtonTitle,
  CategoryButtonIcon,
  CategoryDropdown,
  CategoryDropdownWrapper,
  CategoryDropdownList,
  CategoryDropdownItem,
} from "./CategoryButton.styled";

const eventCategory = [
  "art",
  "music",
  "business",
  "conference",
  "workshop",
  "party",
  "sport",
];

const CategoryButton = ({ handleFilterCategory }) => {
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
  const categoryButtonRef = useRef(null);

  const handleClick = () => {
    setShowCategoryList(!showCategoryList);
  };

  const closeCategoryList = () => {
    setShowCategoryList(false);
  };

  useOutsideClick(categoryButtonRef, closeCategoryList);

  return (
    <CategoryWrapper>
      <CategoryBtn
        ref={categoryButtonRef}
        onClick={handleClick}
        aria-label="fliter category"
      >
        <CategoryButtonTitle>
          {activeCategory || "Category"}
        </CategoryButtonTitle>
        <CategoryButtonIcon />
      </CategoryBtn>
      {showCategoryList && (
        <CategoryDropdown>
          <CategoryDropdownWrapper>
            <CategoryButtonTitle>Category</CategoryButtonTitle>
            <CategoryButtonIcon />
          </CategoryDropdownWrapper>
          <CategoryDropdownList>
            {eventCategory.map((category) => (
              <CategoryDropdownItem
                key={category}
                onClick={() => {
                  setShowCategoryList(false);
                  handleFilterCategory(category);
                  setActiveCategory(category);
                }}
              >
                {category}
              </CategoryDropdownItem>
            ))}
          </CategoryDropdownList>
        </CategoryDropdown>
      )}
    </CategoryWrapper>
  );
};

export default CategoryButton;
