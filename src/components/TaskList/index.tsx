import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NoRegisterSVG from '../../../public/no_register.svg';
import { taskTableState } from '@/atoms/TaskTable';
import RegisterButton from '@/components/RegisterButton';
import RegisterDialog from '@/components/RegisterDialog';
import TaskTable from '@/components/TaskTable';

const NoRegister = styled.p`
  font-size: 2rem;
  text-align: center;
  margin: 6rem 0 0;
  user-select: none;
`;

const StyledNoRegisterSVG = styled(NoRegisterSVG)`
  display: block;
  margin: 3rem auto 0;
`;

const StyledFab = styled(Fab)`
  position: absolute;
  bottom: 3rem;
  right: 3rem;
`;

const TaskList: React.VFC = () => {
  const tasks = useRecoilValue(taskTableState);

  const [open, setOpen] = useState<boolean>(false);
  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <Box>
        {tasks.length <= 0 ? (
          <>
            <NoRegister>登録されたタスクはありません</NoRegister>
            <RegisterButton />
            <StyledNoRegisterSVG />
          </>
        ) : (
          <>
            <TaskTable />
            <StyledFab
              color="primary"
              aria-label="add"
              onClick={handleDialogOpen}
            >
              <AddIcon />
            </StyledFab>
          </>
        )}
      </Box>
      <RegisterDialog open={open} close={handleDialogClose} />
    </>
  );
};

export default TaskList;
