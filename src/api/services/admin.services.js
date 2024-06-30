import { instance } from "../api.instance"

export const adminService = {

  async getData(tableName) {
    try{
        const nama = tableName
        const res = await instance.get('/adminka/' + nama);
        console.log(res.data)
        return res.data;
    }
    catch(error) {
        console.log('Ошибка при получении данных с сервера: ', tableName, 'Ошибка: ', error)
    }
},
  
  async postNewData(data){
    try {
      //console.log("Получили на API: ", { data })
      const res = await instance.post('/adminka/postData', { data } )
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

  async postDeleteData(data){
    try {
		const g = data.id;
		console.log("Получили на API: ", { g })
		const data = data.select;
		const res = await instance.post('/adminka/deteleData', { data } )
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