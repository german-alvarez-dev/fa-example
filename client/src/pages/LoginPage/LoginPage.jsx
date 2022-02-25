import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm.jsx'

function LoginPage() {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/')
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Incio de sesión</h1>
                    <hr />
                    <LoginForm fireFinalActions={fireFinalActions} />
                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage