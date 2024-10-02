import {createAsyncThunk} from "@reduxjs/toolkit";
import {tasks} from "../data/tasks";

/**
 * Танк для загрузки заданий из файла
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const tasksLoader = createAsyncThunk(
    'task/tasksLoader', async () => {
        return await new Promise(
            resolve => setTimeout(() => resolve(tasks), 1000)
        ).then(tasks => tasks);
    }
);