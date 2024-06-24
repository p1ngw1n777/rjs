import React, { useEffect } from 'react';
import CategoryCard from '../Layout/category/CategoryCard';
import "../css/CategoryRow.css";
import { useDispatch, useSelector } from 'react-redux';
import { dataService } from '../../api/services/data.services';
import { categoryToState } from '../../Store/reducer/StatesCategory';
import { useNavigate } from 'react-router-dom';

const CategoryRow = () => {
    const CategoryFromRedux = useSelector(state => state.StatesCategory.category);
    const dispatch = useDispatch();
    const CategoryFromReduxFiltered = CategoryFromRedux.filter(CategoryFromRedux => CategoryFromRedux.categoryId === null)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await dataService.getCategories();
            dispatch(categoryToState(response.obj2))
          } 
          catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
          }
        };
        fetchData(); 
      }, []); 
    
      const Navigate = useNavigate();
      const goToNextPage = (currentElement) => {
        switch(currentElement){
            case 0:
                Navigate('/lashes');
                break;
            case 1:
                Navigate('/glue');
                break;
            case 2:
                Navigate('/preparations');
                break;
            case 3:
                Navigate('/twizers');
                break;
            case 4:
                Navigate('/consumables');
                break;
            case 5:
                Navigate('/dop-oborudovanie');
                break;
            default:
                console.log('Error: default')
                break;
        }
      }
    
    return (
        <>
            <div className="categoryRow">
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
        </>
    );
};

export default CategoryRow;