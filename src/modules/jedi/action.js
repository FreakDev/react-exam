/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export const JEDI_LIST_LOADING = 'jedi-list-loading'
export const JEDI_FORM_LOADING = 'jedi-form-loading'
export const JEDI_FETCH_FINISH = 'fetch-finish'
export const JEDI_POST_JEDI = 'post-jedi'
export const JEDI_POST_FINSH = 'post-finish'
export const JEDI_POST_ERROR = 'post-error'


export function loading(state = true) {
  return {
    type: JEDI_LIST_LOADING,
    state
  }
}

export function fetchFinish(data) {
  return {
    type: JEDI_FETCH_FINISH,
    payload: data,
  }
}

export function formLoading(state = true) {
  return {
    type: JEDI_FORM_LOADING,
    state
  }
}

export function postFinish(data) {
  return {
    type: JEDI_POST_FINSH,
    payload: data,
  }  
}

export function postError(data) {
  return {
    type: JEDI_POST_ERROR,
    message: data.split('\n')[0]
  }
}


export function fetchJedi() {
  return (dispatch) => {
    dispatch(loading())      
    axios.get('http://localhost:3001/jedi')
      .then((res) => {
        dispatch(fetchFinish(res.data));
        dispatch(loading(false));
      })
  }
}

export function addJedi(data) {
  return (dispatch) => {
    dispatch(formLoading())
    axios.post('http://localhost:3001/jedi', data)
      .catch((e) => {
        if (e.response.status === 500) {
          dispatch(postError(e.response.data))
        }
      })
      .then((res) => {
        dispatch(postFinish(data));
        dispatch(formLoading(false))        
      })
  }
}