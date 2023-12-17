import { useContext } from "react";
import AuthContext from "../../context/authContext";
import useForm from "../../hooks/useForms";
import { Link } from "react-router-dom";

const RegisterFormKeys = {
    Email: 'email',
    Password: 'password',
    Username: 'username',
    ConfirmPassword: 'confirm-password',
}

export default function Register() {
    const { registerSubmitHandler } = useContext(AuthContext);
    const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',
    });

    const {isRegError} = useContext(AuthContext);

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="maria@email.com" 
                    onChange={onChange} 
                    values={values[RegisterFormKeys.Email]}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input
                        type="password"
                        name="password"
                        id="register-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.Password]} />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password"
                        name="confirm-password"
                        id="confirm-password"
                        onChange={onChange}
                        values={values[RegisterFormKeys.ConfirmPassword]}
                    />
                    
  {isRegError && <span>{isRegError}</span>}

                    <input
                        className="btn 
                    submit"
                        type="submit"
                        value="Register"
                        onChange={onChange}
                    />

                    <p className="field">
                        <span>If you already have profile click <Link to="login">here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}