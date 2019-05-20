import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import  mainReducer  from './reducers/reducers';


const rootReducer = combineReducers({
    main: mainReducer,
    form: formReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
