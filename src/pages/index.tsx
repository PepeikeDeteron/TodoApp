import React, { useState } from 'react';
import Head from 'next/head';
import { Task } from '@/models/Task';
import TaskInput from '@/components/TaskInput';
import TaskList from '@/components/TaskList';
import Header from '@/components/Header';
import RegisterButton from '@/components/RegisterButton';

const initialState: Task[] = [];

const Home: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <>
      <Head>
        <title>タスク管理アプリ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RegisterButton />
      <TaskList setTasks={setTasks} tasks={tasks} />
      {/* <TaskInput setTasks={setTasks} tasks={tasks} /> */}
    </>
  );
};

export default Home;
