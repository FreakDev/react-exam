import { combineReducers } from 'redux'

const list = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_FINISH':
        return [
          ...action.payload,
        ];
      default:
        return state;
    }
}
  
export default combineReducers({
    list
})