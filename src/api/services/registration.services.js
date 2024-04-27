import { instance } from "../api.instance"

export const userService = {
  async registration(data) {
    const res = await instance.post('/registration', {
      data
    })
    console.log(res);  
  
    return res
  }
}