import { useState } from 'react';
import {
  TextField,
  Button,
  Container,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMovie } from '../redux/actions/movieActions';
import { addActor } from '../redux/actions/actorActions';
import { addProducer } from '../redux/actions/producerActions';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
    width: '100%',
  },
  paper: {
    padding: 20,
    marginTop: 20,
    overflowY: 'auto', // Add this line for vertical scrollbar
    maxHeight: '80vh', // Set a maximum height for the paper
  },
}));

// eslint-disable-next-line react/prop-types
const MovieForm = ({onCloseModal}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [movieInfo, setMovieInfo] = useState({
    name: '',
    yearOfRelease: '',
    plot: '',
    poster: '',
  });
console.log(movieInfo)
  const [actorInfo, setActorInfo] = useState({
    name: '',
    gender: '',
    dob: '',
    bio: '',
  });
console.log(actorInfo)
  const [producerInfo, setProducerInfo] = useState({
    name: '',
    gender: '',
    dob: '',
    bio: '',
  });
console.log(producerInfo)
  const handleChange = (e, category) => {
    const { name, value } = e.target;
    switch (category) {
      case 'movie':
        setMovieInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
        break;
      case 'actor':
        setActorInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
        break;
      case 'producer':
        setProducerInfo((prevInfo) => ({
          ...prevInfo,
          [name]: value,
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch actions to add data
    dispatch(addMovie(movieInfo));
    dispatch(addActor(actorInfo));
    dispatch(addProducer(producerInfo));

    // Clear form after submission
    setMovieInfo({
      name: '',
      yearOfRelease: '',
      plot: '',
      poster: '',
    });

    setActorInfo({
      name: '',
      gender: '',
      dob: '',
      bio: '',
    });

    setProducerInfo({
      name: '',
      gender: '',
      dob: '',
      bio: '',
    });
    onCloseModal();
  };

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={3} className={classes.paper}>


        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
            {/* Movie Section */}
            <Grid item xs={12}>
              <h2>Movie Information</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Movie Name"
                name="name"
                value={movieInfo.name}
                onChange={(e) => handleChange(e, 'movie')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Year of Release"
                name="yearOfRelease"
                value={movieInfo.yearOfRelease}
                onChange={(e) => handleChange(e, 'movie')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Plot"
                name="plot"
                multiline
                rows={4}
                value={movieInfo.plot}
                onChange={(e) => handleChange(e, 'movie')}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Poster URL"
                name="poster"
                value={movieInfo.poster}
                onChange={(e) => handleChange(e, 'movie')}
              />
            </Grid>

            {/* Actor Section */}
            <Grid item xs={12}>
              <h2>Actor Information</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Actor Name"
                name="name"
                value={actorInfo.name}
                onChange={(e) => handleChange(e, 'actor')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={actorInfo.gender}
                  onChange={(e) => handleChange(e, 'actor')}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={actorInfo.dob}
                onChange={(e) => handleChange(e, 'actor')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                multiline
                rows={4}
                value={actorInfo.bio}
                onChange={(e) => handleChange(e, 'actor')}
              />
            </Grid>

            {/* Producer Section */}
            <Grid item xs={12}>
              <h2>Producer Information</h2>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Producer Name"
                name="name"
                value={producerInfo.name}
                onChange={(e) => handleChange(e, 'producer')}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl className={classes.formControl}>
                <InputLabel>Gender</InputLabel>
                <Select
                  name="gender"
                  value={producerInfo.gender}
                  onChange={(e) => handleChange(e, 'producer')}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                value={producerInfo.dob}
                onChange={(e) => handleChange(e, 'producer')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Bio"
                name="bio"
                multiline
                rows={4}
                value={producerInfo.bio}
                onChange={(e) => handleChange(e, 'producer')}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>
            Submit
          </Button>
        </form>

      </Paper>
    </Container>
  );
};

export default MovieForm;
