import { Box, CircularProgress, Container, Grid } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PokeCard from './PokeCard';

export default function Featured() {
  const [featuredPokemon, setFeaturedPokemon] = useState();
  const [spriteImages, setSpriteImages] = useState();
  const [loading, setLoading] = useState();
  const { pathname } = useLocation();

  const fetchPokemon = async () => {
    setLoading(true);
    const queryLimit = pathname === '/all' ? 60 : 9;
    let response;
    try {
      response = await axios.get(
        `${process.env.REACT_APP_POKEMON_URL}pokemon/?limit=${queryLimit}`
      );
    } catch (e) {
      return e;
    }
    try {
      const sprites = response.data.results.map(async (pokemon) => {
        const sprite = await axios.get(
          `${process.env.REACT_APP_POKEMON_URL}pokemon/${pokemon.name}`
        );
        const spriteImage = sprite?.data?.sprites?.front_default;
        Promise.all(sprites)
          .then((sprites) => setSpriteImages(sprites))
          .then(() => setLoading(false));
        return spriteImage;
      });
    } catch (e) {
      return e;
    }
    setFeaturedPokemon(response.data.results);
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <Box display="flex" justifyContent={'center'}>
      <CircularProgress align="center" />
    </Box>
  ) : (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {featuredPokemon &&
          spriteImages &&
          featuredPokemon?.map((pokemon, i) => {
            return (
              <Grid item key={pokemon.name} xs={12} sm={6} md={4}>
                <PokeCard spriteImages={spriteImages} pokemon={pokemon} index={i} />
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
}
