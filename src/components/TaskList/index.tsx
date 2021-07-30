import React from 'react';
import TaskItem from '@/components/TaskItem';
import { Task } from '@/models/Task';
import styled from 'styled-components';

type Props = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

const Tasks = styled.ul``;

// タスク一覧を表示するコンポーネント
const TaskList: React.FC<Props> = ({ tasks, setTasks }) => {
  // タスクの完了
  const handleTaskDone = (task: Task) => {
    // idで同一判定をし，checkedの真偽を反転
    setTasks((items) =>
      items.map((item) =>
        item.id === task.id ? { ...task, checked: !task.checked } : item
      )
    );
  };

  // タスクの削除
  const handleTaskDelete = (task: Task) => {
    // idが同一の場合を抽出
    setTasks((items) => items.filter((item) => item.id !== task.id));
  };

  // タスクの編集
  const handleTaskEdit = (task: Task) => {
    // idで同一判定をし，editの真偽を反転
    setTasks((items) =>
      items.map((item) =>
        item.id === task.id ? { ...task, edit: !task.edit } : item
      )
    );
  };

  return (
    <div>
      {tasks.length == 0 ? (
        '登録されたタスクはありません'
      ) : (
        <Tasks>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              tasks={task}
              handleTaskDone={handleTaskDone}
              handleTaskDelete={handleTaskDelete}
              handleTaskEdit={handleTaskEdit}
            />
          ))}
        </Tasks>
      )}
    </div>
  );
};

export default TaskList;