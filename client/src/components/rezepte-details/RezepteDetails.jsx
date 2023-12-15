import { useContext, useEffect, useMemo, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as rezepteService from '../../services/rezepteService';
import * as commentService from '../../services/commentService';
import AuthContext from "../../context/authContext";
import reducer from "./commentReducer";
import useForm from "../../hooks/useForms";
import { pathToUrl } from "../utils/pathUtils";
import Path from "../../paths";
import RezepteEdit from "../rezepte-edit/RezepteEdit";


export default function rezepteDetails() {
  const {email, userId} = useContext(AuthContext);
  const [rezepte, setRezepte] = useState({});
  const {owner} = useContext(AuthContext);
  // const [comments, dispatch] = useReducer(reducer, [])
  const { rezepteId } = useParams();
  const navigate = useNavigate();


  useEffect(() => {
      rezepteService.getOne(rezepteId)
          .then(setRezepte);

          // commentService.getAll(rezepteId)
          // .then((result)=> {
          //     dispatch({
          //         type: 'GET_ALL_COMMENTS',
          //         payload: result,
          //     })
          // });
        
  }, [rezepteId]);

//   const addCommentHandler = async (values) => {

//     const newComment = await commentService.create(
//         rezepteId,
//         values.comment
//     );

//         newComment.owner = {email};

//         dispatch({
//             type: 'ADD_COMMENT',
//             payload: newComment
//         });
        
// }

const deleteButtonClickHandler = async ()=>{
const hasConfirmed = confirm(`Are you sure you want to delete ${rezepte.title}`);
if(hasConfirmed){
await   rezepteService.remove(rezepteId);
navigate('/rezepte');
}

}

const initialValues = useMemo(()=>({
    comment:'',
}), []);

const {values, onChange, onSubmit} = useForm(initialValues);
    
    



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
          {userId === rezepte._ownerId && (
 <div className="buttons">
 <Link to={pathToUrl(Path.RezepteEdit, {rezepteId})} className="button">Edit</Link>
 <button  className="button" onClick={deleteButtonClickHandler}>Delete</button>
</div>
)}
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
    
  </div>
</div>
      

</>


       
    );
   
}