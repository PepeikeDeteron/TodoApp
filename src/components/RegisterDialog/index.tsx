import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  taskContentState,
  taskDueDateState,
  taskPriorityState,
} from '@/atoms/TaskContent';
import { taskTableState } from '@/atoms/TaskTable';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import TaskContent from '@/components/TaskContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';

type DialogProps = {
  open: boolean;
  close: () => void;
};

const RegisterDialog: React.VFC<DialogProps> = (props) => {
  const taskContent = useRecoilValue(taskContentState);
  const taskDueDate = useRecoilValue(taskDueDateState);
  const taskPriority = useRecoilValue(taskPriorityState);
  const [tasks, setTasks] = useRecoilState(taskTableState);

  const handleTaskRegister = () => {
    setTasks([
      ...tasks,
      {
        content: taskContent,
        dueDate: taskDueDate,
        priority: taskPriority,
      },
    ]);
    props.close;
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
