import { instance } from "../api.instance"

export const dataService = {
  async getReviews() {
    try {
        const res = await instance.get('/');
        console.log(res.data)
        return res.data;
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
      }
  },

  async getCategories() {
    try {
      const res = await instance.get('/');
      return res.data;
    } catch (error) {
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  },
  
  async getCatalog() {
    try {
      const res = await instance.get('/catalog');
      return res.data;
    } 
    catch (error) { 
      console.error('Ошибка при выполнении запроса:', error);
      throw error;
    }
  },
}