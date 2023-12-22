import { useState } from "react";
import { Grid, Box, TextField, Button, Typography } from "@mui/material";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Add validation for empty fields
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const response = await dispatch(loginUser({ email, password }));
      console.log(response)
      // Check if the response indicates success (assuming the API returns relevant data)
      if (response.payload && response.payload.token) {
        // Navigate only if the login was successful
        navigate("../", { relative: "path" });
      } else {
        // Handle cases where the response doesn't contain expected data
        setError(response.payload.errors);
      }
    } catch (err) {
      // Handle login errors
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundImage:'url("https://maven-uploads.s3.amazonaws.com/120386748/projects/netflix%20image.jpg")',
      backgroundSize:'cover'
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Box
            sx={{
              backgroundColor: "white",
              padding: "2rem",
              borderRadius: "5px",
              boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.05)",
            }}
          >
            <Typography
              variant="h6"
              component="h2"
              textAlign="center"
              color="primary"
            >
              Login
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                gap: "2rem",
                width: "100%", // Ensure form takes full width
              }}
            >
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
              {error && (
                <Typography color="error" variant="body2" sx={{ marginTop: "1rem" }}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                margin="normal"
              >
                Sign In
              </Button>
            </Box>
            <Typography
              variant="body2"
              textAlign="center"
              color="textSecondary"
              sx={{ marginTop: "1rem" }}
            >
              Do not have an account?{" "}
              <Link
                to="/reg"
                style={{
                  color: "primary",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                Signup
              </Link>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
