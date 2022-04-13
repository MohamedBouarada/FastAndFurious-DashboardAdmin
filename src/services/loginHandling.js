export const getTokenFromLocalStorage = () => {
    let token = localStorage.getItem("site-fast-admin-token");
    if(token) {
        return JSON.parse(token) ;
    }
    return "" ;
}