import { ADD_TASK, TASK_DONE, TASK_UNDONE, EDIT_TASK } from './Types';
import { DEL_TASK } from './Types'

export const addTask = newTask => {
    return {
        type: ADD_TASK,
        payload: newTask
    }
}

export const deleteTask = id => {
    return {
        type: DEL_TASK,
        payload: id
    }
}

export const taskDone = id => {
    return {
        type: TASK_DONE,
        payload: id
    }
}

export const taskUndone = id => {
    return {
        type: TASK_UNDONE,
        payload: id
    }
}

export const editTask = existingTask => {
    return {
        type: EDIT_TASK,
        payload: existingTask
    }
}



