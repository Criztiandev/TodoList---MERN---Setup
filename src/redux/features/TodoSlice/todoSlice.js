import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : []
}

const todoSlice = createSlice({
    name : "todosSlice",
    initialState,
    reducers:{
        addTodo: (state,action) =>{
            const newTodo = {
                id : Date.now(),
                title: action.payload.title,
                isCompleted : false
            }
            state.value.push(newTodo) // this will inser the data inside the initialState
        },

        updateTodo: (state,action) =>{
            const index = state.value.findIndex(e => e.id === action.payload.id)
            state.value[index].title = action.payload.title
        },

        deleteTodo: (state,action) =>{
            state.value = state.value.filter(e => e.id !== action.payload.id)
        },

        completeTodo: (state,action) =>{
            const index = state.value.findIndex(e => e.id === action.payload.id)
            state.value[index].isCompleted = action.payload.isCompleted
        }
    }
})


export const {addTodo,updateTodo,deleteTodo,completeTodo} = todoSlice.actions
export default todoSlice.reducer