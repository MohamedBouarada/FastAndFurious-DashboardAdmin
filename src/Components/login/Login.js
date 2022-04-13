import React, { useState,useEffect } from "react";
import styles from './login.module.css';
import logo from '../logos/logo.png';
import axios from "axios"; 
import  { Navigate } from 'react-router-dom'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
const Login =({isLogged,setIsLogged})=>{

      const [alert ,setAlert]=useState("");
      const[email,setEmail]=useState("");
      const [password,setPassword]=useState("");
      

      const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
          const response= await axios({
            method: "post",
            url: "http://localhost:5000/admin/login",
            data:{
              email,
              password,
            }
          })
          console.log(response.data);
          setIsLogged(true);
          localStorage.setItem("site-fast-admin-token",response.data);
        } catch (error) {
          console.log(error.response.data);
          setAlert(error.response.data);
        }
      }
      if (isLogged) {
        //Affichage de la redirection
        return <Navigate to='/home'/>;}
        else
            return(
            <>
            
            <div className={styles.cont} id="inscription">
        <header>
          <h1>
            <a href="#">
              <img src={logo} alt="Authentic Collection" />
            </a>
          </h1>
        </header>
        <h1 className={styles.textCenter}>Sign In</h1>
        <form onSubmit={handleSubmit}>
       <div className="container mt-4">
          <label >
            <span className={styles.labelText}>Email</span>
            <input type="text" name="email" required="required" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label >
            <span className={styles.labelText}>Password</span>
            <input type="password" name="club" required="required" value={password} onChange={(e)=>setPassword(e.target.value)} />
          </label>
          
        

          {alert.length>0 &&<div className={styles.alert}>
                {alert}
                <button onClick={()=>setAlert("")} >
                  exit
                </button>
            </div>}
          <div className={styles.textCenter}>
            <button className={styles.submit} name="register">Sign Me Up</button>
          </div>
          </div>
        </form>
      </div>
              
            </>
        )
    }


export default Login;
