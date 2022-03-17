import styles from './index.module.css';
import Login from './Components/login/Login';
import { Teams } from './Components/teams/Teams';
import HomeScreen from './Screens/dashboard/HomeScreen';
import LoginScreen from './Screens/loginInterface/LoginScreen';

function App() {
  return <div className={styles.container}>
    <LoginScreen />
    </div>;
}

export default App;
