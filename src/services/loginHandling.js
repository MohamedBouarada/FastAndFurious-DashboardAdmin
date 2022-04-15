export const getTokenFromLocalStorage = () => {
    let token = localStorage.getItem("site-fast-admin-token");
    if(token && token.length>0) {
        return JSON.parse(token) ;
    }
    return "" ;
}