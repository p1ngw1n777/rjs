import React from 'react';
import "../../css/CategoryCard.css"

const CategoryCard = ({imageUrl, category}) => {
    return (
        <div>
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