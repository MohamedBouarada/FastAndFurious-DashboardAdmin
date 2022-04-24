import styles from './index.module.css';

import HomeScreen from './Screens/dashboard/HomeScreen';
import LoginScreen from './Screens/loginInterface/LoginScreen';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState, useEffect } from 'react';
import { getTokenFromLocalStorage } from './services/loginHandling';


function App() {

  useEffect(() => {
    const connectToken = getTokenFromLocalStorage();
    if (connectToken){
      setIsLogged(true);
    }
  },[])
  const[isLogged,setIsLogged]=useState(false);
  const [token,setToken] = useState(getTokenFromLocalStorage())
  useEffect(()=>{
      localStorage.setItem("site-fast-admin-token" ,JSON.stringify(token) )
      if(token.length>0) {
          setIsLogged(true)
      } else {
          setIsLogged(false)
      }
  }, [token])

  return <div className={styles.container}>
    
    <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LoginScreen isLogged={isLogged} setIsLogged={setIsLogged} />}/>
                    <Route path='/home' element={<HomeScreen isLogged={isLogged} setIsLogged={setIsLogged} />}/>
                    
                </Routes>
                </BrowserRouter>
    </div>;
}

export default App;
