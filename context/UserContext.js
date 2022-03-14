import React from "react"

export const UserStoreContext = React.createContext(); //Global

const UserStoreProvider = ({children})=>{
    
    const [Token,setToken] = React.useState('nonToken');
    // const [Token,setToken] = React.useState({Token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywidXNlcm5hbWUiOiJ0ZXN0ZXIiLCJwYXNzd29yZCI6IiQyYiQxMiRZY0NaNHpIdTJkVXc4czZ0Um1QazhlclNaVHNGa0lKeEY3eWxyQWt1UUNXOEJxZ1llLkhlTyIsImltYWdlIjoxLCJpYXQiOjE2NDY5OTc0NjcsImV4cCI6MTY0NzA4Mzg2N30.labGF63EeQpcuYqyJjn-9aEMGTzujlMrMBvGuvzhtss'});

    const userStore = {
        Token : Token,
        updateToken : (Token)=> setToken(Token)
    }

    return(
        <UserStoreContext.Provider value = {userStore}>
            {children}
        </UserStoreContext.Provider>
    )
} 

export default UserStoreProvider;