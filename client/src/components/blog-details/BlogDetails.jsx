import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as blogService from '../../services/blogService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../context/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForms";
import { pathToUrl } from "../utils/pathUtils";
import Path from "../../paths";
import BlogEdit from "../blog-edit/BlogEdit";



export default function blogDetails() {
  const { token } = useContext(AuthContext);
  const { email, userId } = useContext(AuthContext);
  const [blog, setBlog] = useState({});
  const { owner } = useContext(AuthContext);
  const [comments, dispatch] = useReducer(reducer, [])
  const { blogId } = useParams();
  const navigate = useNavigate();


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







      <div className="blog-area section-padding-80">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8">
              <div className="blog-posts-area">
                <div className="single-blog-area mb-80">
                  <div className="blog-thumbnail">
                    <img src={blog.imageUrl} alt="" />
                    <div className="post-date">

                      {blog.date}

                    </div>
                  </div>
                  {/* Content */}
                  <div className="blog-content">

                    <h1>  {blog.title}</h1>

                    <div className="meta-data">
                      by {blog.authorName}

                    </div>

                    {blog.articleContent}
                    <div className="details-comments">
                      <h2>Comments:</h2>
                      <ul>
                        {comments.map(({ _id, text, owner: { email } }) => (
                          <li key={_id} className="comment">
                            <p>{email}: {text}</p>
                          </li>
                        ))}
                      </ul>

                      {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                      )}
                    </div>


                    <article className="create-comment">
                      <label>Add new comment:</label>
                      <form className="form" onSubmit={onSubmit}>
                        <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Comment......"></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                      </form>
                    </article>

                    {userId === blog._ownerId && (
                      <div className="buttons">
                        <Link to={pathToUrl(Path.BlogEdit, { blogId })} className="button">Edit</Link>
                        <button className="button" onClick={deleteButtonClickHandler}>Delete</button>
                      </div>
                    )}
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