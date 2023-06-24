import React from 'react';
import {Box, Stack, Typography} from "@mui/material";
import GymImage from '../assets/images/gym-photo.jpg'
import ExerciseImage from  '../assets/images/exercise-photo.jpg'

const Home = () => {
    return (
        <Box>
            <Box sx={{mt: {lg: '150px', xs: '70px'}, ml: {sm: '50px'}}} position="relative" p="20px">
                <Typography color="#FF2625" fontWeight="600" fontSize="26px">Спортивний зал</Typography>
                <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
                    Широкий вибір тренажерів <br/>
                    та компетентних тренерів
                </Typography>
                <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                    Переглянь доступні абонементи та послуги, <br/>
                    які підійдуть саме для тебе
                </Typography>
                <Stack>
                    <a href="/tariffs" style={{
                        marginTop: '45px',
                        textDecoration: 'none',
                        width: '200px',
                        textAlign: 'center',
                        background: '#FF2625',
                        padding: '14px',
                        fontSize: '22px',
                        textTransform: 'none',
                        color: 'white',
                        borderRadius: '4px'
                    }}>Переглянути тарифи</a>
                </Stack>

                <img src={GymImage} alt="hero-banner" className="hero-banner-img"/>
            </Box>
            <Box sx={{mt: {lg: '50px', xs: '70px'}, ml: {sm: '50px'}, display: 'flex'}} p="20px">
                <img src={ExerciseImage} alt="hero-banner"
                     style={{
                         width: '700px',
                         height: "auto",
                        marginTop: '-20px', marginRight: '60px'}}/>
                <Box>
                    <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '40px'}}} mb="23px" mt="30px">
                        Зібрана обширна база <br/>
                        тренувань на всі групи м'язів
                    </Typography>
                    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
                        Переглянь базу вправ зібраних у нас, <br/>
                        щоб дізнатися правильну техніку
                    </Typography>
                    <Stack>
                        <a href="/exercises" style={{
                            marginTop: '45px',
                            textDecoration: 'none',
                            width: '200px',
                            textAlign: 'center',
                            background: '#FF2625',
                            padding: '14px',
                            fontSize: '22px',
                            textTransform: 'none',
                            color: 'white',
                            borderRadius: '4px'
                        }}>Переглянути вправи</a>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;