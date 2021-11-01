interface IProps {
  category: string;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category: React.FC<IProps> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
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
