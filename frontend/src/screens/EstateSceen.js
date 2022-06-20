import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { useReducer } from "react";
import { useContext } from "react";
import { Store } from "../Store";


const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, estate: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };

const EstateScreen = () => {
    const params = useParams();
    const { _id } = params;

    const [{ loading, error, estate }, dispatch] =
    useReducer(reducer, {
        estate: [],
        loading: true,
        error: '',
    });

    // const [estate, setEstate] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
            const result = await axios.get(`http://localhost:2600/api/estates/_id/${_id}`);
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
        } catch (err) {
          dispatch({ type: 'FETCH_FAIL', payload: error });
        }
            // setEstate(result.data);
        };
        fetchData();
    }, [_id]);


    const {state, dispatch: ctxDispatch} = useContext(Store);
    const addPurchaseHandler = () => {
        ctxDispatch({type:'CART_ADD_ITEM', payload: {...estate, quantity: 1} })
    }
    
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
                <h1>{ estate.title }</h1>
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
                            <Button onClick={addPurchaseHandler} variant="contained">
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