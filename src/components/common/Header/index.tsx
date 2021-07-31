import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header: React.VFC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">タスク管理アプリ</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
