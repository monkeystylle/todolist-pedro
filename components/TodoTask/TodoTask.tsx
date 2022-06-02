import React from 'react';
import styled from 'styled-components';
import { ITask } from '../../pages';

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <TaskWrapper>
      <span>{task.taskName}</span>
      <span>{task.deadline}</span>
      <button onClick={() => completeTask(task.taskName)}>X</button>
    </TaskWrapper>
  );
};

const TaskWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: 32px 0;
  font-size: 1.5rem;
`;

export default TodoTask;
