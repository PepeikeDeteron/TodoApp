import { atom } from 'recoil';
import { Tasks } from '@/models/Task';

// タスク一覧
export const taskTableState = atom<Tasks[]>({
  key: 'taskTableState',
  default: [],
});
