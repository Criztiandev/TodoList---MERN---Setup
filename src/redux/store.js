import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/TodoSlice/todoSlice";

export default configureStore({
    reducer:{
        todos: todoReducer
    }
})