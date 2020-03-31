import { ADD_TASK, DEL_TASK, TASK_DONE } from "../Actions/Types";
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line
let initialState = [
    {
        id: uuidv4(),
        text: '',
    }
]

const TasksReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return state.concat(action.payload)
        case DEL_TASK:
            return state.filter(task => task.id !== action.payload)
        case TASK_DONE:
            return state.map(task => task.id === action.payload ? {...task, taskDone: !task.taskDone} : task)
        default:
            return state
    }

}

export default TasksReducer