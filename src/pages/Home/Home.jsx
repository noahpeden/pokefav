import { Typography, Box, Container, Stack, Button, Input, Paper } from '@mui/material';
import { useContext, useState } from 'react';
import Featured from '../../components/Featured';
import axios from 'axios';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [search, setSearch] = useState('');
  const { setSearched } = useContext(FavoritesContext);
  const navigate = useNavigate();
  const handleSearch = async () => {
    if (search.length > 3) {
      try {
        const response = await axios.get(`${process.env.REACT_APP_POKEMON_URL}pokemon/${search}`);
        setSearched(response.data);
        navigate(`/details/${search}`);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <main>
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
            Noah's Pokedex
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Search Pokemon and mark your favorites!
          </Typography>
          <Box display="flex" justifyContent="center">
            <Input
              align="center"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          </Box>
          <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" onClick={handleSearch}>
              Search Specific Pokemon
            </Button>
            <Button variant="outlined">View All</Button>
          </Stack>
        </Container>
        <Paper>
          <Typography sx={{ mt: 4 }} align="center" variant="h4">
            Featured Pokemon
          </Typography>
          <Featured />
        </Paper>
      </Box>
    </main>
  );
}
