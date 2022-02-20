import { ITask } from "../../../models/task";
import { ActionTypes } from "./types";

export function addTask(task: ITask) {
    return {
        type: ActionTypes.addTask,
        payload: {
          task,
        }
    }
}

export function updateTask(task: ITask) {
  return {
      type: ActionTypes.updateTask,
      payload: {
        task,
      }
  }
}

export function deleteTask(taskId: number) {
  return {
      type: ActionTypes.deleteTask,
      payload: {
        taskId,
      }
  }
}