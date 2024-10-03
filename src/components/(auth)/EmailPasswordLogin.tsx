'use client'; 
import { Box, Stack, TextField, InputAdornment, Typography, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from './authSchema'; // Zod schema
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

// Define types based on your Zod schema
type FormData = {
  email: string;
  password: string;
};

function EmailPasswordLogin() {
  // Initialize React Hook Form with Zod validation
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log('Form submitted:', data);
  };

  return (
    <Box sx={{ width: "100%" }} px={12}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <TextField
            variant="outlined"
            fullWidth={true}
            size="small"
            required
            type="email"
            placeholder="Enter your email address"
            // Use React Hook Form's register method to bind the input field
            {...register('email')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: '#424242' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #424242",
              },
            }}
            error={!!errors.email}
            helperText={errors.email?.message} // Display error message if validation fails
          />

          <TextField
            variant="outlined"
            fullWidth={true}
            size="small"
            required
            type="password"
            placeholder="Enter your password"
            // Use React Hook Form's register method to bind the input field
            {...register('password')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: '#424242' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "white",
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "2px solid #424242",
              },
            }}
            error={!!errors.password}
            helperText={errors.password?.message} // Display error message if validation fails
          />
        </Stack>

        <Typography variant='body2' sx={{ textDecoration: 'underline', color: '#757575', textAlign: 'right' }}>Forgot password?</Typography>

        <Button type="submit" variant='contained' size='large' fullWidth={true} sx={{ my: '30px' }}>LogIn</Button>
      </form>
    </Box>
  );
}

export default EmailPasswordLogin;
