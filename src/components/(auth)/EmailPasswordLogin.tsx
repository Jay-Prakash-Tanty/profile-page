'use client';

import { Box, Stack, TextField, InputAdornment, Typography, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, signupSchema } from '@/validation/authSchema';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';

// Define types based on your Zod schema
type FormData = {
  email: string;
  password: string;
  username?: string; 
};

type AuthProps = {
  authType: 'sign-in' | 'sign-up';
};

function EmailPasswordLogin({ authType }: AuthProps) {
  //  Choose the schema based on authType (sign-up or sign-in)
  const schema = authType === 'sign-up' ? signupSchema : loginSchema;

  //  React Hook Form with Zod validation
  const { handleSubmit, formState: { errors }, reset, control, trigger } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
  });

  const [formInteracted, setFormInteracted] = useState(false); 
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log('Form submitted:', data);
    setFormSubmitted(true); 
    reset();
  };

  const handleBlur = (fieldName: keyof FormData) => {
    // When a field loses focus, set form as interacted
    setFormInteracted(true);
    trigger(fieldName);  // Validate the field on blur
  };

  return (
    <Box sx={{ width: "100%" ,px: { xs: 2, sm: 6, md: 12 },}} >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} sx={{ alignItems: 'center' }}>

          {/* username field for sign-up */}
          {authType === 'sign-up' && (
            <Controller
              control={control}
              name="username"
              render={({ field }) => (
                <TextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  size="small"
                  required
                  placeholder="Enter your username"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon sx={{ color: '#424242' }} />
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
                  error={!!errors.username}
                  helperText={errors.username ? errors.username.message : null} // Display error message if validation fails
                  onBlur={() => handleBlur('username')} // Trigger validation and set form as interacted
                />
              )}
            />
          )}

          {/* Email Field with React Hook Form's Controller */}
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextField
                {...field} // Controller will pass props here
                variant="outlined"
                fullWidth
                size="small"
                required
                type="email"
                placeholder="Enter your email address"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: '#424242' }} />
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
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : null} // Display error message if validation fails
                onBlur={() => handleBlur('email')} // Trigger validation and set form as interacted
              />
            )}
          />

          {/* Password Field with React Hook Form's Controller */}
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                fullWidth
                size="small"
                required
                type="password"
                placeholder="Enter your password"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon sx={{ color: '#424242' }} />
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
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : null} // Display error message if validation fails
                onBlur={() => handleBlur('password')} // Trigger validation and set form as interacted
              />
            )}
          />
        </Stack>

        {/* Reset functionality */}
        <Typography
          variant='body2'
          sx={{ textDecoration: 'underline', color: '#757575', textAlign: 'right', cursor: 'pointer' }}
          onClick={() => reset()}
        >
          Reset
        </Typography>

        {/* Forgot password link for sign-in only */}
        {authType === 'sign-in' && (
          <Typography variant='body2' sx={{ textDecoration: 'underline',cursor:'pointer', color: '#757575', textAlign: 'right' }}>
            Forgot password?
          </Typography>
        )}

        <Button type="submit" variant='contained' size='large' fullWidth={true} sx={{ my: '30px' }}>
          {authType === 'sign-in' ? 'Log In' : 'Sign Up'}
        </Button>
      </form>
    </Box>
  );
}

export default EmailPasswordLogin;
