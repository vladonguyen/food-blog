import { useEffect, useState } from "react";
import * as blogService from '../../services/blogService';
import RezepteListItem from "./Rezepte-list-item/RezepteListItem";
import BlogListItem from "./Blog-list-item/BlogListItem";
import { Link } from "react-router-dom";

export default function Home(){

  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(()=>{
blogService.getAll()
.then(result => setBlogPosts(result));
  },[]);



    return(
        <>

        {/* ##### Top Catagory Area Start ##### */}
        
        <section className="top-catagory-area section-padding-80-0">
          <div className="container">
            <div className="row">
              {/* Top Catagory Area */}

              {/* Top Catagory Area */}
              {blogPosts.map(blog => (
        <BlogListItem key={blog.id} {...blog} />
       ))}
            </div>
          </div>
        </section>
        {/* ##### Top Catagory Area End ##### */}
        {/* ##### Best Receipe Area Start ##### */}
        <section className="best-receipe-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-heading">
                  <h3>Recent recipes</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="img/bg-img/r1.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Sushi Easy Receipy</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="img/bg-img/r2.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Homemade Burger</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Best Receipe Area */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="single-best-receipe-area mb-30">
                  <img src="img/bg-img/r3.jpg" alt="" />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Vegan Smoothie</h5>
                    </a>
                    <div className="ratings">
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### Best Receipe Area End ##### */}
        {/* ##### CTA Area Start ##### */}
        <section
          className="cta-area bg-img bg-overlay"
          style={{ backgroundImage: "url(img/bg-img/bg4.jpg)" }}
        >
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                {/* Cta Content */}
                <div className="cta-content text-center">
                  <h2>Gluten Free Receipies</h2>
                  <p>
                    Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque
                    accumsan molestie. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia Curae; Cras sed accumsan neque.
                    Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh
                  </p>
                  <Link to="/rezepte" className="btn delicious-btn">
                    Discover all the receipies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ##### CTA Area End ##### */}

      </>
      
    )
}