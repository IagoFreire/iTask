import React from 'react';

import { Container } from './styles';

interface HeaderProps {
  onOpenNewTaskModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenNewTaskModal }) => {
  return (
    <Container>
      <div className="alignTitle">
        <span>
          iTask
        </span>
      </div>
      <button type="button" onClick={onOpenNewTaskModal}>
        Cadastrar Tarefa
      </button>
    </Container>
  );
}

export default Header;