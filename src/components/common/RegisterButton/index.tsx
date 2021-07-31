import React, { useState } from 'react';
import RegisterDialog from '@/components/common/RegisterDialog';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

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
