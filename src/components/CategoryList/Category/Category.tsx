import { useContext } from "react";
import AppContext from "../../../AppContext/AppContext";

interface IProps {
  category: string;
}

const Category: React.FC<IProps> = ({ category }) => {
  const { selectedCategory, setSelectedCategory } = useContext(AppContext);

  return (
    <div
      className="Category"
      style={{ backgroundColor: selectedCategory === category ? "red" : "" }}
      onClick={(e) => setSelectedCategory(category)}
    >
      <span>{category}</span>
    </div>
  );
};

export default Category;
