import React from 'react';
import { useRecoilState } from 'recoil';
import { taskTableState } from '@/atoms/TaskTable';
import { Tasks } from '@/models/Task';
import { format } from 'date-fns';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  tasks?: Tasks[];
};

const TaskTable: React.VFC<Props> = () => {
  const [tasks, setTasks] = useRecoilState(taskTableState);

  const handleTaskDone = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const newSelect = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newSelect);
  };

  const handleTaskDelete = () => {
    setTasks(tasks.filter((task) => !task.done));
  };

  return (
    <>
      <IconButton
        aria-label="delete"
        onClick={handleTaskDelete}
        disabled={tasks.length === 0}
      >
        <DeleteIcon />
      </IconButton>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>タスク</TableCell>
              <TableCell>期限</TableCell>
              <TableCell>優先度</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={task.done}
                    onChange={(e) => handleTaskDone(e, task.id)}
                  />
                </TableCell>
                <TableCell>{task.content}</TableCell>
                <TableCell>
                  {format(task.dueDate as number | Date, 'yyyy/MM/dd')}
                </TableCell>
                <TableCell>{task.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TaskTable;
