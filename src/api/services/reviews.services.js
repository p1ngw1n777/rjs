import { instance } from "../api.instance"

export const userService = {
  async getReviews() {
    try {
        const res = await instance.get('/');
        return res.data;
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        throw error;
      }
  }
}