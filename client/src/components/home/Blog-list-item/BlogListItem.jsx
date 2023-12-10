import { useContext } from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../../context/authContext';

export default function BlogListItem ({
    title,
    imageUrl,
    _id,
    authorName,
    imageUrlHome
}) {


  const {
   
    username
} = useContext(AuthContext);

    return (
    < >   

<div className="col-12 col-lg-6">
                <div className="single-top-catagory">
                  <img src={imageUrlHome} alt="" />
                  {/* Content */}
                  <div className="top-cta-content">
                    <h3>{title}</h3>
                    <h6>by {authorName}</h6>
                    <Link to={`/blog/${_id}`} className="btn delicious-btn">
                      See Full Article
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