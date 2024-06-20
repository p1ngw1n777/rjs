import React from 'react';
import ItemCatolog from "./ItemCatolog";
import { useDispatch, useSelector } from 'react-redux';
import { categoryToItemsState } from '../../Store/reducer/StatesCatalog';
import '../css/MenuCatalog.css';
import { useEffect } from 'react';
import { dataService } from '../../api/services/data.services';

const MenuCatalogLeft = () => {
    const CategotyMenu = useSelector(
        (state) => state.StatesCatalog.itemsOfCategory
      );
      const dispatch = useDispatch();
      const CategoryMenuFiltered = CategotyMenu.filter(CategotyMenu => CategotyMenu.category_parent === null)
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await dataService.getCatalog();
            dispatch(categoryToItemsState(response.categoryFromDB));
          } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
          }
        };
        fetchData();
      }, []);
    
      console.log('',CategoryMenuFiltered)
    return (
        <div className="menu-left">
            {CategoryMenuFiltered.map((el, index) => {
                return (
                    <ItemCatolog
                        key={index}
                        title={el.category_name}/>
                )
            })}
        </div>
    );
};

export default MenuCatalogLeft;