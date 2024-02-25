import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Header from '../Header/Header';
import {  FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';

import Swal from 'sweetalert2'
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  const {signIn} = useContext(AuthContext)
  const{googleLogin} = useContext(AuthContext)
  const navigate = useNavigate();
  const [registererror, setRegisterError] = useState('')
  const [success, setSuccess] = useState('')

    const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value; 

      console.log(email,password)
      // reset
      setRegisterError('');
      setSuccess('');

     
        
      
      signIn(email,password)
      .then(result =>{
        console.log(result.user)
        // navigate 
        navigate(location?.state ? location.state : '/')
        setSuccess(
         
        Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: 'Your Login Successfully',
        showConfirmButton: false,
       timer: 1500
     })
        )

      })
      .catch(error =>{
        console.error(error)
        setRegisterError(error.message)
      })


      
      
    }
    
     const handleGoogleLogin = () =>{
            
      googleLogin(GoogleAuthProvider)
      .then(res =>{
        console.log(res.user)
      })
      .catch(error =>{
        console.error(error, "The invalid message")
      })  
     
    }

   

    return (
      <div>
        <Header></Header>
        <div className="hero min-h-screen bg-purple-600">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      {/* <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        {/* <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" required />
        </div> */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
         
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
          <button className='my-4  items-center bg-slate-600 text-white justify-center w-full flex h-10' onClick={handleGoogleLogin} type='button'>Log In With<FaGoogle className='ml-4'></FaGoogle></button>
      </form>
      <p className='text-center text-sm'>Do not have an account. Please<Link to='/register'><span className='text-purple-800'>Register</span></Link> </p>
      {
        registererror && <p className='text-red-700'>{registererror}</p>
      }
      {
        success && <p className='text-green-500'>{success}</p>
      }
    
    </div>
  </div>
</div>
</div>
    );
};

export default Login;