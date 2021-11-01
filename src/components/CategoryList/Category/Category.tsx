import "./Category.css";
import React, { useContext } from "react";
import AppContext, { IAppContext } from "../../../AppContext/AppContext";

interface IProps {
  category: string;
}

const Category: React.FC<IProps> = ({ category }) => {
  const { selectedCategory, setSelectedCategory } =
    useContext<IAppContext>(AppContext);

  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="Category"
      data-testid="Category"
      style={
        selectedCategory === category
          ? { backgroundColor: "gray", color: "white" }
          : {}
      }
      onClick={click}
    >
      <span data-testid="CategorySpan">{category ? category : "none"}</span>
    </div>
  );
};

export default Category;
