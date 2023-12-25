import React from 'react';
import { Container, Paper, TextField, Button, Typography, CssBaseline } from '@mui/material';

const Login = () => {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper elevation={6} sx={{ padding: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#FFA500', borderRadius: '16px' }}>
        <Typography component="h1" variant="h5" mb={2} sx={{ color: 'white' }}>
          Login
        </Typography>
        <form noValidate style={{ width: '100%', marginTop: "5px" }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            InputProps={{ sx: { backgroundColor: 'white', borderRadius: '8px' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            InputProps={{ sx: { backgroundColor: 'white', borderRadius: '8px' } }}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, backgroundColor: 'white', color: '#FFA500', borderRadius: '8px' }}>
            Login
          </Button>
          <Button fullWidth variant="contained" color="secondary" sx={{ mt: 1, borderRadius: '8px' }}>
            Login with Google
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
