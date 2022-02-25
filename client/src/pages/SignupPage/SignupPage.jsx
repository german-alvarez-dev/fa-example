import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SignupForm from '../../components/SignupForm/SignupForm.jsx'

function SignupPage() {

    const navigate = useNavigate()

    const fireFinalActions = () => {
        navigate('/')
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={4}>
                    <h1>Registro de usuario</h1>
                    <hr />
                    <SignupForm fireFinalActions={fireFinalActions} />
                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage