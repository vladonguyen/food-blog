import '../login/login.css'

import { useContext } from "react";
import useForm from "../../hooks/useForm";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
}



export default function Login() {
  const { loginSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  });

  const { isLoginError } = useContext(AuthContext);



  return (

    <section >
      <div className="loginForm white">
        <div className="row newsletter-form bg-img bg-overlay">
          <form onSubmit={onSubmit} className='loginCenter'>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                name={[LoginFormKeys.Email]}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={values[LoginFormKeys.Email]}
                onChange={onChange}
              />

            </div>
            <div className="form-group">
              <label htmlFor="login-pass">Password</label>
              <input
                type="password"
                className="form-control"
                name={LoginFormKeys.Password}
                id="exampleInputPassword1"
                placeholder="Password"
                value={values[LoginFormKeys.Password]}
                onChange={onChange}
              />
            </div>

            {isLoginError && <span className='loginErrorMess'>{isLoginError.message}</span>}

            <button type="submit" className="btn delicious-btn mt-30 btnCenter">
              Submit
            </button>

            <p className="field">
              <span className="needProfile">If you don't have profile click <Link to="/register" className="needProfileLink">here</Link></span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}