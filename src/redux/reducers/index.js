import { combineReducers } from 'redux';
import contactreducer from './contactreducer'

const createRootReducer = () =>
  combineReducers({
    contactreducer,
  })

export default createRootReducer;
