import { api, apiWithoutTenant } from '../api'

import responseHandler from '../../utils/responseHandler'
import servidorErrorMessage from '../../utils/servidorErrorMessage'
export default class sliderService {
  static async create(data) {
    // console.log()
    const response = await api
      .post('slider', {
        data,
      })

      console.log(response)

      .catch(() => {
        servidorErrorMessage()
      })

    const mensagemOk = 'Slider criado com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data
    return responseData
  }

  //= =========================================================================================================
  static async update(id, data) {
    const response = await api
      .put(`slider/${id}`, {
        data,
      })
      .catch(() => {
        servidorErrorMessage()
      })
    const mensagemOk = 'Slider alterado com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data

    return responseData
  }

  //= =========================================================================================================
  static async delete(id) {
    const response = await api
      .delete(`slider/${id}`)
      .then((res) => {
        const status = res.status
        const mensagemOk = 'Modulo apagado com sucesso!'
        const mensagemNaoOK = 'Algo deu errado :('

        responseHandler(status, mensagemOk, mensagemNaoOK)
      })

      .catch(() => {
        servidorErrorMessage()
      })

    return response
  }

  //= =========================================================================================================
  static async list() {
    const response = await apiWithoutTenant.get('slider').catch(() => {
      servidorErrorMessage()
    })
    console.log("response")
    console.log(response)

    const responseData = response.data.rows

    return responseData
  }

  static async listWithFilter(filter, value) {
    const response = await api
      .get(`slider?filter%5B${filter}%5D=${value}`)
      .catch(() => {
        servidorErrorMessage()
      })

    const responseData = response.data.rows

    return responseData
  }

  //= =========================================================================================================
  static async listWithManyFilters(filters) {
    const response = await api.get(`slider?${filters}`).catch(() => {
      servidorErrorMessage()
    })

    const responseData = response.data.rows

    return responseData
  }

  //= =========================================================================================================
  static async find(id) {
    const response = await api
      .get(`slider/${id}`)

      .catch(() => {
        servidorErrorMessage()
      })

    return response.data
  }
}
