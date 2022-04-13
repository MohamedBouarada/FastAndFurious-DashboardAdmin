import styles from './index.module.css';

import HomeScreen from './Screens/dashboard/HomeScreen';
import LoginScreen from './Screens/loginInterface/LoginScreen';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { useState } from 'react';


function App() {

  const[isLogged,setIsLogged]=useState(false);
  return <div className={styles.container}>
    
    <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<LoginScreen isLogged={isLogged} setIsLogged={setIsLogged} />}/>
                    <Route path='/home' element={<HomeScreen isLogged={isLogged} />}/>
                    
                </Routes>
                </BrowserRouter>
    </div>;
}

export default App;
