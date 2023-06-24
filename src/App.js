import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisePage from "./components/ExercisePage";
import {Box} from "@mui/material";
import ExerciseDetails from "./components/ExerciseDetails";
import Home from "./pages/Home";
import "./App.css";
import Tariffs from "./components/Tariffs";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import {useEffect} from "react";
import jwt from "jwt-decode";

function App() {
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        if(user && user.token){
            const decodedToken = jwt(user.token)
            const currentDate = new Date()
            if (decodedToken.exp * 1000 < currentDate.getTime()){
                localStorage.removeItem('user')
            }
        }
    }, [])
    return (
        <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/exercises" element={<ExercisePage/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
                <Route path="/tariffs" element={<Tariffs/>} />
            </Routes>
            <Footer/>
        </Box>
    );
}

export default App;
