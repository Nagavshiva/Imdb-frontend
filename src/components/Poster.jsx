import { useState, useEffect } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Grid,

} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/actions/movieActions";
import { useNavigate } from "react-router-dom";


const Poster = () => {
  const [hoveredItem, setHoveredItem] = useState(null);


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list, status } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSeeMoreClick = (movieId) => {
    navigate(`/movies/${movieId}`);
  };



  return (
    <div style={{ margin: "5rem 5rem" }}>
      <Grid container spacing={2}>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error loading movies.</p>}

        {list.map((movie, index) => (
          <Grid item key={movie._id} xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              sx={{ position: "relative" }}
            >
              <CardMedia
                component="img"
                alt={`Movie Poster - ${movie.name}`}
                height="370"
                sx={{
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                image={movie.poster}
                loading="lazy"
              />
              {hoveredItem === index && (
                <CardContent
                  sx={{
                    textAlign: "center",
                    position: "absolute",
                    bottom: "0",
                    width: "100%",
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSeeMoreClick(movie._id)}
                  >
                    See More
                  </Button>
                </CardContent>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Poster;
