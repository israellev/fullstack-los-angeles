import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { pink } from '@mui/material/colors';
import Login from './Login';

export function Header() {
  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: '#FFA500' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            770-Jeans-
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
          <Button color="inherit" component={Link} to="/products" sx={{ color: 'white' }}>Products</Button>
          <Button color="inherit" component={Link} to="/login" sx={{ color: 'white' }}>Login</Button>
          <div>
            <Switch defaultChecked />
            <Switch defaultChecked color="secondary" />
            <Switch defaultChecked color="warning" />
            <Switch defaultChecked color="default" />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
