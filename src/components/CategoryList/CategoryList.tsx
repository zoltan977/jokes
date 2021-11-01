import "./CategoryList.css";
import React from "react";
import Category from "./Category/Category";

interface IProps {
  categories: string[];
}
const CategoryList: React.FC<IProps> = ({ categories }) => {
  const renderCategories = (): JSX.Element[] => {
    return categories.map((c, i) => <Category key={i} category={c} />);
  };

  return (
    <div className="CategoryList">
      <h2>categories</h2>

      <Category category="" />
      <div className="content">{renderCategories()}</div>
    </div>
  );
};

export default React.memo(CategoryList);
