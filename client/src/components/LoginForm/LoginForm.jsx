import { useState, useContext } from "react"
import { AuthContext } from "../../context/auth.context"
import { Form, Button } from 'react-bootstrap'
import authService from '../../services/auth.service'

function LoginForm({ fireFinalActions }) {

    const [loginForm, setLoginForm] = useState({
        password: "",
        email: ""
    })

    const { password, email } = loginForm
    const { storeToken, authenticateUser } = useContext(AuthContext)


    const handleInputChange = e => {
        const { name, value } = e.target
        setLoginForm({ ...loginForm, [name]: value })
    }

    function handleSubmit(e) {

        e.preventDefault()

        const credentials = { password, email }

        authService
            .login(credentials)
            .then(({ data }) => {
                console.log("JWT token", data.authToken)
                storeToken(data.authToken)
                authenticateUser()
                fireFinalActions()
            })
            .catch(err => console.log(err))
    }

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={email} onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" name="password" value={password} onChange={handleInputChange} />
            </Form.Group>

            <Button variant="dark" type="submit" style={{ width: '100%' }}>Iniciar sesión</Button>

        </Form>
    )
}

export default LoginForm