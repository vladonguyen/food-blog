import '../rezepte-create/RezepteCreate.css'

import { useNavigate, useParams } from 'react-router-dom'
import *  as rezepteService from "../../services/rezepteService";
import { useEffect, useState } from 'react';

import { useContext } from 'react';
import AuthContext from '../../context/authContext';

import { Editor } from 'primereact/editor';
import DOMPurify from 'dompurify';

import { hasEmptyValues } from '../utils/validationUtils';

export default function RezepteEdit() {
    const { isEditRezepteError } = useContext(AuthContext);
    const { setEditRezepteError } = useContext(AuthContext);

    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const { rezepteId } = useParams();
    const [mainText, setText] = useState('');
    const [rezepte, setRezepte] = useState({
        title: '',
        prepTime: '',
        cookTime: '',
        servings: '',
        ingredients: '',
        imageUrl: '',
        imageUrlHome: '',
        recipeContent: '',
        date: '',
        authorName: '',

    });
    useEffect(() => {
        rezepteService.getOne(rezepteId)
            .then(result => {
                setRezepte(result);
                setText(result.recipeContent)

            })
    }, [rezepteId])
    const editRezepteSubmitHandler = async (e) => {
        e.preventDefault();
        setEditRezepteError(false);

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            if (hasEmptyValues(values, setEditRezepteError)) {
                throw Error('All fields must be filled!');
            }
            const sanitizedMainText = DOMPurify.sanitize(mainText);

            await rezepteService.edit(rezepteId, { ...values, recipeContent: sanitizedMainText }, token);
            navigate('/rezepte');

        } catch (err) {
            //Error notification
            console.log(err)
        }

    }

    const onChange = (e) => {
        setRezepte(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={editRezepteSubmitHandler} className='createCenter'>
                <h1 className='h1Center'>Edit Rezepte</h1>
                <div className="container createForm white row newsletter-form bg-img bg-overlay">

                    <label htmlFor="title">Recipe title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter recipe title..." value={rezepte.title} onChange={onChange} className="form-control" />

                    <label htmlFor="prepTime">Prep:</label>
                    <input type="text" id="prep-time" name="prepTime" placeholder="Prep time..." value={rezepte.prepTime} onChange={onChange} className="form-control" />

                    <label htmlFor="cookTime">Cooking time:</label>
                    <input type="text" id="cook-time" name="cookTime" placeholder="Cooking time..." value={rezepte.cookTime} onChange={onChange} className="form-control" />

                    <label htmlFor="servings">Servings</label>
                    <input type="text" id="servings" name="servings" placeholder="For how many people..." value={rezepte.servings} onChange={onChange} className="form-control" />

                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" placeholder="List ingredients separated by comma..." value={rezepte.ingredients} onChange={onChange} className="form-control" />


                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Give photo url..." value={rezepte.imageUrl} onChange={onChange} className="form-control" />

                    <label htmlFor="imageUrlHome">Image:</label>
                    <input type="text" id="imageUrlHome" name="imageUrlHome" placeholder="Give home photo url..." value={rezepte.imageUrlHome} onChange={onChange} className="form-control" />

                    <label htmlFor="recipeContent">Article full text:</label>
                    <Editor value={mainText} onTextChange={(e) => setText(e.htmlValue)} className='richTextEditor' />

                    <label htmlFor="date" >Publish date:</label>

                    <input type="date" id="date" name="date" value={rezepte.date} onChange={onChange} className="form-control" />

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" value={rezepte.authorName} onChange={onChange} className="form-control" />

                    {isEditRezepteError && <div className='createErrorMess'>{isEditRezepteError.message}</div>}

                    <button className="btn delicious-btn mt-30 createBtnCenter" type="submit">Edit Recipe</button>
                </div>
            </form>
        </section>

    );
}