import React from "react"
import jwt_decode from "jwt-decode";

export const UserStoreContext = React.createContext(); //Global

const UserStoreProvider = ({children})=>{
    
    const [Token,setToken] = React.useState('nonToken');
    const [Picture,setPicture] = React.useState('nonPicture');

    const userStore = {
        Token : Token,
        Picture: Picture,
        updateToken : (Token)=> setToken(Token),
        updatePicture:(Picture)=> setPicture(Picture)
        
    }
    // const deToken = jwt_decode(userStore.Token);
    // setPicture = deToken.image;
    
    return(
        <UserStoreContext.Provider value = {userStore}>
            {children}
        </UserStoreContext.Provider>
    )
} 

export default UserStoreProvider;