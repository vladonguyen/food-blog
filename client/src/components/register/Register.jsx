import '../register/register.css';

import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    Username: 'username',
    ConfirmPassword: 'confirmPassword',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    console.log('pass registerSubmitHandler')
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    const {isRegError} = useContext(AuthContext);

    return (<>
        <section className="regForm">
            <div className='row newsletter-form bg-img bg-overlay '>
            <form id="register" onSubmit={onSubmit} className='regCenter white' >
                <div className="container ">
                    <div className="brand-logo"></div>
                    {/* <h1>Register</h1> */}

                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="maria@email.com" 
                    className="form-control"
                    onChange={onChange} 
                    values={values[RegisterFormKeys.Email]}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        className="form-control "
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]} 
                        placeholder="Type password" />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control"
                        onChange={onChange}
                        placeholder="Retype password"
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                    
  {isRegError && <span className='regErrorMess'>{isRegError}</span>}

                    <button
                        className="btn delicious-btn mt-30 btnCenter"
                        type="submit"
                        value="Register"
                        onChange={onChange}>
                            Register
                        </button>

                    <p className="field">
                        <span className='haveProfile'>If you already have profile click <Link to="/login" className='haveProfileLink'>here</Link></span>
                    </p>
                </div>
            </form>
            </div>
        </section>
        </>
    );
    
}