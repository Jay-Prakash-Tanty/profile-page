import { Box, Stack,TextField, InputAdornment, Typography,Button} from '@mui/material'
import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

function EmailPasswordLogin() {
    return (
        <Box sx={{ width: "100%" }} px={12}>
            <Stack spacing={2} sx={{ alignItems: 'center' }}>
                <TextField
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    required
                    type="email"
                    placeholder="Enter your email address"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon sx={{ color: '#424242', }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-input": {
                            color: "white",
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "2px solid #424242",
                        },
                    }}
                ></TextField>

                <TextField
                    variant="outlined"
                    fullWidth={true}
                    size="small"
                    required
                    type="password"
                    placeholder="Enter your password"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start"    >
                                    <LockIcon sx={{ color: '#424242', }} />
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{
                        "& .MuiOutlinedInput-input": {
                            color: "white",
                        },
                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                            border: "2px solid #424242",
                        },
                    }}
                ></TextField>
            </Stack>
            <Typography variant='body2' sx={{textDecoration:'underline',color:'#757575',textAlign:'right'}}>Forgot password ?</Typography>
            <Button variant='contained' size='large' fullWidth={true} sx={{my:'30px'}}>LogIn</Button>
        </Box>
    );
}

export default EmailPasswordLogin
