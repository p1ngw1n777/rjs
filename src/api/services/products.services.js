import axios from "axios";
import { instance } from "../api.instance";

export const productsService = {
    
    
    async getProduct(productsName) {
        try{
            const product = productsName
            const res = await instance.get('/catalog/' + product);
            return res.data;
        }
        catch(error) {
            console.log('Ошибка при получении товаров c сервера: ', productsName, 'Ошибка: ', error)
        }
    },

    async postProduct(data, nameUrl) {
        console.log(data)
        console.log('/catalog/' + nameUrl)

      const res = await instance.post('/catalog/lashes', {data, nameUrl});
      console.log('TUTA: ', res);
      
      if(!res){
        console.log('Error 228')

      return res;
      }
    }
    // async getLashes() {
    //     try {
    //         const res = await instance.get('/catalog/lashes');
    //         console.log(res.data)
    //         return res.data;
    //     }
    //     catch(error){
    //         console.error('Ошибка при выполнении запроса:', error);
    //         throw error;
    //     }
    // },
    // async getGlue() {
    //     try {
    //         const res = await instance.get('/catalog/glue');
    //         return res.data;
    //     }
    //     catch(error){
    //         console.error('Ошибка при выполнении запроса:', error);
    //         throw error;
    //     }
    // },

    // async getPreparations() {
    //     try {
    //         const res = await instance.get('/catalog/preparations');
    //         return res.data;
    //     }
    //     catch(error){
    //         console.error('Ошибка при выполнении запроса:', error);
    //         throw error;
    //     }
    // },

    // async getTwizers() {
    //     try {
    //         const res = await instance.get('/catalog/twizers');
    //         return res.data;
    //     }
    //     catch(error){
    //         console.error('Ошибка при выполнении запроса:', error);
    //         throw error;
    //     }
    // },

    // async getConsumbles() {
    //     try {
    //         const res = await instance.get('/catalog/consumables');
    //         return res.data;
    //     }
    //     catch(error){
    //         console.error('Ошибка при выполнении запроса:', error);
    //         throw error;
    //     }
    // },
    // async getDopOborudovanie() {
    //     try {
    //         const res = await instance.get('/catalog/dop-oborudovanie');
    //         return res.data;
    //     }
    //     catch(error){
    //         console.error('Ошибка при выполнении запроса:', error);
    //         throw error;
    //     }
    // },

}