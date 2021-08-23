import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const StyledTypography = styled(Typography)`
  user-select: none;
`;

const Header: React.VFC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledTypography variant="h4">タスク管理アプリ</StyledTypography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
