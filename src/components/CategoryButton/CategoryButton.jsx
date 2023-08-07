/* eslint-disable react/prop-types */
import { useState } from "react";
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

  const handleClick = () => {
    setShowCategoryList(!showCategoryList);
  };

  return (
    <CategoryWrapper>
      <CategoryBtn onClick={handleClick}>
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
