import {
  api,
  apiWithoutTenant,
  apiWithoutTenantAndWithToken,
  apiWithTenantAndWithToken,
  ip,
  porta,
} from '../api'

import responseHandler from '../../utils/responseHandler'
import servidorErrorMessage from '../../utils/servidorErrorMessage'
import handleLocalStorageEmailAndPassword from 'utils/handleLocalStorageEmailAndPassword'
import HandleLocalStorageData from 'utils/handleLocalStorage'
import axios from 'axios'
import { toast } from 'react-toastify'
export default class categorias {
  static async create(data) {
    const response = await api
      .post('categoria', {
        data,
      })

      .catch(() => {
        servidorErrorMessage()
      })

    const mensagemOk = 'Cargo criado com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data
    return responseData
  }
  //= =========================================================================================================

  static async update(id, data) {
    const response = await api
      .put(`categoria/${id}`, {
        data,
      })
      .catch(() => {
        servidorErrorMessage()
      })
    const mensagemOk = 'categoria alterado com sucesso!'
    const mensagemNaoOK = 'Revise seus dados :('
    responseHandler(response.status, mensagemOk, mensagemNaoOK)

    const responseData = response.data

    return responseData
  }
  //= =========================================================================================================

  static async delete(id) {
    const response = await api
      .delete(`categoria/${id}`)
      .then((res) => {
        const status = res.status
        const mensagemOk = 'Cargo apagado com sucesso!'
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
    const response = await api.get('categoria').catch(() => {
      servidorErrorMessage()
    })

    const responseData = response.data.rows

    return responseData
  }
  //= =========================================================================================================

  static async listWithFilter(filter, value) {
    const response = await api
      .get(`categoria?filter%5B${filter}%5D=${value}`)
      .catch(() => {
        servidorErrorMessage()
      })

    const responseData = response.data.rows

    return responseData
  }
  //= =========================================================================================================

  static async listWithManyFilters(filters) {
    const response = await api.get(`categoria?${filters}`).catch(() => {
      servidorErrorMessage()
    })

    const responseData = response.data.rows

    return responseData
  }
  //= =========================================================================================================

  static async find(id) {
    const response = await api
      .get(`categoria/${id}`)

      .catch(() => {
        servidorErrorMessage()
      })

    return response.data
  }
  //= ========================================================================================================
}
