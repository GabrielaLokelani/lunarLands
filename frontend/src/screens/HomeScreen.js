
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';

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
        <h1>look at allll these lunar estates</h1>
        <h1>Featured Estates</h1> 
        <div className='estates'>
        {estates.map((estate) => (
        <div className='estate' key={estate.slug}>
          <Link to={`/estate/${estate.slug}`}>
            <img src={estate.image} alt={estate.title} /> 
          </Link>
            <div className="estate-info">
            <Link to={`/estate/${estate.slug}`}>
              <p> {estate.title} </p>
            </Link>
            <p> 
            {estate.location}
            </p>
            <p> 
            {estate.description}
            </p>
            <p> 
            <strong>${estate.price}</strong>
            </p>
            <button>Purchase</button>
            </div>
            </div>
        ))}
        </div>
        </div> 
     );
}
 
export default HomeScreen;