import React, { FormEvent, useCallback, useState } from 'react';
import Modal from "react-modal";
import { useDispatch } from 'react-redux';
import Select, { StylesConfig } from 'react-select'

import closeImg from "../../assets/close.svg";
import { ITask, taskStatus } from '../../models/task';
import { addTask } from '../../store/modules/tasks/action';
import { Container } from './styles';

interface AddTaskModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

const AddTaskModal: React.FC<AddTaskModalProps> = ({ isOpen, onRequestClose }) => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0);

  const handleClearAndCloseModal = () => {
    setName("");
    setDescription("");
    setStatus(0);
    onRequestClose();
  }

  const handleAddTask = useCallback((event: FormEvent) => {
    event.preventDefault();

    const task: ITask = {
      id: new Date().getTime(),
      name,
      description,
      status,
    }

    dispatch(addTask(task));
    
    setName("");
    setDescription("");
    setStatus(0);
    onRequestClose();

  }, [name, description, status, dispatch, onRequestClose]);

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

      <Container onSubmit={handleAddTask}>
        <h2>Cadastrar Tarefa</h2>

        <input
          className="input-name"
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <textarea name="description" rows={5} placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} />
        
        <Select placeholder="Status" styles={colourStyles} className="select" options={taskStatus} onChange={(event) => setStatus(event?.value as number)} />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

export default AddTaskModal;