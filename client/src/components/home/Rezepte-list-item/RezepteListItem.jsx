import { Link } from 'react-router-dom';


export default function RezepteListItem({
  title,
  imageUrl,
  _id,
  authorName,
  imageUrlHome
}) {
  return (
    < >
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="single-best-receipe-area mb-30">
          <img src={imageUrlHome} alt="" />
          <div className="receipe-content">
            <Link to={`/rezepte/${_id}`} >
              <h5>{title}</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}