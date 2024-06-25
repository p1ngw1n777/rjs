import React, { useEffect, useLayoutEffect } from "react";
import { dataService } from "../../api/services/data.services";
import '../css/MenuCatalog.css'
import MenuCatalogRight from "./MenuCatalogRight";
import MenuCatalogLeft from "./MenuCatalogLeft";
import { useDispatch, useSelector } from "react-redux";
import { categoryToState } from '../../Store/reducer/StatesCategory';

const MenuCatalog = () => {
  let res2 = null;  
  const dispatch = useDispatch();

  useEffect( () => {
    const fetchData = async () => {
      try {
        res2 = await dataService.getCatalog();
        dispatch(categoryToState(res2.categoryFromDB));
        console.log('Получен запрос от сервера на GET /catalog/:', res2)
      } 
      catch (error) {
        console.error('Ошибка при выполнении запроса:');
      }
    }; fetchData(); 
  }, []); 

  const CategoryFromRedux = useSelector(state => state.StatesCategory.category);

  return (
    <div>
      <div className="pagetitle">
          <h3>Ресницы для наращивания</h3>
      </div>
      <div className="catalogmain">
        <MenuCatalogLeft />
        <MenuCatalogRight />
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
