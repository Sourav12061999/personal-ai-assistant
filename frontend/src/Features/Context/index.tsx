import {  ReactNode, createContext, useState, useEffect } from 'react'
import { AuthAPIs } from '../../APIs';


interface ContextType {
    state: AppStateType;
    setState: React.Dispatch<React.SetStateAction<AppStateType>>
}

interface AppStateType {
    isSigning: boolean,
    token?: string;
}
export const AppContext = createContext<ContextType | null>(null);

interface PropTypes {
    children: ReactNode
}
function Context({ children }: PropTypes) {
    const [AppState, setAppState] = useState<AppStateType>({
        isSigning: false,
    })

    useEffect(() => {
        const token = localStorage.getItem("authorization");
        if (!token) return;
        signinHandler(token);
        

    }, []);
    const signinHandler = async (token: string) => {
        try {
            const response = await AuthAPIs.TokenVerification(token);
            await response.json();
            if (response.status !== 200) return;
            setAppState({ ...AppState, token, isSigning: true})
        } catch (error) {
            console.log("User Verification Error:- ",error);
            
        }
        
    }
    

  return (
      <AppContext.Provider value={{ state: AppState, setState: setAppState }}>
          {children}
    </AppContext.Provider>
  )
}

export default Context