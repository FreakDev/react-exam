/**
 * Created by thomashourlier on 2/26/17.
 */
import { combineReducers } from 'redux';

import jedi from './modules/jedi/reducer'
import form from './modules/form/reducer'

export default combineReducers({
  jedi,
  form
});
