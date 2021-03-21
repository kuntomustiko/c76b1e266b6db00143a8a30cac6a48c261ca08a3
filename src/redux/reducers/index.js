import { combineReducers } from 'redux';

import modalLocationOpenReducer from './modalLocationOpenReducer';
import modalAddOpenReducer from './modalAddOpenReducer';

export default combineReducers({
  modalLocationOpenReducer,
  modalAddOpenReducer,
});
