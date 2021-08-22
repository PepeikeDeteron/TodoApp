import { atom } from 'recoil';

// タスク内容
export const taskContentState = atom<string>({
  key: 'taskContentState',
  default: '',
});

// タスク期限
export const taskDueDateState = atom<Date | null>({
  key: 'taskDueDateState',
  default: new Date(),
});

// タスク優先度
export const taskPriorityState = atom<number | number[]>({
  key: 'taskPriorityState',
  default: 2,
});
