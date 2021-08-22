import React, { useState } from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { Task } from '@/models/Task';
import Header from '@/components/Header';
import TaskList from '@/components/TaskList';
import RegisterButton from '@/components/RegisterButton';

const initialState: Task[] = [];

const Home: React.FC = () => {
  const [tasks, setTasks] = useState(initialState);

  return (
    <>
      <RecoilRoot>
        <Head>
          <title>タスク管理アプリ</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <RegisterButton />
        <TaskList setTasks={setTasks} tasks={tasks} />
      </RecoilRoot>
    </>
  );
};

export default Home;
