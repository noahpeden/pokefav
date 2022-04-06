import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Grid,
  Card,
  Container,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';

export default function Details() {
  const { name } = useParams();
  const [details, setDetails] = useState();
  const fetchDetails = async () => {
    const detailsResponse = await axios.get(`${process.env.REACT_APP_POKEMON_URL}pokemon/${name}`);
    Promise.resolve(detailsResponse).then((detailsResponse) => setDetails(detailsResponse.data));
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  console.log(details);
  return details ? (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid item key={details.id} xs={12} sm={6} md={4}>
        <Card sx={{ height: '15%', display: 'flex', flexDirection: 'column' }}>
          <CardMedia component="img" image={details?.sprites?.front_default} alt="random" />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography></Typography>
          </CardContent>
          <CardActions>
            <Button size="large">Favorite</Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  ) : (
    <Typography variant="h3">Loading...</Typography>
  );
}
