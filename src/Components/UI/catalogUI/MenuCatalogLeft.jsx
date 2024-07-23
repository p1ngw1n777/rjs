import React from 'react';
import ItemCatolog from "./ItemCatolog";
import { useSelector } from 'react-redux';
import './MenuCatalog.css';

const MenuCatalogLeft = () => {
	const CategoryFromRedux = useSelector(state => state.StatesCategory.category);
	return (
        <div className="menu-left">
            {
				CategoryFromRedux.map((el, index) => {
					return (
						<ItemCatolog
							key={index}
							title={el.category_name}/>
					)
				})
			}
        </div>
    );
};

export default MenuCatalogLeft;