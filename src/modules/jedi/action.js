/**
 * Created by thomashourlier on 2/26/17.
 */

import axios from 'axios';

export const JEDI_LIST_LOADING = 'jedi-list-loading'
export const JEDI_FORM_LOADING = 'jedi-form-loading'
export const FETCH_FINISH = 'fetch-finish'
export const POST_JEDI = 'post-jedi'
export const POST_FINSH = 'post-finish'


export function loading(state = true) {
  return {
    type: JEDI_LIST_LOADING,
    state
  }
}

export function fetchFinish(data) {
  return {
    type: FETCH_FINISH,
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
    type: POST_FINSH,
    payload: data,
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
      .then((res) => {
        dispatch(postFinish(data));
        dispatch(formLoading(false))        
      })
  }
}