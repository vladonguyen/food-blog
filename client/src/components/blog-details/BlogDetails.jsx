import '../blog-details/blog-details.css';
import '../blog-list/blog-list-item/blogListItem.css'

import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as blogService from '../../services/blogService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../context/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../utils/pathUtils";
import Path from "../../paths";
import BlogEdit from "../blog-edit/BlogEdit";

import { hasEmptyValues } from '../utils/validationUtils';
import { transformDateFormat } from '../utils/trasnsormDate';
import DOMPurify from 'dompurify';



export default function BlogDetails() {
  const { token } = useContext(AuthContext);
  const { email, userId, isAuthenticated } = useContext(AuthContext);
  const [blog, setBlog] = useState({});
  const { owner } = useContext(AuthContext);
  const [comments, dispatch] = useReducer(reducer, [])
  const { blogId } = useParams();
  const navigate = useNavigate();

  

  const {isCommentError } = useContext(AuthContext);
    const { setCommentError } = useContext(AuthContext);

  useEffect(() => {
    blogService.getOne(blogId)
      .then(setBlog);

    commentService.getAll(blogId)
      .then((result) => {
        dispatch({
          type: 'GET_ALL_COMMENTS',
          payload: result,
        })
      });

  }, [blogId]);

  const addCommentHandler = async (values) => {

    setCommentError(false);
    if (hasEmptyValues(values, setCommentError)) {
      
      throw Error('All fields must be filled!');
  }

    const newComment = await commentService.create(
      blogId,
      values.comment,
      token
    );

    newComment.owner = { email };

    dispatch({
      type: 'ADD_COMMENT',
      payload: newComment
    });

    values.comment = '';

  }

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${blog.title}`);
    if (hasConfirmed) {
      await blogService.remove(blogId, token);
      navigate('/blog');
    }

  }

  const initialValues = useMemo(() => ({
    comment: '',
  }), []);

  const { values, onChange, onSubmit } = useForm(addCommentHandler, {
    comment: '',
  });

  return (

    <>

      {/* ##### Breadcumb Area Start ##### */}
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>{blog.title}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ##### Breadcumb Area End ##### */}

      <div className="blog-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts-area">
                <div className="single-blog-area mb-80">
                  <div className="blog-thumbnail">
                    <img src={blog.imageUrl} alt="" />
                 
                  </div>
                  {/* Content */}
                 
                  <div className="blog-content">
                  {blog.date} 
                    <h1>  {blog.title}</h1>

                    <div className="meta-data">
                      by {blog.authorName}

                    </div>

                    {/* {blog.articleContent} */}

                      {/* Sanitize and render HTML content */}
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.articleContent) }} />



                    {/* ##### Edit/Delete buttons start ##### */}
                    {userId === blog._ownerId && (
                      <aside>
                        <Link to={pathToUrl(Path.BlogEdit, { blogId })} className="editBtn btn delicious-btn mt-30"> EDIT</Link>
                        <button className="deleteBtn btn delicious-btn mt-30" onClick={deleteButtonClickHandler}> DELETE  </button>
                      </aside>
                    )}

                    {/* ##### Edit/Delete buttons end ##### */}

                    {/* ##### Comment Area Start ##### */}
                    <div className="details-comments">
                      <h2 className='postedComments'>Comments:</h2>

                      {comments.map(({ _id, text, owner: { username } }) => (


                        <div className="panel single-accordion" key={_id}>
                          <h6 key={_id} className='white-text'>
                            <a

                            >
                              {username || email} wrote:
                              <span className="accor-open" key={_id}>
                              </span>

                            </a>
                          </h6>
                          <div id="collapseOne" className="accordion-content collapse show" style={{}}>
                            <p>
                              {text}
                            </p>
                          </div>
                        </div>

                      ))}

                      {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                      )}
                    </div>
                    {/* ##### Comment Area End ##### */}





                    {/* ##### Comment Form Start ##### */}
                    {isAuthenticated && (
                      <>
                        <div className="row">
                          <div className="col-12">
                            <div className="section-heading text-left commentSection">
                              <h3>Leave a comment</h3>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="contact-form-area">
                              <form onSubmit={onSubmit}>
                                <div className="row">
                                  <div className="col-12">
                                    <textarea
                                      name="comment"
                                      className="form-control"
                                      id="comment"
                                      cols={30}
                                      rows={10}
                                      placeholder="Make a comment..."
                                      onChange={onChange}
                                      value={values.comment}
                                    />
                                  </div>
                                  <div className="col-12">
                                  {isCommentError && <div className='commentErrorMess'>{isCommentError.message}</div>}
                                    <button className="btn delicious-btn mt-30 centerCommBtn" type="submit">
                                      Post Comment
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </>
                    )}


                    {/* ##### Comment Form End ##### */}

                  </div>

                </div>



              </div>

            </div>

          </div>
        </div>
      </div>


    </>



  );

}