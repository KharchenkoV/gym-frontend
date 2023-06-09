import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import ExercisePage from "./components/ExercisePage";
import {Box} from "@mui/material";
import ExerciseDetails from "./components/ExerciseDetails";
import Home from "./pages/Home";
import "./App.css";

function App() {
    return (
        <Box width="400px" sx={{width: {xl: '1488px'}}} m="auto">
            <Navbar/>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/exercises" element={<ExercisePage/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetails/>}/>
            </Routes>
        </Box>
    );
}

export default App;
