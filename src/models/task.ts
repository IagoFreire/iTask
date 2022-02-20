export interface ITask {
  id: number;
  name: string,
  description: string,
  status: TaskStatus,
}

export enum TaskStatus {
  'Iniciado' = 0,
  'EmProgresso' = 1,
  'Concluido' = 2,
  'Bloqueado' = 3,
}

export const taskStatus = [
  {
    label: 'Iniciado',
    value: TaskStatus.Iniciado,
  },
  {
    label: 'Em progresso',
    value: TaskStatus.EmProgresso,
  },
  {
    label: 'Concluido',
    value: TaskStatus.Concluido,
  },
  {
    label: 'Bloqueado',
    value: TaskStatus.Bloqueado,
  }
]