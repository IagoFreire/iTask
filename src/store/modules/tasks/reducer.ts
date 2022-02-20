import { Reducer } from "redux";
import produce from "immer";

import { ActionTypes } from "./types";
import { ITask } from "../../../models/task";

const INITIAL_STATE: ITask[] = [];

const tasks: Reducer<ITask[]> = (state = INITIAL_STATE, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addTask: {
        const { task } = action.payload;

        draft.push(task);
        break;
      }

      case ActionTypes.updateTask: {
        const { task } = action.payload;

        const taskIndex = draft.findIndex(
          (taskDraft) => task.id === taskDraft.id
        );
        draft[taskIndex] = task;

        break;
      }

      case ActionTypes.deleteTask: {
        const { taskId } = action.payload;

        const taskIndex = draft.findIndex(
          (taskDraft) => taskId === taskDraft.id
        );
        draft.splice(taskIndex, 1);

        break;
      }

      default: {
        return draft;
      }
    }
  });
};

export default tasks;
