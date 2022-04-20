import Login from "../../Components/login/Login"



const LoginScreen=({isLogged,setIsLogged , setToken})=>{
    return<>
    <Login isLogged={isLogged} setIsLogged={setIsLogged} setToken={setToken} />
    </>
}
export default LoginScreen;