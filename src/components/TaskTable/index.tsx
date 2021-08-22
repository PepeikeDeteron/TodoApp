import React from 'react';
import { useRecoilValue } from 'recoil';
import { taskTableState } from '@/atoms/TaskTable';
import { Tasks } from '@/models/Task';
import { format } from 'date-fns';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableContainer from '@material-ui/core/TableContainer';

type Props = {
  tasks: Tasks[];
};

const TaskTable: React.VFC<Props> = () => {
  const tasks = useRecoilValue(taskTableState);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>タスク</TableCell>
              <TableCell>期限</TableCell>
              <TableCell>優先度</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task: Tasks, index: number) => (
              <TableRow key={index}>
                <TableCell>{task.content}</TableCell>
                <TableCell>{format(task.dueDate, 'yyyy/MM/dd')}</TableCell>
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
