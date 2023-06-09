import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/exercise'

const getExercises = async () => {
    try{
        const res = await axios.get(API_URL);
        return res.data
    } catch (e){
        console.log(e)
    }
}

const getExerciseById = async (id) => {
    try{
        const res = await axios.get(`${API_URL}/${id}`);
        return res.data
    } catch (e){
        console.log(e)
    }
}
const getExercisesByBodyPart = async  (bodyPart) => {
    try{
        const res = await axios.get(`${API_URL}/bodypart/${bodyPart}`);
        return res.data
    } catch (e){
        console.log(e)
    }
}

const getExercisesByTarget = async  (target) => {
    try{
        const res = await axios.get(`${API_URL}/target/${target}`);
        return res.data
    } catch (e){
        console.log(e)
    }
}

const getExercisesByEquipment = async  (equipment) => {
    try{
        const res = await axios.get(`${API_URL}/equipment/${equipment}`);
        return res.data
    } catch (e){
        console.log(e)
    }
}

const ExerciseService = {
    getExercises,
    getExerciseById,
    getExercisesByBodyPart,
    getExercisesByTarget,
    getExercisesByEquipment
};

export default ExerciseService;