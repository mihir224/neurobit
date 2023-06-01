import {configureStore,combineReducers} from '@reduxjs/toolkit';
import mappingReducer from './mappingSlice';
import pageReducer from './pageSlice';

const rootReducer=combineReducers({
    mapping:mappingReducer,
    page:pageReducer
})

export const store= configureStore({
    reducer:rootReducer
})
