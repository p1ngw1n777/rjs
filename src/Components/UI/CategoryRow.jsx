import React, { useEffect } from 'react';
import CategoryCard from '../Layout/category/CategoryCard';
import "../css/CategoryRow.css";
import { useDispatch, useSelector } from 'react-redux';
import { dataService } from '../../api/services/data.services';
import { categoryToState } from '../../Store/reducer/StatesCategory';
import { useNavigate } from 'react-router-dom';

const CategoryRow = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await dataService.getCategories();
            dispatch(categoryToState(await response.obj2));
          } 
          catch (error) {
            console.error('Ошибка при выполнении запроса:', error);
          }
        };
        fetchData(); 
    }, []); 
        
    const lashesArray = { 
        idFirst: 7,
        idSecond: 8,
        idThird: 9,
    }

    const goToNextPage = (currentElement) => {
        switch(currentElement){
            case 0:
                Navigate('/catalog/lashes', { 
                    state: {
                        currentElement1: lashesArray, 
                        nameCategory: 'lashes',
                    }
                });
                break;
            case 1:
                Navigate('/catalog/glue', { 
                    state: {
                        currentElement1: currentElement+1, 
                        nameCategory: 'glue',
                    }
                });
                break;
            case 2:
                Navigate('/catalog/preparations', { 
                    state: {
                        currentElement1: currentElement+1, 
                        nameCategory: 'preparations',
                    }
                });
                break;
            case 3:
                Navigate('/catalog/twizers', { 
                    state: {
                        currentElement1: currentElement+1, 
                        nameCategory: 'twizers',
                    }
                });
                break;
            case 4:
                Navigate('/catalog/consumables', { 
                    state: {
                        currentElement1: currentElement+1, 
                        nameCategory: 'consumables',
                    }
                });
                break;
            case 5:
                Navigate('catalog/dop-oborudovanie', { 
                    state: {
                        currentElement1: currentElement+1, 
                        nameCategory: 'dop-oborudovanie',
                    }
                });
                break;
            default:
                console.log('Error: default')
                break;
        }
    }
    
    const CategoryFromRedux = useSelector(state => state.StatesCategory.category);

    return (
        <>
            <div className="categoryRow">
                {CategoryFromRedux.map((el, index) => {
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