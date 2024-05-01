import React, { useEffect } from 'react';
import CategoryCard from '../Layout/category/CategoryCard';
import "../css/CategoryRow.css";
import { useDispatch, useSelector } from 'react-redux';
import { dataService } from '../../api/services/data.services';
import { categoryToState } from '../../Store/reducer/StatesCategory';

const CategoryRow = () => {
    const CategoryFromRedux = useSelector(state => state.StatesCategory.category);
    const dispatch = useDispatch();
    const CategoryFromReduxFiltered = CategoryFromRedux.filter(CategoryFromRedux => CategoryFromRedux.category_parent === null)
    
    // if(Array.isArray(CategoryFromRedux))
    // {
    // 
    // }
    // else {
    //   console.log('CategoryFromRedux is not array')
    // }

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
    

    return (
        <>
            <div className="categoryRow">
                {CategoryFromReduxFiltered.map((el, index) => {
                    return (
                        <CategoryCard
                            index={index}
                            imageUrl={el.category_url_photo}
                            category={el.category_name}/>
                    );
                })}
            </div>
        </>
    );
};

export default CategoryRow;