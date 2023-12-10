import { useContext, useState } from "react";
import useForm from "../../hooks/useForms";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";

const LoginFormKeys = {
    Email: 'email',
    Password: 'password'
}


export default function Login(){
    const {loginSubmitHandler} = useContext(AuthContext);
    const {values, onChange, onSubmit} = useForm(loginSubmitHandler,{
        [LoginFormKeys.Email]:'',
        [LoginFormKeys.Password]:'',
});

const [isError, setError] = useState(false);

    return(

        <section >

      

  <div className="container" style={{width:"20%"}}>
                <div className="row newsletter-form bg-img bg-overlay">
            <form onSubmit={onSubmit}   style={{margin:"0 auto"}}>
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

 
  {isError && <span>There is error!</span>}

  <button type="submit" className="btn delicious-btn mt-30">
    Submit
  </button>

  <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
</form>
</div>
            </div>
    </section>
    );
}