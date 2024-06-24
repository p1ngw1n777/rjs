import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import "../css/CategoryRow.css";
import CategoryCard from '../Layout/category/CategoryCard';
import { useNavigate } from 'react-router-dom';
import { productsToState } from '../../Store/reducer/StatesProducts';
import { dataService } from '../../api/services/data.services';


const MenuCatalogRight = () => {
    const CategoryFromRedux = useSelector(state => state.StatesCategory.category);
    const CategoryFromReduxFiltered = CategoryFromRedux.filter(CategoryFromRedux => CategoryFromRedux.categoryId === null)
    
    const Navigate = useNavigate();

    const goToNextPage = (currentElement) => {
        switch(currentElement){
            case 0:
                Navigate('/catalog/lashes', { state: { currentElement: currentElement } });
                break;
            case 1:
                Navigate('/catalog/glue', { state: { currentElement: currentElement } });
                break;
            case 2:
                Navigate('/catalog/preparations', { state: { currentElement: currentElement } });
                break;
            case 3:
                Navigate('/catalog/twizers', { state: { currentElement: currentElement } });
                break;
            case 4:
                Navigate('/catalog/consumables', { state: { currentElement: currentElement } });
                break;
            case 5:
                Navigate('catalog/dop-oborudovanie', { state: { currentElement: currentElement } });
                break;
            default:
                console.log('Error: default')
                break;
        }
    }

    return (
        <div className="menu-right">
            {CategoryFromReduxFiltered.map((el, index) => {
                return (
                    <div key={index} onClick={() => goToNextPage(index)}>
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