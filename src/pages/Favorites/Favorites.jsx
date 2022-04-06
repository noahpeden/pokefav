import { useContext, useEffect, useState } from 'react';
import PokeCard from '../../components/PokeCard';
import { FavoritesContext } from '../../contexts/FavoritesContext';
import { Container, Grid, Typography } from '@mui/material';
import axios from 'axios';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const [spriteImages, setSpriteImages] = useState();
  const fetchPokemon = async () => {
    try {
      debugger;
      console.log(favorites);
      const sprites = favorites.map(async (pokemon) => {
        const sprite = await axios.get(
          `${process.env.REACT_APP_POKEMON_URL}pokemon/${pokemon.name}`
        );
        const spriteImage = sprite?.data?.sprites?.front_default;
        console.log({ spriteImage });
        Promise.all(sprites).then((sprites) => setSpriteImages(sprites));
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(spriteImages);
  return favorites.length > 0 ? (
    favorites.map((favorite, i) => (
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item key={favorite.name} xs={12} sm={6} md={4}>
            <PokeCard spriteImages={[]} pokemon={favorite} index={i} />
          </Grid>
        </Grid>
      </Container>
    ))
  ) : (
    <Typography>No favs yet</Typography>
  );
}
