import React, { useState } from 'react';
import Head from 'next/head';
import { Task } from '@/models/Task';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';

const initialState: Task[] = [];

const Home: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <>
      <Head>
        <title>タスク管理アプリ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>タスク管理アプリ</h1>
        <TaskInput setTasks={setTasks} tasks={tasks} />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </div>
    </>
  );
};

export default Home;
