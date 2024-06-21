import React, { useEffect } from "react";

import ItemCatolog from "./ItemCatolog";
import { useDispatch, useSelector } from "react-redux";
import { dataService } from "../../api/services/data.services";
import { categoryToItemsState } from "../../Store/reducer/StatesCatalog";
import '../css/MenuCatalog.css'
import MenuCatalogRight from "./MenuCatalogRight";
import MenuCatalogLeft from "./MenuCatalogLeft";

const MenuCatalog = () => {
  /*const CategotyMenu = useSelector(
    (state) => state.StatesCatalog.itemsOfCategory
  );
  const dispatch = useDispatch();
  // const CategoryMenuFiltered = CategotyMenu.filter(CategotyMenu => CategotyMenu.category_parent === null)
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
  }, []);*/
  return (
    <div>
      <div className="pagetitle">
          <h3>Ресницы для наращивания</h3>
      </div>
      <div className="catalogmain">
        <MenuCatalogLeft/>
        <MenuCatalogRight/>
      </div>
      <div className="caption">
        Купить материалы для наращивания ресниц 
        <br/><br/>
        Получить отличный результат можно только при использовании материалов высокого качества. 
        Не нужно покупать продукцию для наращивания ресниц на сайтах с сомнительной репутацией.
         Слишком дешевые материалы могут иметь опасный для мастера и его клиентов состав.
          Лучше всего совершать покупки в специализированных онлайн-магазинах для лэшмейкера, которые имеют сертификат качества на реализуемую продукцию.
        <br/><br/>
        Мастерам рекомендуется покупать товары одного бренда. Такой подход избавит от несовместимости компонентов. В большинстве случаев клей максимально эффективно работает с дополнительными материалами (праймер, обезжириватель, активатор) этой же марки.
      </div>
    </div>
  );
};

export default MenuCatalog;
