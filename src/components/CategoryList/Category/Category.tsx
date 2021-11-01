import "./Category.css";
import React, { useContext } from "react";
import AppContext from "../../../AppContext/AppContext";

interface IProps {
  category: string;
}

const Category: React.FC<IProps> = ({ category }) => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  const click = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className="Category"
      style={
        selectedCategory === category
          ? { backgroundColor: "gray", color: "white" }
          : {}
      }
      onClick={click}
    >
      <span>{category ? category : "none"}</span>
    </div>
  );
};

export default Category;
