import { combineReducers } from 'redux';
import TasksReducer from './Reducer';

export default combineReducers({Tasks: TasksReducer})