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
const TaskInput: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>('');
  const [count, setCount] = useState<number>(props.tasks.length + 1);

  const handleSubmit = () => {
    setCount(count + 1);

    if (!text) return;

    const newTask: Task = {
      id: count,
      value: text,
      checked: false,
      edit: false,
    };

    // tasksにnewTaskの値を追加し，入力フォームをリセット
    props.setTasks([newTask, ...props.tasks]);
    setText('');
  };

  return (
    <InputForm>
      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="タスクを入力してください"
      />
      <Button onClick={handleSubmit}>追加</Button>
    </InputForm>
  );
};

export default TaskInput;
