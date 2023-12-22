import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { fetchMoviesById } from "../redux/actions/movieActions";

const MovieDetail = () => {
  const { selectedMovie } = useSelector((state) => state.movies);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(fetchMoviesById(id));
    }
  }, [dispatch, id]);

  const handleRemoveClick = () => {
    navigate("/");
  };

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={12} md={8} lg={6}>
        {selectedMovie && (
          <Card sx={{ margin: "1rem", display: "flex", position: "relative" }}>
            {/* Remove Icon */}
            <IconButton
              sx={{ position: "absolute", top: 0, right: 0 }}
              onClick={handleRemoveClick}
              aria-label="Remove Movie"
            >
              <CloseIcon />
            </IconButton>

            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <CardMedia
                  component="img"
                  alt="Movie Poster"
                  height="370"
                  image={selectedMovie.poster}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <CardContent >
                  <Typography variant="h5" component="div" mb={2}>
                    {selectedMovie.name}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" mb={1}>
                    {selectedMovie.plot}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" mb={1}>
                    {selectedMovie.yearOfRelease}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={1}>
                    <strong>Actor:</strong>{" "}
                    {selectedMovie.actors
                      ? selectedMovie.actors.map((actor) => actor.name).join(", ")
                      : "N/A"}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" mb={1}>
                    <strong>Producer:</strong>{" "}
                    {selectedMovie.producer ? selectedMovie.producer.name : "N/A"}
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        )}
      </Grid>
    </Grid>
  );
};

export default MovieDetail;
