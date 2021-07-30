import React, { useState } from 'react';
import { Task } from '@/models/Task';
import styled from 'styled-components';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<Task[]>;
};

const InputForm = styled.div``;

const Input = styled.input``;

const Button = styled.button``;

// タスクを入力するコンポーネント
const TaskInput: React.FC<Props> = ({ tasks, setTasks }) => {
  const [text, setText] = useState<string>('');
  const [count, setCount] = useState<number>(tasks.length + 1);

  const handleSubmit = () => {
    if (text === '') return null;
    else {
      setCount(count + 1);

      const newTask: Task = {
        id: count,
        value: text,
        done: false,
        edit: false,
      };

      setTasks([newTask, ...tasks]);
      setText('');
    }
  };

  return (
    <InputForm>
      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button onClick={handleSubmit}>追加</Button>
    </InputForm>
  );
};

export default TaskInput;
