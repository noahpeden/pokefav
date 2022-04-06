import { AppBar, Toolbar, Typography, Link } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography
          variant="h6"
          sx={{ marginRight: '1rem', textDecoration: 'none', color: 'white' }}
          component={RouterLink}
          to="/"
        >
          Noah's Pokedex
        </Typography>
        <Link
          sx={{ marginRight: '1rem', textDecoration: 'none', color: 'white' }}
          component={RouterLink}
          to="/favorites"
        >
          Favorites
        </Link>
        <Link
          sx={{ marginRight: '1rem', textDecoration: 'none', color: 'white' }}
          component={RouterLink}
          to="/all"
        >
          View All
        </Link>
      </Toolbar>
    </AppBar>
  );
}
