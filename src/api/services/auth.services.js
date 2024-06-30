import { instance } from "../api.instance"

export const userService = {
  //метод на проверку пользователя в базе
  async postLoginUser(data){
    try {
      //console.log("Получили на API: ", { data })
      const res = await instance.post('user/login', { data })
      //console.log("От севера на API: ", res.data)

      if(!res) {
        console.log('Error 228')
      }
      return res.data;
    } 

    catch(error) {
      console.log("API сдох", error)
    }
  },
  
  async postRegistrationUser(data){
    try {
      //console.log("Получили на API: ", { data })
      const res = await instance.post('user/registration', { data } )
      //console.log("От севера на API: ", res.data)

      if(!res) {
        console.log('Error 228')
      }
      return res.data;
    } 
    catch(error) {
      console.log("API сдох", error)
    }
  },

  async registration(data) {
    const res = await instance.post('/registration', {
      data
    })
    console.log(res);  
  
    return res
  }
}