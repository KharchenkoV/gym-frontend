import React, { useState } from 'react'
import SearchExercises from './SearchExercises'
import { Box } from '@mui/material'
import Exercises from './Exercises'

const ExercisePage = () => {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>
      <SearchExercises setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default ExercisePage