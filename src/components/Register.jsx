import { useState } from "react";
import { useDispatch } from "react-redux";
import {Box, Grid, TextField, Button, Typography } from "@mui/material";
import { registerUser } from "../redux/actions/userActions"; // Make sure to import the correct path
import { useNavigate,Link } from "react-router-dom";



const Register = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Dispatch the registerUser action with the user data
    dispatch(registerUser({ username, email, password }));
    navigate('../login',{ relative: "path" })


  };

  return (
    
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width:'100%',
        marginTop:'1rem',
        backgroundSize:'cover',
        position:'fixed',
        backgroundImage:'url("https://maven-uploads.s3.amazonaws.com/120386748/projects/netflix%20image.jpg")',
        
      }}
    >
      <Grid container sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }} >
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "5px",
              
            }}
          >
            <Typography variant="h6" component="h2" textAlign="center" color="primary">
              Register
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ gap: '2rem' }}>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                required
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                margin="normal"
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                margin="normal"
              />
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                margin="normal"
              >
                Sign Up
              </Button>
            </Box>
            <Typography variant="body2" textAlign="center" color="textSecondary" sx={{marginTop:'1rem'}}>
              Do not have an account?{" "}
              <Link to="/login" style={{ color: "primary", textDecoration: "none" }}>
                Sign In
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  
  );
};

export default Register;
