import React, { useEffect } from "react";
import { dataService } from "../../api/services/data.services";
import '../css/MenuCatalog.css'
import MenuCatalogRight from "./MenuCatalogRight";
import MenuCatalogLeft from "./MenuCatalogLeft";

const MenuCatalog = () => {
  let res2 = null;

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res2 = await dataService.getCatalog();
        console.log('Получен запрос от сервера на GET /catalog/:', res2.categoryFromDB)
        //res2 = response1.categoryFromDB;
      } 
      catch (error) {
        console.error('Ошибка при выполнении запроса:');
      }
    }; fetchData(); 
  }, []); 

  //console.log('Получен запрос от сервера на GET /catalog/:', res2)

  return (
    <div>
      <div className="pagetitle">
          <h3>Ресницы для наращивания</h3>
      </div>
      <div className="catalogmain">
        <MenuCatalogLeft titleCategories={res2}/>
        <MenuCatalogRight categoriers={res2}/>
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
