import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { productsService } from '../../api/services/products.services';
import { productsToState } from '../../Store/reducer/StatesProducts';
import { useLocation } from 'react-router-dom';
import { authService } from '../../api/services/auth.services'

const MenuCatalogProductsRight = ({product}) => {
    const Navigate = useNavigate();
   
    const goToNextPage = (currentElement) => { }

    const location = useLocation();
    const { currentElement } = location.state || {};
      
    const dispatch = useDispatch();


    useEffect( () => {
        const fetchData = async () => {
          try {
            const response = await productsService.getProduct('lashes');
            const response1 = await productsService.postProduct({currentElement}, 'lashes');
            //console.log(response1.productsList)
            //ProductsRender = response.lashes;
            dispatch(productsToState(response.lashes))
            console.log('text:', currentElement)
          } 
          catch (error) {
            console.error('Ошибка при выполнении запроса:');
          }
        }; fetchData(); 
      }, []); 
    
      const ProductsFromRedux = useSelector(state => state.StatesProducts.products);
      

    /*const fetchData1 = async (index) => {
        try {
            var responce = null;
            switch(index) {
                case 0:
                    responce = await productsService.getLashes();
                    dispatch(productsToState(responce))
                    break;
                case 1:
                    responce = await productsService.getGlue();
                    dispatch(productsToState(responce))
                    break;
                case 2:
                    responce = await productsService.getPreparations();
                    dispatch(productsToState(responce))
                    break;
                case 3:
                    responce = await productsService.getTwizers();
                    dispatch(productsToState(responce))
                    break;
                case 4:
                    responce = await productsService.getConsumbles();
                    dispatch(productsToState(responce))
                    break;
                case 5:
                    responce = await productsService.getDopOborudovanie();
                    dispatch(productsToState(responce))
                    break;
                default:
                    console.log("Error: default")
                    break;
            }
        } 
        catch (error) {
          console.error("Ошибка при выполнении запроса:", error);
        }
    };*/

    
    const ProductsFromReduxFiltered = ProductsFromRedux.filter(ProductsFromRedux => ProductsFromRedux.categoryId === 7)
    

    return (
        <div className="products-right">
            {ProductsFromReduxFiltered.map((el, index) => {
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