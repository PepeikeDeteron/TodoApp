import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import RegisterDialog from '@/components/RegisterDialog';

const StyledButton = styled(Button)`
  width: 20rem;
  font-size: 1.8rem;
  display: block;
  margin: 5rem auto 0;
`;

const RegisterButton: React.VFC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  return (
    <>
      <StyledButton
        variant="contained"
        color="primary"
        onClick={handleDialogOpen}
      >
        タスクを登録する
      </StyledButton>
      <RegisterDialog open={open} close={handleDialogClose} />
    </>
  );
};

export default RegisterButton;
