import React, { useState } from "react";
import Header from "../../components/Header";
import NewTaskModal from "../../components/NewTaskModal";
import Table from "../../components/Table";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

  const handleOpenNewTaskModal = () => {
    setIsNewTaskModalOpen(true);
  };

  const handleCloseNewTaskModal = () => {
    setIsNewTaskModalOpen(false);
  };

  return (
    <>
      <Container>
        <Header onOpenNewTaskModal={handleOpenNewTaskModal} />
        <div className="content">
          <span className="title">Suas Tarefas</span>
          <Table />
        </div>
      </Container>
      {isNewTaskModalOpen && (
        <NewTaskModal
          isOpen={isNewTaskModalOpen}
          onRequestClose={handleCloseNewTaskModal}
        />
      )}
    </>
  );
};

export default Home;
