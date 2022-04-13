import Login from "../../Components/login/Login"



const LoginScreen=({isLogged,setIsLogged})=>{
    return<>
    <Login isLogged={isLogged} setIsLogged={setIsLogged} />
    </>
}
export default LoginScreen;