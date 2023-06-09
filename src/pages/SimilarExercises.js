import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Loader from '../components/Loader'
import HorizontalScrollBar from '../components/HorizontalScrollBar'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Вправи із схожою <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Цільовою групою м'язів</span>
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollBar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Вправи із схожим <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Обладнанням</span> 
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollBar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>
)

export default SimilarExercises