import "./CategoryList.css";
import React from "react";
import Category from "./Category/Category";

interface IProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
const CategoryList: React.FC<IProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  console.log("Category List rendered");
  const renderCategories = (): JSX.Element[] => {
    return categories.map((c, i) => (
      <Category
        key={i}
        category={c}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    ));
  };

  return <div className="CategoryList">{renderCategories()}</div>;
};

export default React.memo(CategoryList);
