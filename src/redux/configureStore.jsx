import {createStore, combineReducers} from 'redux'
import showInfoReducer from './ducks/showInfo';

export const reducers = combineReducers({
    showInfo: showInfoReducer,
})
const store = createStore(reducers);

export default store