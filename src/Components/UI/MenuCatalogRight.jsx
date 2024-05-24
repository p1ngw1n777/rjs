import React from 'react';
import { useSelector } from 'react-redux';
import "../css/CategoryRow.css";
import CategoryCard from '../Layout/category/CategoryCard';

const MenuCatalogRight = () => {
    const CategoryFromRedux = useSelector(state => state.StatesCategory.category);
    const CategoryFromReduxFiltered = CategoryFromRedux.filter(CategoryFromRedux => CategoryFromRedux.category_parent === null)

    return (
        <div className="categoryRow">
                {CategoryFromReduxFiltered.map((el, index) => {
                    console.log(el.category_url_photo)
                    return (
                        <CategoryCard
                            index={index}
                            imageUrl={el.category_url_photo}
                            category={el.category_name}/>
                    );
                })}
            </div>
    );
};

export default MenuCatalogRight;