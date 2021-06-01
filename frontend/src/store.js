import {createStore, combineReducers, compose,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {taskListReducer} from './reducers/taskReducer'
const initialState={};
const reducer=combineReducers({
  taskList:taskListReducer,
})
const composeEnhancer=compose;
const store=createStore(reducer, initialState, composeEnhancer(applyMiddleware (thunk)));

export default store;
