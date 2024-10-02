import {createSlice} from "@reduxjs/toolkit";
import {tasksLoader} from "./tasksLoader";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: [],
        loading: false
    },
    reducers: {
        addTask: (state, action) => {
            const newTask = {id: Date.now(), title: action.payload, completed: false};
            state.tasks.push(newTask);
        },
        /**
         * @deprecated не используется, заменил на taskLoader
         * @param state
         * @param action
         */
        loadTask(state, action) {
            state.tasks.push(action.payload);
        },
        switchCompleted: (state, action) => {
            state.tasks.forEach((task) => {
                if (task.id === action.payload) {
                    task.completed = !task.completed;
                }
            });
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(tasksLoader.pending, (state) => {
                state.loading = true
            })
            .addCase(tasksLoader.fulfilled, (state, {payload}) => {
                state.loading = false
                state.tasks = payload
            })
            .addCase(tasksLoader.rejected, (state) => {
                state.loading = false
            })
    },
});

export const {switchCompleted, addTask, loadTask} = taskSlice.actions;
export default taskSlice.reducer;