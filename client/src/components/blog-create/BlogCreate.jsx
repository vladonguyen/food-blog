import { useNavigate } from 'react-router-dom'
import *  as blogService from "../../services/blogService";

export default function BlogCreate() {
    const navigate = useNavigate();
    const createBlogSubmitHandler = async (e) => {
        e.preventDefault();

        const blogData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await blogService.create(blogData);
            navigate('/blog');

        } catch (err) {
            //Error notification
            console.log(err)
        }

    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createBlogSubmitHandler}>
                <div className="container">

                    <h1>Create Post</h1>
                    <label htmlFor="title">Post title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter post title..." />


                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Give photo url..." />

                    <label htmlFor="imageUrlHome">Image:</label>
                    <input type="text" id="imageUrlHome" name="imageUrlHome" placeholder="Give home photo url..." />

                    <label htmlFor="desc">Description:</label>
                    <textarea name="desc" id="desc"></textarea>

                    <label htmlFor="articleContent">Article text:</label>
                    <textarea name="articleContent" id="articleContent"></textarea>

                    <label htmlFor="date">Publish date:</label>

                    <input type="date" id="date" name="date" />

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" />
                    
                    <input className="btn submit" type="submit" value="Create Post" />
                </div>

            </form>
        </section>

    );
}