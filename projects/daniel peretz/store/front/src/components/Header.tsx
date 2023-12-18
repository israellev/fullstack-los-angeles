import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: '#FFA500' }}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
            770Jeans
          </Typography>
          <Button color="inherit" component={Link} to="/" sx={{ color: 'white' }}>Home</Button>
          <Button color="inherit" component={Link} to="/products" sx={{ color: 'white' }}>Products</Button>
          <Button color="inherit" component={Link} to="/about" sx={{ color: 'white' }}>About</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
