import '../blog-list-item/bloglistitem.css'

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/authContext';

import { transformDateFormat } from '../../utils/trasnsormDate';

export default function BlogListItem({
  title,
  imageUrl,
  desc,
  date,
  _id,
  authorName
}) {


  const {

    username
  } = useContext(AuthContext);

  const dateFormat = transformDateFormat(date);

  return (
    < >
      <div className="single-blog-area mb-80">
        <div className="blog-thumbnail">
          <img src={imageUrl} alt="" />
        </div>

        <div className="post-date">
          <Link to={`/blog/${_id}`}>
            {dateFormat}
          </Link>
        </div>

        {/* Content */}
        <div className="blog-content">
          <Link to={`/blog/${_id}`} className="post-title">
            {title}
          </Link>
          <div className="meta-data">
            by {authorName}

          </div>
          <p>
            {desc}
          </p>
          <Link to={`/blog/${_id}`} className="btn delicious-btn mt-30">
            Read More
          </Link>
        </div>
      </div>
    </>

  )
}