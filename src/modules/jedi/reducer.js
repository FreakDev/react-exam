import { combineReducers } from 'redux'

import * as actions from './action'

const list = (state = [], action) => {
    switch (action.type) {
      case actions.JEDI_FETCH_FINISH:
        return [
          ...action.payload,
        ];
      case actions.JEDI_POST_FINSH: 
        return [
          ...action.payload,
          ...state
        ]
      default:
        return state;
    }
}
  
const formLoad = (state = false, action) => {
  switch (action.type) {
    case actions.JEDI_FORM_LOADING:
      return action.state
    default:
      return state
  }
}

const formError = (state = '', action) => {
  switch (action.type) {
    case actions.JEDI_POST_ERROR: 
      return action.message
    default:
      return state
  }
}

export default combineReducers({
    list,
    formLoad,
    formError
})