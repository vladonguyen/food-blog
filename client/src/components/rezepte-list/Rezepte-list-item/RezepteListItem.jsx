import { useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../../context/authContext';

export default function RezepteListItem ({
    title,
    imageUrl,
    _id
}) {


  const {
   
    username
} = useContext(AuthContext);

    return (
    < >   
                         <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src={imageUrl} alt="" />
                  <div className="receipe-content">
                    <Link to={`/rezepte/${_id}`}>
                      <h5>{title}</h5>
                    </Link>
                    
                  </div>
                </div>
              </div>






      </>









        
    //     <div className="allGames">
    //     <div className="allGames-info">
    //         <img src={imageUrl} />
    //         <h6>{category}</h6>
    //         <h2>{title}</h2>
    //         <Link to={`/games/${_id}`} className="details-button">Details</Link>
    //     </div>

    // </div>
    )
}