import React from 'react';
import { useSelector } from 'react-redux';
import "../css/CategoryRow.css";
import CategoryCard from '../Layout/category/CategoryCard';
import { useNavigate } from 'react-router-dom';

const MenuCatalogRight = () => {
    const CategoryFromRedux = useSelector(state => state.StatesCategory.category);
    const CategoryFromReduxFiltered = CategoryFromRedux.filter(CategoryFromRedux => CategoryFromRedux.category_parent === null)
    
    const Navigate = useNavigate();

    const goToNextPage = (event) => {
            Navigate('/resnitsy')
    }

    return (
        <div className="menu-right">
                {CategoryFromReduxFiltered.map((el, index) => {
                    return (
                        <div onClick={goToNextPage}>
                            <CategoryCard
                                index={index}
                                imageUrl={el.category_url_photo}
                                category={el.category_name}/>
                        </div>
                    );
                })}
            </div>
    );
};

export default MenuCatalogRight;