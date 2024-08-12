import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsService } from '../../../../api/services/products.services';
import { useLocation } from 'react-router-dom';
import { productsToState } from '../../../../Store/reducer/StatesProducts';
import ProductCard from '../products/ProductCard';

const MenuCatalogProductsRight = ({product}) => {
    const dispatch = useDispatch();

    const location = useLocation();

    const currentElement = location.state.currentElement1 || {};
    const nameUrl = location.state.nameCategory || {};
      
    useEffect( () => {
        const fetchData = async () => {
            try {
                const response1 = await productsService.postProduct(currentElement, nameUrl);
                try {
                    dispatch(productsToState(response1))
                }
                catch(error){
                    console.log(error)
                }
            } 
            catch (error) {
                console.error('Ошибка при выполнении запроса:');
            }
            }; fetchData(); 
        }, []); 
    
      const ProductsFromRedux = useSelector(state => state.StatesProducts.products);
      console.log('from Redux', ProductsFromRedux)
      
    return (
        <div className='menu-right'>
             {ProductsFromRedux.map((el, index) => {
                return(
                        <ProductCard
                            index={index}
                            image_Url={el.product_url_photo}
                            productName={el.product_name}
                            price={el.price}
                            />
                    
                );
            })}  
        </div>
    );
};

export default MenuCatalogProductsRight;