import React from 'react';
import { useRecoilState } from 'recoil';
import { format } from 'date-fns';
import styled from 'styled-components';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import { taskTableState } from '@/atoms/TaskTable';
import { Tasks } from '@/models/Task';

type Props = {
  tasks?: Tasks[];
};

const StyledIconButton = styled(IconButton)`
  position: relative;
  top: 1rem;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
  font-size: 3rem;
`;

const StyledTableCell = styled(TableCell)`
  font-size: 1.5rem;
`;

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
      <StyledIconButton
        aria-label="delete"
        onClick={handleTaskDelete}
        disabled={tasks.length === 0}
      >
        <StyledDeleteIcon />
      </StyledIconButton>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <StyledTableCell>タスク</StyledTableCell>
              <StyledTableCell>期限</StyledTableCell>
              <StyledTableCell>優先度</StyledTableCell>
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
