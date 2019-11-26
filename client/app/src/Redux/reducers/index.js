import { combineReducers } from 'redux';
import windowSize from './windowSizeReducer'


export default combineReducers({
  windowSize: windowSize,
});