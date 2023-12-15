import {useNavigate, useParams} from 'react-router-dom'
import *  as blogService from "../../services/blogService";
import { useEffect, useState } from 'react';

export default function BlogEdit(){
    const navigate = useNavigate();
    const {blogId} = useParams();
    const [blog, setBlog] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        imageUrlHome: '',
        summary: '',
        
    });
    useEffect(()=> {
        blogService.getOne(blogId)
        .then(result => {
            setBlog(result);
        })
    }, [blogId])
    const editBlogSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
console.log(values)
        try {
            await blogService.edit(blogId, values);
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
        <section id="create-page" className="auth">  
        <form id="create" onSubmit={editBlogSubmitHandler}>
            <div className="container">

                <h1>Edit Blog</h1>



<h1>Create Post</h1>
                    <label htmlFor="title">Post title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter post title..." value={blog.title} onChange={onChange} />


                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Give photo url..." value={blog.imageUrl} onChange={onChange}/>

                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrlHome" name="imageUrlHome" placeholder="Give home photo url..." value={blog.imageUrlHome} onChange={onChange}/>


                    <label htmlFor="desc">Description:</label>
                    <textarea name="desc" id="desc" value={blog.desc} onChange={onChange}></textarea>

                    <label htmlFor="articleContent">Article text:</label>
                    <textarea name="articleContent" id="articleContent" value={blog.articleContent} onChange={onChange}></textarea>

                    <label htmlFor="date">Publish date:</label>
                    <input type="date" id="date" name="date" value={blog.date} onChange={onChange}/>

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" value={blog.authorName} onChange={onChange}/>

                <input className="btn submit" type="submit" value="Edit Blog"  />
            </div>
        </form>
    </section>

    );
}