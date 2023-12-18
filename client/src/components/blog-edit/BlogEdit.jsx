import '../blog-create/blogcreate.css'

import {useNavigate, useParams} from 'react-router-dom'
import *  as blogService from "../../services/blogService";
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import AuthContext from '../../context/authContext';

import { hasEmptyValues } from '../utils/validationUtils';

export default function BlogEdit(){
    const { isEditBlogError } = useContext(AuthContext);
    const { setEditBlogError } = useContext(AuthContext);
   

    const {token} = useContext(AuthContext);
    const navigate = useNavigate();
    const {blogId} = useParams();
    const [blog, setBlog] = useState({
        title: '',
        imageUrl: '',
        desc: '',
        articleContent: '',
        date:'',
        authorName:'',
        
    });
    useEffect(()=> {
        blogService.getOne(blogId)
        .then(result => {
            setBlog(result);
        })
    }, [blogId])
    const editBlogSubmitHandler = async (e) => {
        e.preventDefault();
        setEditBlogError(false);

        const values = Object.fromEntries(new FormData(e.currentTarget));
console.log(values)
        try {
            if (hasEmptyValues(values, setEditBlogError)) {
                throw Error('All fields must be filled!');
            }
            await blogService.edit(blogId, values, token);
           
            navigate('/blog');
    
        } catch (err) {
            //Error notification
            console.log(err)
        }
      
    }

    const onChange = (e) => {
        setBlog(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <>
 

    <section id="create-page" className="auth ">
            <form id="create" onSubmit={editBlogSubmitHandler} className='createCenter'>
            <div ><h1 className='h1Center'>Edit Post</h1></div>
                <div className="container createForm white row newsletter-form bg-img bg-overlay" >
                
                    
                    <label htmlFor="title">Post title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter post title..."  className="form-control" value={blog.title} onChange={onChange}/>


                    <label htmlFor="imageUrl">Image Url:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image size must 1280x720px"  className="form-control" value={blog.imageUrl} onChange={onChange}/>

                    <label htmlFor="desc">Short description:</label>
                    <textarea name="desc" id="desc"  className="form-control" value={blog.desc} onChange={onChange}></textarea>

                    <label htmlFor="articleContent">Article full text:</label>
                    <textarea name="articleContent" id="articleContent"  className="form-control articleFullText" value={blog.articleContent} onChange={onChange}></textarea>

                    <label htmlFor="date">Publish date:</label>

                    <input type="date" id="date" name="date"  className="form-control" value={blog.date} onChange={onChange}/>

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author"  className="form-control" value={blog.authorName} onChange={onChange}/>

                    {isEditBlogError && <div className='createErrorMess'>{isEditBlogError.message}</div>}

                    <button className="btn delicious-btn mt-30 createBtnCenter" type="submit">Edit post</button>
                </div>

            </form>
        </section>

    </>
    );
}