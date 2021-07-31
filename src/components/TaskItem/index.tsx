import React, { useState, useEffect } from 'react';
import { Task } from '@/models/Task';
import styled from 'styled-components';

type handleProps = {
  handleTaskDone: (tasks: Task) => void;
  handleTaskDelete: (tasks: Task) => void;
  handleTaskEdit: (tasks: Task) => void;
};

type Props = {
  tasks: Task;
} & handleProps;

const Input = styled.input``;

const Span = styled.span``;

const Button = styled.button``;

// タスク一覧を表示するコンポーネントの一つ
const TaskItem: React.FC<Props> = (props) => {
  const [text, setText] = useState<string>('');

  // 編集した内容で更新するための関数
  const handleReSubmit = () => {
    if (!text) return;

    // tasksの入力内容を書き換え，入力フォームをリセット
    props.tasks.value = text;
    setText('');
  };

  useEffect(() => {}, [text]);

  return (
    <li className={props.tasks.checked ? 'checked' : ''}>
      <label>
        <Input
          type="checkbox"
          onClick={() => props.handleTaskDone(props.tasks)}
          defaultChecked={props.tasks.checked}
        />
        <Span>{props.tasks.value}</Span>
      </label>
      <Button onClick={() => props.handleTaskDelete(props.tasks)}>削除</Button>
    </li>
  );
};

export default TaskItem;
