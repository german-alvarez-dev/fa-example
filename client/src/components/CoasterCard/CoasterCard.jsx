import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CoasterCard.css'

const CoasterCard = ({ title, imageUrl, _id }) => {
    return (
        <Card className="CoasterCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Link to={`/detalles/${_id}`}>
                    <div className="d-grid gap-2">
                        <Button variant="dark">Ver detalles</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >
    )
}

export default CoasterCard