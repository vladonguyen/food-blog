import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as rezepteService from '../../services/rezepteService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../context/authContext";


export default function RezepteDetails() {
    const {email} = useContext(AuthContext);
    const {owner} = useContext(AuthContext);
    const [rezepte, setRezepte] = useState({});
  
    const { rezepteId } = useParams();


    useEffect(() => {
        rezepteService.getOne(rezepteId)
            .then(setRezepte);

          
    }, [rezepteId]);

    
    



    return (
       
<>


 
 <div
          className="breadcumb-area bg-img bg-overlay"
          style={{ backgroundImage: "url(/img/bg-img/breadcumb3.jpg)" }}
        >
           

          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12">
                <div className="breadcumb-text text-center">
                  <h2>{rezepte.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="receipe-content-area">
  <div className="container">
    
    <div className="row">
      
      <div className="col-12 col-md-8">
      <div className="owl-item" style={{marginTop:"40px", marginBottom:"40px"}}><img src={rezepte.imageUrl} alt="" /></div>
        <div className="receipe-headline my-5">
          <span>{rezepte.date}</span>
          <h2>{rezepte.title}</h2>
          <div className="receipe-duration">
            <h6>Prep: {rezepte.prepTime} mins</h6>
            <h6>Cook: {rezepte.cookTime} mins</h6>
            <h6>Servings: {rezepte.servings} Persons</h6>
            <h6>Author: {rezepte.authorName} </h6> 
          </div>
        </div>
      </div>
    
    </div>
    <div className="row">
      <div className="col-12 col-lg-8">
        {/* Single Preparation Step */}
        <div className="single-preparation-step d-flex">
          
          <p>
          {rezepte.recipeContent}
          </p>
        </div>

      </div>
      {/* Ingredients */}
      <div className="col-12 col-lg-4">
        <div className="ingredients">
          <h4>Ingredients</h4>
          {/* Custom Checkbox */}
          {rezepte.ingredients && (
    <>
      {rezepte.ingredients.split(',').map((ingredient, index) => (
        // Custom Checkbox
        <div className="custom-control custom-checkbox" key={index}>
          <input
            type="checkbox"
            className="custom-control-input"
            id={`customCheck${index + 1}`}
          />
          <label className="custom-control-label" htmlFor={`customCheck${index + 1}`}>
            {ingredient.trim()}
          </label>
        </div>
      ))}
    </>
  )}
         
        </div>
      </div>
    </div>
    {/* <div className="row">
      <div className="col-12">
        <div className="section-heading text-left">
          <h3>Leave a comment</h3>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="contact-form-area">
          <form action="#" method="post">
            <div className="row">
              <div className="col-12 col-lg-6">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="col-12 col-lg-6">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="E-mail"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn delicious-btn mt-30" type="submit">
                  Post Comments
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div> */}
  </div>
</div>
      

</>


       
    );
   
}