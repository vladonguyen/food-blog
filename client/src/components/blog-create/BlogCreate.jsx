import '../blog-create/blogcreate.css'

import { useNavigate } from 'react-router-dom'
import *  as blogService from "../../services/blogService";

import { useContext } from 'react';
import AuthContext from '../../context/authContext';

import { hasEmptyValues } from '../utils/validationUtils';

export default function BlogCreate() {
    const { token } = useContext(AuthContext);
    const { isCreateBlogError } = useContext(AuthContext);
    const { setCreateBlogError } = useContext(AuthContext);
    const navigate = useNavigate();
    const createBlogSubmitHandler = async (e) => {
        e.preventDefault();
        setCreateBlogError(false);

   
        const blogData = Object.fromEntries(new FormData(e.currentTarget));
        try {

            if (hasEmptyValues(blogData, setCreateBlogError)) {
                throw Error('All fields must be filled!');
            }



            await blogService.create(blogData, token);
            navigate('/blog');

        } catch (error) {
            console.error(error.message);
            return null;
        }

    }
    return (
        <section id="create-page" className="auth ">
            <form id="create" onSubmit={createBlogSubmitHandler} className='createCenter'>
                <div ><h1 className='h1Center'>Create Post</h1></div>
                <div className="container createForm white row newsletter-form bg-img bg-overlay" >


                    <label htmlFor="title">Post title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter post title..." className="form-control" />


                    <label htmlFor="imageUrl">Image Url:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image size must 1280x720px" className="form-control" />

                    <label htmlFor="desc">Short description:</label>
                    <textarea name="desc" id="desc" className="form-control"></textarea>

                    <label htmlFor="articleContent">Article full text:</label>
                    <textarea name="articleContent" id="articleContent" className="form-control articleFullText"></textarea>

                    <label htmlFor="date">Publish date:</label>

                    <input type="date" id="date" name="date" className="form-control" />

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" className="form-control" />

                    {isCreateBlogError && <div className='createErrorMess'>{isCreateBlogError.message}</div>}

                    <button className="btn delicious-btn mt-30 createBtnCenter" type="submit">Create post</button>
                </div>

            </form>
        </section>

    );
}