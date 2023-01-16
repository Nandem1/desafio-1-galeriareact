import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import data from '../data/database.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './Card.css'

function BasicExample(props) {

    let popdata = data.forEach(item => { return item.popover })

    const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" { ...props }>{popdata}</Tooltip >
    );

    return (
        <Row xs={1} md={3} className="g-4 w-100 m-0">
            {data.map(item => {
                return (
                    <Col className="d-flex justify-content-center align-items-center mt-5 mb-4">
                        <Card style={{ width: '22rem' }} className="allcard">
                            <OverlayTrigger trigger='click' placement='top' overlay={renderTooltip}>
                                <Card.Img variant="top" src={item.img} className="card-img" />
                            </OverlayTrigger>
                            <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                                <Card.Text>{item.desc}</Card.Text>
                                <Button variant="dark">{props.botonTitulo}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                )
            })}
        </Row>
    );
}

export default BasicExample;