import { Button, Checkbox} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const Estate = (props) => {
    const {estate} = props;
    
    return ( 
        <Card className='estate'>
            <Link to={`/estate/${estate._id}`}>
            <Card.Img variant="top" src={estate.image} text={estate.title} /> 
            </Link>
            <Card.Body>
            <Link to={`/estate/${estate._id}`}>
                <Card.Title> {estate.title} </Card.Title>
            </Link>
            <Card.Subtitle> {estate.location} </Card.Subtitle>
            <Card.Text> {estate.description} </Card.Text>
            <Card.Text> $ {estate.price} </Card.Text>
            <Checkbox icon={<FavoriteBorder color="error"/>} checkedIcon={<Favorite color="error"/>} />
            <Button variant="contained" color="secondary">Purchase</Button>
            </Card.Body>
        </Card>
    );
}
 
export default Estate;