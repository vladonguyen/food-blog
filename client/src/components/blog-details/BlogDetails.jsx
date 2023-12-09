import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as blogService from '../../services/blogService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../context/authContext";


export default function blogDetails() {
    const {email} = useContext(AuthContext);
    const {owner} = useContext(AuthContext);
    const [blog, setBlog] = useState({});
    const { blogId } = useParams();


    useEffect(() => {
        blogService.getOne(blogId)
            .then(setBlog);
          
    }, [blogId]);

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
                <p>
                 {blog.articleContent}
                </p>
               
              </div>
            </div>
                

                {/* <!-- Edit/Delete buttons ( Only for creator of this blog )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}

</div>
          
          </div>
    
        </div>
      </div>
    </div>
        

</>


       
    );
   
}