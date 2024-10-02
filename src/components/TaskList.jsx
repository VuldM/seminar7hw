import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {addTask, switchCompleted} from "../modules/taskSlice";
import {tasksLoader} from "../modules/tasksLoader";

const TaskList = () => {
    const [inputValue, setInputValue] = useState('');
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch({type: 'USER_DATA_LOADING'});
        dispatch(tasksLoader());
    }, []);

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}
                        style={
                        task.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}
                    }
                    onClick={() => dispatch(switchCompleted(task.id))}
                    >{task.title}</li>
                ))}
            </ul>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}/>
                <button onClick={() => dispatch(addTask(inputValue))}>addTask</button>
        </div>
);
};

export default TaskList;