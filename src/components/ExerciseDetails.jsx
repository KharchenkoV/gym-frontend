import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Detail from './Detail'
import SimilarExercises from '../pages/SimilarExercises'
import { useParams } from 'react-router-dom'
import ExerciseService from '../services/exercise.service'
import {bodyParts} from "../pages/constants";

const ExerciseDetails = () => {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
    const [equipmentExercises, setEquipmentExercises] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const fetchExercisesData = async () => {

            const exerciseDetailData = await ExerciseService.getExerciseById(id)
            exerciseDetailData.bodyPart = bodyParts[exerciseDetailData.bodyPart.toLowerCase()];
            setExerciseDetail(exerciseDetailData)

            const targetMuscleExercisesData = await ExerciseService.getExercisesByTarget(exerciseDetailData.target)
            setTargetMuscleExercises(targetMuscleExercisesData);

            const equipmentExercisesData = await ExerciseService.getExercisesByEquipment(exerciseDetailData.equipment)
            setEquipmentExercises(equipmentExercisesData);
            console.log(exerciseDetailData)
        };

        fetchExercisesData();
    }, [id]);

    if (!exerciseDetail) return <div>No Data</div>;
    return (
        <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
            <Detail exerciseDetail={exerciseDetail} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </Box>
    )
}

export default ExerciseDetails