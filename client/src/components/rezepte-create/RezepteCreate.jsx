import '../rezepte-create/RezepteCreate.css'

import { useNavigate } from 'react-router-dom'
import *  as rezepteService from "../../services/rezepteService";

import { useContext, useState } from 'react';
import AuthContext from '../../context/authContext';

import { Editor } from 'primereact/editor';
import DOMPurify from 'dompurify';

import { hasEmptyValues } from '../utils/validationUtils';


export default function RezepteCreate() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [mainText, setText] = useState('');


    const { isCreateRezepteError } = useContext(AuthContext);
    const { setCreateRezepteError } = useContext(AuthContext);
    const createRezepteSubmitHandler = async (e) => {

        e.preventDefault();
        setCreateRezepteError(false);

        const rezepteData = Object.fromEntries(new FormData(e.currentTarget));
        try {
            if (hasEmptyValues(rezepteData, setCreateRezepteError)) {
                throw Error('All fields must be filled!');
            }

            // Sanitize the HTML content before storing it
            const sanitizedMainText = DOMPurify.sanitize(mainText);

            await rezepteService.create({ ...rezepteData, recipeContent: sanitizedMainText }, token);
            navigate('/rezepte');

        } catch (err) {
            //Error notification
            console.log(err)
        }

    }
    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={createRezepteSubmitHandler} className='createCenter'>
                <h1 className='h1Center'>Create Recipe</h1>
                <div className="container createForm white row newsletter-form bg-img bg-overlay">


                    <label htmlFor="title">Recipe title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter recipe title..." className="form-control" />

                    <label htmlFor="prepTime">Prep:</label>
                    <input type="text" id="prep-time" name="prepTime" placeholder="Prep time..." className="form-control" />

                    <label htmlFor="cookTime">Cooking time:</label>
                    <input type="text" id="cook-time" name="cookTime" placeholder="Cooking time..." className="form-control" />

                    <label htmlFor="servings">Servings</label>
                    <input type="text" id="servings" name="servings" placeholder="For how many people..." className="form-control" />

                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" placeholder="List ingredients separated by comma..." className="form-control" />


                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Image size must 1280x720px" className="form-control" />

                    <label htmlFor="imageUrlHome">Home URL image:</label>
                    <input type="text" id="imageUrlHome" name="imageUrlHome" placeholder="Size must be 500x500 (squire)" className="form-control" />

                    <label htmlFor="recipeContent">Article full text:</label>
                    <Editor value={mainText} onTextChange={(e) => setText(e.htmlValue)} className='richTextEditor' />



                    <label htmlFor="date">Publish date:</label>

                    <input type="date" id="date" name="date" className="form-control" />

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" className="form-control" />
                    {isCreateRezepteError && <div className='createErrorMess'>{isCreateRezepteError.message}</div>}

                    <button className="btn delicious-btn mt-30 createBtnCenter" type="submit">Create Recipe</button>




                </div>

            </form>

        </section>

    );
}