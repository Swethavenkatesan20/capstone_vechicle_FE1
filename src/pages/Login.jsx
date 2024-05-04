import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userServices from '../services/userServices'



const Login = () => {

  const navigate=useNavigate()

  const handleLogin=(e)=>{
  e.preventDefault();
  const email = e.target[0].value;
  const password = e.target[1].value;

  //console.log(email,password);
    //send details to api
    userServices.login(email,password)
    .then(response =>{
      //clearing the form
      e.target.reset();
      alert('login successful')

      // if the login is successful, redirect to the dashboard page
      setTimeout(() => {
        navigate('/dashboard');
    }, 500);
    })
    .catch(error => {
      // if there is an error, log the error to the console
      alert('Login failed');
  });


}

  return (
    <div>
        <form onSubmit={handleLogin} className='container border border-2 border-light rounded p-3 m-3'>
            
            <div className='mb-3'>
                <input type="email" placeholder='Email'/>
            </div>
            <div className='mb-3'>
                <input type="password" placeholder="Password" />
            </div>
           
            <button type='submit'>Login</button>
            <p>Don't have an account ? <Link to='/register'>Register</Link> </p>
            
        </form>
    </div>
  )
}

export default Login