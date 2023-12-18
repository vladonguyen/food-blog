import { useEffect, useState } from "react";
import * as blogService from '../../services/blogService';
import BlogListItem from "./blog-list-item/BlogListItem";

export default function BlogList() {
  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    blogService.getAll()
      .then(result => setBlogPosts(result));
  }, []);

  return (
    <><>
      {/* ##### Breadcumb Area Start ##### */}
      <div
        className="breadcumb-area bg-img bg-overlay"
        style={{ backgroundImage: "url(img/bg-img/breadcumb3.jpg)" }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <div className="breadcumb-text text-center">
                <h2>Blog</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ##### Breadcumb Area End ##### */}

      {/* ##### Blog Area Start ##### */}
      <>
        <div className="blog-area section-padding-80">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                <div className="blog-posts-area">
                  {/* Single Blog Area begin*/}


                  {blogPosts.map(blog => (
                    <BlogListItem key={blog.id} {...blog} />
                  ))}
                  {/* Single Blog Area end*/}

                </div>

              </div>

            </div>
          </div>
        </div>
      </>
      {/* ##### Blog Area End ##### */}

      {/* <!-- Display paragraph: If there is no posts  --> */}
      {blogPosts.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}

    </>
    </>
  )
}