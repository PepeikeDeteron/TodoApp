import React from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import DateFnsUtils from '@date-io/date-fns';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import {
  taskContentState,
  taskDueDateState,
  taskPriorityState,
} from '@/atoms/TaskContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      height: theme.spacing(2),
    },
  })
);

const TaskContent: React.VFC = () => {
  const classes = useStyles();

  const setContent = useSetRecoilState(taskContentState);
  const [dueDate, setDueDate] = useRecoilState(taskDueDateState);
  const [priority, setPriority] = useRecoilState(taskPriorityState);

  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const handleDueDateChange = (date: Date | null) => {
    setDueDate(date);
  };

  const handleSliderChange = (event: any, newValue: number | number[]) => {
    setPriority(newValue as number);
  };

  const marks = [
    {
      value: 1,
      label: '低',
    },
    {
      value: 2,
      label: '中',
    },
    {
      value: 3,
      label: '高',
    },
  ];

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DialogContent>
          <Grid container spacing={4} direction="row">
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="タスク内容"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                onChange={handleContentChange}
              />
            </Grid>
            <Grid item xs={4}>
              <DatePicker
                id="date-picker-inline"
                label="タスク期限"
                variant="dialog"
                margin="normal"
                format="yyyy/MM/dd"
                minDate={new Date()}
                value={dueDate}
                onChange={handleDueDateChange}
              />
            </Grid>
            <Grid container item>
              <Grid item xs={2}>
                <DialogContentText>優先度</DialogContentText>
              </Grid>
              <Grid item xs={5}>
                <Slider
                  aria-label="Custom marks"
                  className={classes.margin}
                  marks={marks}
                  min={1}
                  max={3}
                  step={1}
                  value={priority}
                  onChange={handleSliderChange}
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default TaskContent;
