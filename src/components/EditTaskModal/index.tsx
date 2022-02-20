import React, { FormEvent, useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import Select, { StylesConfig } from 'react-select'

import closeImg from "../../assets/close.svg";
import { ITask, taskStatus } from "../../models/task";
import {
  deleteTask,
  updateTask,
} from "../../store/modules/tasks/action";

import { Container } from "./styles";

interface EditTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  task?: ITask;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  onRequestClose,
  task,
}) => {
  const dispatch = useDispatch();

  const [taskId, setTaskId] = useState<number>(0);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(() => {
    if (task) {
      setTaskId(task.id);
      setName(task.name);
      setDescription(task.description);
      setStatus(task.status);
    }
  }, [task]);

  const handleClearAndCloseModal = useCallback(() => {
    setName("");
    setDescription("");
    setStatus(0);
    onRequestClose();
  }, [onRequestClose]);

  const handleEditTask = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      const task: ITask = {
        id: taskId,
        name,
        description,
        status,
      }

      dispatch(updateTask(task));
      handleClearAndCloseModal();
    },
    [description, dispatch, handleClearAndCloseModal, name, status, taskId]
  );

  const handleDeleteTask = useCallback(
    (taskId: number) => {
      dispatch(deleteTask(taskId));
      handleClearAndCloseModal();
    },
    [dispatch, handleClearAndCloseModal]
  );

  const colourStyles: StylesConfig<any> = {
    control: (styles) => ({ ...styles, backgroundColor: '#e7e9ee', minHeight: '3.2rem',
    height: '3.2rem' }),
    input: (styles) => ({ ...styles }),
  };
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={handleClearAndCloseModal}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      ariaHideApp={false}
    >
      <button
        type="button"
        onClick={handleClearAndCloseModal}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleEditTask}>
        <h2>Editar Tarefa</h2>

        <input
          className="input-name"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <textarea name="description" rows={5} placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} />

        <Select placeholder="Status" styles={colourStyles} value={taskStatus[status]} options={taskStatus} onChange={(event) => setStatus(event?.value as number)} />

        <div className="alignActionsButtons">
          <button
            className="delete"
            type="button"
            onClick={() => {
              if (task && task.id) {
                handleDeleteTask(task.id);
              }
            }}
          >
            Excluir
          </button>
          <button className="save" type="submit">
            Salvar
          </button>
        </div>
      </Container>
    </Modal>
  );
};

export default EditTaskModal;
