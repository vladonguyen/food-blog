import {useNavigate, useParams} from 'react-router-dom'
import *  as rezepteService from "../../services/rezepteService";
import { useEffect, useState } from 'react';

export default function RezepteEdit(){
    const navigate = useNavigate();
    const {rezepteId} = useParams();
    const [rezepte, setRezepte] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        imageUrlHome: '',
        summary: '',
        
    });
    useEffect(()=> {
        rezepteService.getOne(rezepteId)
        .then(result => {
            setRezepte(result);
        })
    }, [rezepteId])
    const editRezepteSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));
console.log(values)
        try {
            await rezepteService.edit(rezepteId, values);
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

    return(
        <section id="create-page" className="auth">  
        <form id="create" onSubmit={editRezepteSubmitHandler}>
            <div className="container">

                <h1>Edit Rezepte</h1>



<h1>Create Post</h1>
<label htmlFor="title">Recipe title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter recipe title..." value={rezepte.title} onChange={onChange} />

                    <label htmlFor="prepTime">Prep:</label>
                    <input type="text" id="prep-time" name="prepTime" placeholder="Prep time..." value={rezepte.prepTime} onChange={onChange}/>

                    <label htmlFor="cookTime">Cooking time:</label>
                    <input type="text" id="cook-time" name="cookTime" placeholder="Cooking time..." value={rezepte.cookTime} onChange={onChange}/>

                    <label htmlFor="servings">Servings</label>
                    <input type="text" id="servings" name="servings" placeholder="For how many people..." value={rezepte.servings} onChange={onChange}/>

                    <label htmlFor="ingredients">Ingredients</label>
                    <input type="text" id="ingredients" name="ingredients" placeholder="List ingredients separated by comma..." value={rezepte.ingredients} onChange={onChange}/>


                    <label htmlFor="imageUrl">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Give photo url..." value={rezepte.imageUrl} onChange={onChange}/>

                    <label htmlFor="imageUrlHome">Image:</label>
                    <input type="text" id="imageUrlHome" name="imageUrlHome" placeholder="Give home photo url..." value={rezepte.imageUrlHome} onChange={onChange}/>


                    <label htmlFor="recipeContent">Recipe content:</label>
                    <textarea name="recipeContent" id="recipeContent" value={rezepte.recipeContent} onChange={onChange}></textarea>

                  

                    <label htmlFor="date" >Publish date:</label>

                    <input type="date" id="date" name="date" value={rezepte.date} onChange={onChange}/>

                    <label htmlFor="authorName">Author name:</label>
                    <input type="text" id="author-name" name="authorName" placeholder="Enter author" value={rezepte.authorName} onChange={onChange}/>

                <input className="btn submit" type="submit" value="Edit Rezepte"  />
            </div>
        </form>
    </section>

    );
}