import './CategoryList.css';
import React from 'react';

interface IProps {
    categories: string[],
    setSelectedCategory: React.Dispatch<React.SetStateAction<string>>
}
const CategoryList: React.FC<IProps> = ({categories, setSelectedCategory}) => {
    const renderCategories = (): JSX.Element[] => {
        return categories.map((c, i) => 
            <div key={i} className="Category" onClick={e => setSelectedCategory(c)}>
                <span>{c}</span>
            </div>
        )
    }

    return (
        <div className="CategoryList">
            {renderCategories()}
        </div>
    )
}

export default React.memo(CategoryList);
