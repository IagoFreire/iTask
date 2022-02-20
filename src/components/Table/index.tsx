import React, { useState } from "react";
import { useSelector } from "react-redux";

import { ITask, taskStatus } from "../../models/task";
import { IState } from "../../store/modules/tasks/types";
import EditTaskModal from "../EditTaskModal";

import { Container } from "./styles";

const Table: React.FC = () => {
  const [currentTask, setCurrentTask] = useState<ITask>();

  const tasks = useSelector<IState, ITask[]>((state) => state.tasks);

  const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false);
  const [currentFilter, setCurrentFilter] = useState<string>("");

  const handleOpenEditTaskModal = (task: ITask) => {
    setCurrentTask(task);
    setIsEditTaskModalOpen(true);
  };

  const handleCloseEditTaskModal = () => {
    setCurrentTask(undefined);
    setIsEditTaskModalOpen(false);
  };

  return (
    <>
      <Container>
        <div className="search">
          <input
            className="input-search"
            placeholder="Buscar (Nome, Descrição, Status)"
            value={currentFilter}
            onChange={(event) => setCurrentFilter(event.target.value)}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {tasks
              .filter(
                (task) =>
                  currentFilter === "" ||
                  String(task.name)
                    .toLocaleLowerCase()
                    .search(currentFilter.toLocaleLowerCase()) !== -1 ||
                  String(task.description)
                    .toLocaleLowerCase()
                    .search(currentFilter.toLocaleLowerCase()) !== -1 ||
                    String(taskStatus[task.status].label)
                    .toLocaleLowerCase()
                    .search(currentFilter.toLocaleLowerCase()) !== -1
              )
              .map((task) => (
                <tr onClick={() => handleOpenEditTaskModal(task)} key={task.id}>
                  <td>{task.name}</td>
                  <td>{task.description}</td>
                  <td>{taskStatus[task.status].label}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
      {isEditTaskModalOpen && (
        <EditTaskModal
          isOpen={isEditTaskModalOpen}
          onRequestClose={handleCloseEditTaskModal}
          task={currentTask}
        />
      )}
    </>
  );
};

export default Table;
