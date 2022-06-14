import data from '../data'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return ( 
        <div>
            <h1>look at allll these lunar estates</h1>

        <h1>Featured Estates</h1> 
        <div className='estates'>
        {data.estates.map((estate) => (
        <div className='estate' key={estate.slug}>
          <Link to={`/estate/${estate.slug}`}>
            <img src={estate.image} alt={estate.title} /> 
          </Link>
            <div className="estate-info">
            <Link to={`/estate/${estate.slug}`}>
              <p> {estate.title} </p>
            </Link>
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