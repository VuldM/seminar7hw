import {configureStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import taskReducer from "./taskSlice";
import taskThunkMiddleware from "./taskThunkMiddleware";

const store = configureStore({
    reducer: taskReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(taskThunkMiddleware, thunk)
});

export default store;