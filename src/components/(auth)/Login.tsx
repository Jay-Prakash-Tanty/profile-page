import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function Login({ onAdminSelect }: { onAdminSelect: (isAdmin: boolean) => void }) {
  const handleAdminClick = () => {
    onAdminSelect(true); 
  };

  const handleMemberClick = () => {
    onAdminSelect(false);
  };
  return (
    <div>
      <Stack direction='row' spacing={2} py={3} sx={{ alignItems: 'center', justifyContent: "center" }}>
        <Typography variant='body1' >Logging in as : </Typography>
        <Button color='primary' size='medium' variant='contained' onClick={handleMemberClick}>Member</Button>
        <Button color='inherit' size='medium' variant='contained' onClick={handleAdminClick}>Admin</Button>
      </Stack>
    </div>
  )
}

export default Login
