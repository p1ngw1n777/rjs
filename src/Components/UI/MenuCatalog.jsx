import React, { useEffect } from "react";
import ItemCatolog from "./ItemCatolog";
import { useDispatch, useSelector } from "react-redux";
import { dataService } from "../../api/services/data.services";
import { categoryToItemsState } from "../../Store/reducer/StatesCatalog";

const MenuCatalog = () => {
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
    <div>
      <div className="pagetitle">
        <h3>Ресницы для наращивания</h3>
      </div>
      <div className="menu-left">
        {CategoryMenuFiltered.map((el, index) => {
            return (
                <ItemCatolog 
                    key={index} 
                    title={el.category_name} />
            )
        })}
      </div>
    </div>
  );
};

export default MenuCatalog;
