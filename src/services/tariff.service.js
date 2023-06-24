import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/tariff'

const getTariffs = async () => {
    try{
        const res = await axios.get(`${API_URL}/all`);
        return res.data
    } catch (e){
        console.log(e)
    }
}

const TariffService = {
    getTariffs
}

export default TariffService