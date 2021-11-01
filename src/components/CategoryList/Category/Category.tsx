interface IProps {
    category: string,
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}

const Category: React.FC<IProps> = ({category, setSelectedCategory}) => {
    return (
        <div className="Category" onClick={e => setSelectedCategory(category)}>
            <span>{category}</span>
        </div>
    )
}

export default Category