import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsService } from '../../api/services/products.services';
import { useLocation } from 'react-router-dom';
import { productsToState } from '../../Store/reducer/StatesProducts';
import ProductCard from './ProductCard';

const MenuCatalogProductsRight = ({product}) => {
    const dispatch = useDispatch();

    const location = useLocation();
    //const { currentElement, nameUrl } = location.state || {};
    const currentElement = location.state.currentElement || {};
    const nameUrl = location.state.nameCategory || {};
      
    useEffect( () => {
        const fetchData = async () => {
            try {
                console.log('susa;', currentElement)
                console.log('gsdf:', nameUrl)
                const response1 = await productsService.postProduct(currentElement, nameUrl);
                console.log('front:', response1)
                try {
                    dispatch(productsToState(response1))
                    console.log('успешно')
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
      
    return (
        <div className='products-right'>
             {ProductsFromRedux.map((el, index) => {
                return(
                        <ProductCard
                            index={index}
                            imageUrl={el.product_url_photo}
                            productName={el.product_name}
                            price={el.price}
                            />
                    
                );
            })} 
        </div>
    );
};

export default MenuCatalogProductsRight;