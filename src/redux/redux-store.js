import { configureStore } from "@reduxjs/toolkit";
import postReducer from './postReducer';
import dialogReducer from './dialogReducer';

const store = configureStore({
    reducer: {
        postState: postReducer,
        dialogState: dialogReducer
    }
});

window.store = store

export default store;