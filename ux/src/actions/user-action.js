import axios from 'axios'
import {
  CREATE_USER,
  FETCH_USER,
  FETCH_USERS
} from './types'

const dj_urls = window.dj_urls
const DEFAULT_PARAMS = {
  format: 'json'
}
const DEFAULT_LIST_PARAMS = {
  page: 1,
  search: '',
  format: 'json'
}


export const fetchUser = (id, params={}) => {
  const data = {
    params: { ...DEFAULT_PARAMS, ...params }
  }

  return dispatch => axios
    .get(dj_urls[''](id), data)
    .then(response => {
      // handle success
      dispatch({
        type: FETCH_USER,
        payload: response.data
      })
    })
    .catch(error => {
      // handle error
      console.log(`error: ${error}`)
      throw error
    })
}

export const fetchUsers = (params={}) => {
  const data = {
    params: { ...DEFAULT_LIST_PARAMS, ...params }
  }

  return dispatch => axios
    .get(dj_urls[''](), data)
    .then(response => {
      // handle success
      dispatch({
        type: FETCH_USERS,
        payload: response.data
      })
    })
    .catch(error => {
      // handle error
      console.log(`error: ${error}`)
      throw error
    })
}

export const createUser = (data) => {
  return dispatch => axios
    .post(dj_urls[''](), data)
    .then(response => {
      // handle success
      dispatch({
        type: CREATE_USER,
        payload: response.data
      })
      callback()
    })
    .catch(error => {
      // handle error
      console.log(`error: ${error}`)
      throw error
    })
}