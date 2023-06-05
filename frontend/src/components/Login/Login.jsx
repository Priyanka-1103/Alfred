import React , { Component, useState } from 'react';
import './Login.css'
import LoginImg from '../../assets/img/services/paint.jpg'
import SignupImg from '../../assets/img/services/painthand.jpg'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        setLoginEmail(document.querySelector("#inEmail").value);
        setLoginPass(document.querySelector("#inPass").value);
        
        axios.post("http://localhost:5500/auth/login", {
            email: loginEmail,
            password: loginPass,
        })
          .then(result => {
            alert(result.data.message);
            navigate("/")
          })
          .catch(err => console.log(err.response.data))
    }



    const [signupName, setSignupName] = useState("")
    const [signupEmail, setSignupEmail] = useState("")
    const [signupPass, setSignupPass] = useState("")
    const [signupPass2, setSignupPass2] = useState("")

    const handleSubmitSign = (e) => {
        e.preventDefault();

        setSignupName(document.querySelector("#signupusername").value);
        setSignupEmail(document.querySelector("#signupemail").value);
        setSignupPass(document.querySelector("#signuppassword").value);
        setSignupPass2(document.querySelector("#signuppassword2").value);

        const userInfo = {
            name: signupName,
            email: signupEmail,
            password: signupPass,
            newPassword: signupPass2
        }
        console.log(userInfo);

        axios.post("http://localhost:5500/auth/signup", userInfo)
            .then((result) => {
                alert(result.data.message)
                toggleForm()
            })
            .catch(err => alert(err.response.data.mesaage))
    }

        
    const toggleForm = () => {
        var container = document.querySelector('.containerForm');
        container.classList.toggle('active')
    }


        

        return(    
            <div id='login'>
            <div className="containerForm" id="containerForm">
                <div className="user loginBx">
                  <div className="imgBx">
                       <img src={LoginImg} alt=""/>
                  </div>
                  <div className="formBx">
                       <form id='inForm' onSubmit={handleSubmit}>
                           <h2>Log In</h2>
                           <div className="form-controls">
                               <input type="email"  placeholder="Email" id='inEmail' required/>
                              <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                           </div>
                           <div className="form-controls">
                              <input type="password" name="" placeholder="Password" id='inPass' required/>
                               <i className="fas fa-check-circle"></i>
                              <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                               <br/>
                           </div>
                           <input type="submit" name="" value="LogIn" id='logInBtn' />
                           <p className="signUp">Don't have an account ? <a href="#"  onClick={toggleForm}>Sign Up.</a></p>
                       </form>
                   </div>
               </div>

       {/* <!----------------------------- Sign Up form------------------------------> */}
               <div className="user signupBx">
                   <div className="formBx">
                       <form id='form' onSubmit={handleSubmitSign}>
                           <h2>Create an Account</h2>
          
                           <div className="form-controls">
                               <input type="text" name="" placeholder="Username" id='signupusername' required/>
                               <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                           </div>
                          
                           <div className="form-controls">
                               <input type="email" name="" placeholder="Email Address" id='signupemail' required/>
                               <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                           </div>
          
                           <div className="form-controls">
                                <input type="password" name="" placeholder="Create Password" id='signuppassword' required/>
                                <i className="fas fa-check-circle"></i>
                                <i className="fas fa-exclamation-circle"></i><p>  </p><p></p><p></p>
                                <small>Error message</small>
                           </div>
          
                          <div className="form-controls">
                               <input type="password" name="" placeholder="Confirm Password" id='signuppassword2' required/>
                               <i className="fas fa-check-circle"></i>
                               <i className="fas fa-exclamation-circle"></i>
                               <small>Error message</small>
                          </div>
          
                           <input type="submit" name="" value="Sign Up" id="signUpBtn"/>
                           <p className="signUp">Already have an account ? <a href='#'  onClick={toggleForm}>Log In.</a></p>
                       </form>
                   </div>
                   <div className="imgBx">
                     <img src={SignupImg} alt=""/>
                   </div>
               </div>
           </div>
           </div>
        )
}


export default Login;