import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, {  useState } from 'react'
import ExerciseService from '../services/exercise.service'
import HorizontalScrollBar from './HorizontalScrollBar'




const SearchExercises = ({setExercises, setBodyPart, bodyPart}) => {
  const [search, setSearch] = useState('')
  const bodyParts = ['all', 'back', 'cardio', 'chest', 'lower_arms',
      'lower_legs', 'shoulders', 'upper_arms', 'upper_legs', 'waist']

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await ExerciseService.getExercises()

      const searchExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      )

      setSearch('')
      setExercises(searchExercises)
    }
  }
  return (
    <Stack
      alignItems="center"
      mt="37px"
      justifyContent="center"
      p="20px"
    >
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="49px"
        textAlign="center">
        Ефективні вправи, які ти <br />
        повинен знати
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '1170px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Шукати вправи'
          type='text' />
        <Button
          className='search-btn'
          onClick={handleSearch}
          sx={{
            bgcolor: '#FF2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '173px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0px'
          }}>Знайти</Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
      <HorizontalScrollBar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises