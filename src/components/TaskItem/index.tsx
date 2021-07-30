import React, { useState, useEffect } from 'react';
import { Task } from '@/models/Task';
import styled from 'styled-components';

type Props = {
  tasks: Task;
  handleTaskDone: (tasks: Task) => void;
  handleTaskDelete: (tasks: Task) => void;
  handleTaskEdit: (tasks: Task) => void;
};

const Input = styled.input``;

const Span = styled.span``;

const Button = styled.button``;

// タスク一覧を表示するコンポーネントの一つ
const TaskItem: React.FC<Props> = ({
  tasks,
  handleTaskDone,
  handleTaskDelete,
}) => {
  const [text, setText] = useState<string>('');

  // 編集した内容で更新するための関数
  const handleReSubmit = () => {
    if (!text) return;

    // tasksの入力内容を書き換え，入力フォームをリセット
    tasks.value = text;
    setText('');
  };

  useEffect(() => {}, [text]);

  return (
    <li className={tasks.checked ? 'checked' : ''}>
      <label>
        <Input
          type="checkbox"
          onClick={() => handleTaskDone(tasks)}
          defaultChecked={tasks.checked}
        />
        <Span>{tasks.value}</Span>
      </label>
      <Button onClick={() => handleTaskDelete(tasks)}>削除</Button>
    </li>
  );
};

export default TaskItem;
