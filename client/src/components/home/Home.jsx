import './home.css';

import { useEffect, useState } from "react";
import * as blogService from '../../services/blogService';
import * as rezepteService from '../../services/rezepteService';
import RezepteListItem from "./Rezepte-list-item/RezepteListItem";
import BlogListItem from "./Blog-list-item/BlogListItem";
import { Link } from "react-router-dom";

export default function Home() {

  const [blogPosts, setBlogPosts] = useState([]);
  useEffect(() => {
    blogService.getLastTwo()
      .then(result => setBlogPosts(result));
  }, []);

  const [rezeptePosts, setRezeptePosts] = useState([]);
  useEffect(() => {
    rezepteService.getLastSix()
      .then(result => setRezeptePosts(result));
  }, []);

  return (
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
            {rezeptePosts.map(rezepte => (
              <RezepteListItem key={rezepte.id} {...rezepte} />
            ))}

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
                <h2>Healthy Free Recipes</h2>
                <p>
                  Healthy free recipes offer a delightful combination of nourishment and taste, providing a diverse range of options for those seeking a balanced lifestyle. These recipes prioritize wholesome ingredients, fostering well-being without compromising on flavor.
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