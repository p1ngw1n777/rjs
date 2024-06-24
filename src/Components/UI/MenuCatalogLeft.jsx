import React from 'react';
import ItemCatolog from "./ItemCatolog";
import { useDispatch, useSelector } from 'react-redux';
import { categoryToItemsState } from '../../Store/reducer/StatesCatalog';
import '../css/MenuCatalog.css';
import { useEffect } from 'react';
import { dataService } from '../../api/services/data.services';

const MenuCatalogLeft = (titleCategories) => {
	console.log(titleCategories.categoryFromDB)
	const CategoryMenu = titleCategories;

    return (
        <div className="menu-left">
            {/* {CategoryMenu.map((el, index) => {
                return (
                    <ItemCatolog
                        key={index}
                        title={el.category_name}/>
                )
            })} */}
        </div>
    );
};

export default MenuCatalogLeft;