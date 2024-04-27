import { instance } from "../api.instance"

export const userService = {
  async getUser(data) {
    const res = await instance.post('/loginForm', {
      data
    })
    console.log(res);  
  
    return res
  }
}