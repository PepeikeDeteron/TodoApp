import React from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import Header from '@/components/Header';
import TaskList from '@/components/TaskList';

const Home: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <Head>
          <title>タスク管理アプリ</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <TaskList />
      </RecoilRoot>
    </>
  );
};

export default Home;
