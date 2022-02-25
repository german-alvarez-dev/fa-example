import axios from 'axios'

class AuthService {

    constructor() {
        this.api = axios.create({ baseURL: 'http://localhost:5005/api/auth' })
    }

    signup = userCredentials => {
        return this.api.post('/signup', userCredentials)
    }

    login = userCredentials => {
        return this.api.post('/login', userCredentials)
    }

    verify(token) {
        return this.api.get('/verify', { headers: { Authorization: `Bearer ${token}` } })
    }
}

const authService = new AuthService()

export default authService