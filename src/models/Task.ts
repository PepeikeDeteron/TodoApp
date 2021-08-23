export type Tasks = {
  id: string;
  content: string;
  dueDate: Date | null;
  priority: number | number[];
  done: boolean;
};
