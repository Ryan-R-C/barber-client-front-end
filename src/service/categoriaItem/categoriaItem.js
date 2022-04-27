
import {api, apiWithoutTenant, apiWithoutTenantAndWithToken, apiWithTenantAndWithToken, ip, porta} from '../api'

import responseHandler from '../../utils/responseHandler'
import servidorErrorMessage from '../../utils/servidorErrorMessage'



export default class categoriaItemService{
  static async create(data){
    let response = await api.post(`categoriaItem`, {
      data
      })

      .catch(() => {
        servidorErrorMessage()
      })

      let mensagemOk = 'categoriaItem criado com sucesso!'
      let mensagemNaoOK = 'Revise seus dados :('
      responseHandler(response.status, mensagemOk, mensagemNaoOK)

      let responseData = response.data
      return responseData
  }
//==========================================================================================================
  static async update(id, data){

    let response = await api.put(`categoriaItem/${id}`, {
      data
      })
      .catch(() => {
        servidorErrorMessage()
      })


      let mensagemOk = 'categoriaItem alterado com sucesso!'
      let mensagemNaoOK = 'Revise seus dados :('
      responseHandler(response.status, mensagemOk, mensagemNaoOK)

      let responseData = response.data

      return responseData    

  }
//==========================================================================================================
  static async delete(id){

    let response = await api.delete(`categoriaItem/${id}`)
    .then(
      (res) => {
          
          let status = res.status 
          let mensagemOk    = 'Modulo apagado com sucesso!'
          let mensagemNaoOK = 'Algo deu errado :('

          responseHandler(status, mensagemOk, mensagemNaoOK)
      })

      .catch(() => {
        servidorErrorMessage()
      })

      return response
  }
//==========================================================================================================
  static async list(){

    let response = await api.get(`categoriaItem`)
      .catch(() => {
        servidorErrorMessage()
      })

      let responseData = response.data.rows

      return responseData
    
  }

  static async listWithFilter(filter ,value){

    let response = await api.get(`categoriaItem?filter%5B${filter}%5D=${value}`)
      .catch(() => {
        servidorErrorMessage()
      })

      let responseData = response.data.rows

      return responseData
    
  }
//==========================================================================================================
  static async listWithManyFilters(filters){
    let response = await api.get(`categoriaItem?${filters}`)
      .catch(() => {
        servidorErrorMessage()
      })

      let responseData = response.data.rows

      return responseData
    
  }
//==========================================================================================================
  static async find(id){

    let response = await api.get(`categoriaItem/${id}`)

      .catch(() => {
        servidorErrorMessage()
      })

      return response.data
    
  }

}