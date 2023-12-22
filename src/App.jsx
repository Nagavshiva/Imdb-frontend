import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import MovieList from './components/MovieList';
import Register from "./components/Register";
import HomeScreen from "./home/HomeScreen";
import Login from "./components/Login";
import Poster from "./components/Poster";
import MovieDetail from "./components/MovieDetail";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<HomeScreen />}>
      <Route path="/" element={<Poster />} />
      <Route path="movies/:id" element={<MovieDetail />} />
      <Route path="reg" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
