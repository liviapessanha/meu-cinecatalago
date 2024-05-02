import { CatalogoActions, CatalogoReducer } from "@/reducers/catalogoReducer";
import { PostCatalogo } from "@/types/postCatalogo";
import { Dispatch, ReactNode, createContext, useContext, useReducer } from "react";

type CatalogoContextType = {
  catalogo: PostCatalogo[],
  dispatch: Dispatch<CatalogoActions>
}

export const CatalogoContext = createContext<CatalogoContextType | null>(null);

export const CatalogoProvider = ({children}: {children: ReactNode}) => {
  const [ catalogo, dispatch ] = useReducer(CatalogoReducer, [] );

  return (
    <CatalogoContext.Provider value={ { catalogo, dispatch } }>{children}</CatalogoContext.Provider>
  );
}

export const useCatalogo = () => useContext(CatalogoContext);