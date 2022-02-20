import { ITask } from "../../../models/task";

export enum ActionTypes {
  addTask = 'ADD_TASK',
  updateTask = 'UPDATE_TASK',
  deleteTask = 'DELETE_TASK',
}

export interface IState {
  tasks: ITask[];
}