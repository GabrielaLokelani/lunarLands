
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Grid} from '@mui/material';
import {Row, Col} from 'react-bootstrap';
import Estate from '../components/Estate';

const HomeScreen = () => {
    const [estates, setEstates] = useState([]);
    useEffect(()=> {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:2600/api/estates');
            setEstates(result.data);
        };
        fetchData();
    }, []);
    return ( 
        <div>
        <h1>Featured Estates</h1> 
        <div className='estates'>
          <Row>
        {estates.map((estate) => (
        <Col  key={estate._id} sm={6} md={4} lg={3} className='mb-3'>
          <Estate estate={estate}></Estate>
        </Col>
        ))}
        </Row>
        </div>
        </div> 
     );
}
 
export default HomeScreen;