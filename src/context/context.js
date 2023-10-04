import { createContext, useCallback, useMemo, useState } from "react";

export const Context = createContext(null);
export const ContextProvider = ({children}) =>{
    const [userData, setUserData] = useState({id : "default"});
    return (
        <Context.Provider value={{userData, setUserData}}>
            {children}
        </Context.Provider>
    )
}