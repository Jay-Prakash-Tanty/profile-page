import { Button, Stack, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

function OtherLogin() {
    return (

        //sign in with google button
        <Stack spacing={2} px={{ xs: 4, sm: 8, md: 12 }} my={3}>
            <Button
                size='large'
                startIcon={<GoogleIcon />}
                variant='contained'
                sx={{
                    bgcolor: '#252525',
                    color: 'white',
                    fontSize: '10px',
                    textTransform: 'capitalize'
                }}
            >
                Sign in with Google
            </Button>

            {/* sign in with github button */}
            <Button
                size='large'
                startIcon={<GitHubIcon />}
                variant='contained'
                sx={{
                    bgcolor: '#252525',
                    color: 'white',
                    fontSize: '10px',
                    textTransform: 'capitalize'
                }}
            >
                Sign in with GitHub
            </Button>
            <Typography
                variant='body2'
                sx={{
                    color: '#424242',
                    fontSize: '12px'
                }}>
                No registered yet?
                <Typography
                    component='span'
                    sx={{
                        color: 'white',
                        textDecoration: 'underline',
                        cursor: 'pointer'
                    }}>
                    Click here to sign up now
                </Typography>
            </Typography>
        </Stack>
    );
}

export default OtherLogin;
