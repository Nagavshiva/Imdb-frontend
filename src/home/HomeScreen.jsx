import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const HomeScreen = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default HomeScreen