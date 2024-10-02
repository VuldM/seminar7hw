import {tasks} from "../data/tasks";
import {loadTask} from "./taskSlice";

/**
 * Мидлвара для загрузки заданий из файла
 * @param store
 * @returns {function(*): function(*): *}
 * @depricated не используется, заменил на taskLoader
 */
const taskThunkMiddleware = store => next => action => {
    if (action.type === 'USER_DATA_LOADING') {
        setTimeout(() => {
            tasks.forEach(task => {
                action.payload = task;
                store.dispatch(loadTask(action.payload));
            });
        }, 1000);
    }

    return next(action);
};

export default taskThunkMiddleware;