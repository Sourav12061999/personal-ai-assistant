import {  ReactNode, createContext, useState } from 'react'


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

  return (
      <AppContext.Provider value={{ state: AppState, setState: setAppState }}>
          {children}
    </AppContext.Provider>
  )
}

export default Context