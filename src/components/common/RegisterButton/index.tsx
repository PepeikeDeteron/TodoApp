import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

type ButtonProps = {
  content: string;
};

const StyledButton = styled(Button)`
  width: 20rem;
  font-size: 1.8rem;
  display: block;
  margin: 5rem auto 0;
`;

const RegisterButton: React.VFC<ButtonProps> = (props) => {
  return (
    <StyledButton variant="contained" color="primary">
      {props.content}
    </StyledButton>
  );
};

export default RegisterButton;
