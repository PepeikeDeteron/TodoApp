export type Tasks = {
  content: string;
  dueDate: Date | null;
  priority: number | number[];
};

export type Task = {
  id: number; // id
  value: string; // 入力内容
  checked: boolean; // 完了・未完了
  edit: boolean; // 編集
};
