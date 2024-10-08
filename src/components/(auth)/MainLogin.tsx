import React from 'react';
import Login from './Login';
import LoginBox from './LoginBox';
import { Box } from '@mui/material';
import LoginDetails from './LoginDetails';

function MainLogin({ authType }: { authType: 'sign-in' | 'sign-up' }) {
  return (
    <Box bgcolor='#1E1E1E'>
      <Login />
      {/* Pass authType to LoginBox */}
      <LoginBox authType={authType} />
    </Box>
  );
}

export default MainLogin;
