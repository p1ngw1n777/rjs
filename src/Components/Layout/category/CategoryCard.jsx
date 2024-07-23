import React from 'react';
import "../../UI/catalogUI/CategoryCard.css"

const CategoryCard = ({index1, imageUrl, category}) => {
    return (
        <div index={index1}>
            <div className="category-card">
                <div className="category-image-container">
                    <img src={imageUrl} alt="Category" className="category-image" />
                </div>
                <div className="category-caption">
                    {category}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;