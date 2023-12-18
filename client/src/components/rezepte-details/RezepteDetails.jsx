import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as rezepteService from '../../services/rezepteService';
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";
import { pathToUrl } from "../utils/pathUtils";
import Path from "../../paths";
import DOMPurify from 'dompurify';

export default function rezepteDetails() {
  const { token } = useContext(AuthContext);
  const { email, userId } = useContext(AuthContext);
  const [rezepte, setRezepte] = useState({});
  const { owner } = useContext(AuthContext);
  const { rezepteId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    rezepteService.getOne(rezepteId)
      .then(setRezepte);


  }, [rezepteId]);

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete ${rezepte.title}`);
    if (hasConfirmed) {
      await rezepteService.remove(rezepteId, token);
      navigate('/rezepte');
    }

  }

  const initialValues = useMemo(() => ({
    comment: '',
  }), []);

  const { values, onChange, onSubmit } = useForm(initialValues);

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
              <div className="owl-item" style={{ marginTop: "40px", marginBottom: "40px" }}><img src={rezepte.imageUrl} alt="" /></div>
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
                                       {/* Sanitize and render HTML content */}
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rezepte.recipeContent) }} />
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
                       {/* ##### Edit/Delete buttons start ##### */}
                       {userId === rezepte._ownerId && (
                    <aside>
                    <Link to={pathToUrl(Path.RezepteEdit, { rezepteId })} className="editBtn btn delicious-btn mt-30">EDIT</Link>
                    <button className="deleteBtn btn delicious-btn mt-30" onClick={deleteButtonClickHandler}>DELETE</button>
                    </aside>
                )}
                    {/* ##### Edit/Delete buttons end ##### */}
          </div>

        </div>
      </div>
    </>
  );
}