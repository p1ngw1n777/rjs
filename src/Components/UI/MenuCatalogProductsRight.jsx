import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsService } from '../../api/services/products.services';
import { useLocation } from 'react-router-dom';


const MenuCatalogProductsRight = ({product}) => {
    const dispatch = useDispatch();

    const location = useLocation();
    const { currentElement } = location.state || {};
      
    useEffect( () => {
        const fetchData = async () => {
          try {
            console.log('susa;', currentElement)
            //const response = await productsService.getProduct('lashes');
            const response1 = await productsService.postProduct(currentElement, 'glue');
            //console.log(response1.productsList)

            //dispatch(productsToState(response1.glue))
          } 
          catch (error) {
            console.error('Ошибка при выполнении запроса:');
          }
        }; fetchData(); 
      }, []); 
    
      //const ProductsFromRedux = useSelector(state => state.StatesProducts.products);
      

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

    
    //const ProductsFromReduxFiltered = ProductsFromRedux.filter(ProductsFromRedux => ProductsFromRedux.categoryId === 7)
    

    return (
        <div className='products-right'>
            {/* {ProductsFromRedux.map((el, index) => {
                return(
                    
                        <ProductCard
                            index={index}
                            imageUrl={el.product_url_photo}
                            productName={el.product_name}
                            price={el.price}
                            />
                    
                );
            })} */}
        </div>
    );
};

export default MenuCatalogProductsRight;