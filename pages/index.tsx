import styled from 'styled-components';
import { useState, ChangeEvent } from 'react';
import type { NextPage } from 'next';
import { setDefaultResultOrder } from 'dns';
import TodoTask from '../components/TodoTask';

export interface ITask {
  taskName: string;
  deadline: number;
}

const Home: NextPage = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else {
      setDeadline(Number(e.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline,
    };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter(task => task.taskName !== taskNameToDelete));
  };

  return (
    <PageWrapper>
      <Header>
        <HeaderWrapper>
          <Input
            name="task"
            value={task}
            type="text"
            placeholder="Task..."
            onChange={handleChange}
          />
          <Input
            name="deadline"
            value={deadline}
            type="number"
            placeholder="Deadline ..."
            onChange={handleChange}
          />
        </HeaderWrapper>
        <Button onClick={addTask}>Add</Button>
      </Header>
      <Todolist>
        {todoList.map((task: ITask, key) => {
          return <TodoTask key={key} task={task} completeTask={completeTask} />;
        })}
      </Todolist>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
  padding-left: 12px;
  font-size: 1rem;
  border: 1px solid gray;
  // remove border on input focus
  outline: none;
`;

const Button = styled.button`
  width: 70px;
  height: 78px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  border: none;
`;

const Header = styled.header`
  flex: 30%;
  background-color: tomato;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Todolist = styled.main`
  flex: 70%;
  width: 100%;
`;

export default Home;
