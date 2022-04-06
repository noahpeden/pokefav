import { Card, CardMedia, Typography, CardContent, CardActions, Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../contexts/FavoritesContext';

export default function PokeCard({ spriteImages, pokemon, index }) {
  const { dispatchFavorites } = useContext(FavoritesContext);
  const handleFavorite = () => {
    dispatchFavorites({ type: 'ADD_FAVORITE', payload: pokemon });
  };

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image={spriteImages[index]}
        alt="random"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {pokemon.name}
        </Typography>
        <Typography></Typography>
      </CardContent>
      <CardActions>
        <Button size="small" component={Link} to={`/details/${pokemon.name}`}>
          View
        </Button>
        <Button onClick={handleFavorite}>Favorite</Button>
      </CardActions>
    </Card>
  );
}
