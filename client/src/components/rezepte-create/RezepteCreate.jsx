import { useNavigate } from 'react-router-dom'
import *  as rezepteService from "../../services/rezepteService";

import { useContext } from 'react';
import AuthContext from '../../context/authContext';


export default function RezepteCreate() {
    const {token} = useContext(AuthContext);
    const navigate = useNavigate();
    const createRezepteSubmitHandler = async (e) => {
       
        e.preventDefault();

        const rezepteData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            await rezepteService.create(rezepteData, token);
            navigate('/rezepte');

        } catch (err) {
            //Error notification
            console.log(err)
        }

    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createRezepteSubmitHandler}>
                <div className="container">

                    <h1>Create Recipe</h1>
                    <label htmlFor="title">Recipe title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter recipe title..." />

                    <label htmlFor="prepTime">Prep:</label>
                    <input type="text" id="prep-time" name="prepTime" placeholder="Prep time..." />

                    <label htmlFor="cookTime">Cooking time:</label>
                    <input type="text" id="cook-time" name="cookTime" placeholder="Cooking time..." />

                    <label htmlFor="servings">Servings</label>
                    <input type="text" id="servings" name="servings" placeholder="For how many people..." />

                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" placeholder="List ingredients separated by comma..." />


                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Give photo url..." />

                    <label htmlFor="imageUrlHome">Image:</label>
                    <input type="text" id="imageUrlHome" name="imageUrlHome" placeholder="Give home photo url..." />


                    <label htmlFor="recipeContent">Recipe content:</label>
                    <textarea name="recipeContent" id="recipeContent"></textarea>

                  

                    <label htmlFor="date">Publish date:</label>

                    <input type="date" id="date" name="date" />

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" />

                    <input className="btn submit" type="submit" value="Create Recipe" />

                   
                </div>

            </form>
            
        </section>

    );
}