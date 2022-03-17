import React from "react";
import styles from './login.module.css';
import logo from '../logos/logo.png';
class Login extends React.Component{

    render(){

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
        <form>
       <div className="container mt-4">
          <label >
            <span className={styles.labelText}>Email</span>
            <input type="text" name="nomEquipe" required="required"/>
          </label>
          <label >
            <span className={styles.labelText}>Password</span>
            <input type="password" name="club" required="required" />
          </label>
          
        


          <div className={styles.textCenter}>
            <button className={styles.submit} name="register">Sign Me Up</button>
          </div>
          </div>
        </form>
      </div>
      
            </>
        )
    }
}

export default Login;
