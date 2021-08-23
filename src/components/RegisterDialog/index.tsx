import React from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { Button, Dialog, DialogActions, DialogTitle } from '@material-ui/core';
import {
  taskContentState,
  taskDueDateState,
  taskPriorityState,
} from '@/atoms/TaskContent';
import { taskTableState } from '@/atoms/TaskTable';
import TaskContent from '@/components/TaskContent';

type DialogProps = {
  open: boolean;
  close: () => void;
};

const RegisterDialog: React.VFC<DialogProps> = (props) => {
  const taskContent = useRecoilValue(taskContentState);
  const taskDueDate = useRecoilValue(taskDueDateState);
  const taskPriority = useRecoilValue(taskPriorityState);
  const preTaskContent = useSetRecoilState(taskContentState);
  const [tasks, setTasks] = useRecoilState(taskTableState);

  const handleTaskRegister = () => {
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        content: taskContent,
        dueDate: taskDueDate,
        priority: taskPriority,
        done: false,
      },
    ]);

    preTaskContent('');
    props.close();
  };

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle>登録するタスクを入力してください</DialogTitle>
        <TaskContent />
        <DialogActions>
          <Button onClick={props.close}>戻る</Button>
          <Button onClick={handleTaskRegister}>登録</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegisterDialog;
