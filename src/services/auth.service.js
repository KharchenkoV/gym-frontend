import axios from "axios";

const API_URL = 'http://localhost:8080/api/v1/auth'

const authenticate = async (AuthenticateDto) => {
    const res = await axios.post(`${API_URL}/authenticate`, AuthenticateDto)
    return res.data
}

const AuthService = {
    authenticate
}

export default AuthService