import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";

const EstateScreen = () => {
    const params = useParams();
    const { _id } = params;

    const [estate, setEstate] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get(`http://localhost:2600/api/estates/_id/${_id}`);
            setEstate(result.data);
        };
        fetchData();
    }, [_id]);
    
    return ( 
    <div>
        <Row>
            <Col md={6}>
                <img className="img-large"
                src={estate.image} alt={estate.title} />
            </Col>
            <Col md={3}>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <h1>{estate.title}</h1>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h3>{estate.location}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  Price : ${estate.price}
                </ListGroup.Item>
                <ListGroup.Item>
                  Description: <p>{estate.description}</p>
                </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={3}>
                <Card.Body>
                <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col> Price : </Col>
                        <Col> ${estate.price} </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col> Status : </Col>
                        <Col> {estate.status === true ? (<Badge badgeContent={'Sold'} color="error"/>) : (<Badge badgeContent={'Sale'} color="success"/>)} </Col>
                    </Row>
                </ListGroup.Item>
                {estate.status === false && (
                    <ListGroup.Item>
                        <div className='d-grid'>
                            <Button variant="contained">
                                Purchase
                            </Button>
                        </div>
                    </ListGroup.Item>
                )}
                </ListGroup>
                </Card.Body>
                
            </Col>
        </Row>

    </div> 
    );
}
 
export default EstateScreen;