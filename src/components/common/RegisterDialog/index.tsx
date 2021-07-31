import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

type DialogProps = {
  open: boolean;
  close: () => void;
};

const RegisterDialog: React.VFC<DialogProps> = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle>タスク登録</DialogTitle>
        <DialogContent>
          <DialogContentText>
            登録するタスクを入力してください
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.close}>戻る</Button>
          <Button>登録</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RegisterDialog;
