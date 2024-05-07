import { PostCatalogo } from "@/types/postCatalogo"
import { arch } from "os"

type RemoveAction = {
  type: 'remove',
  payload: {id: number}
}
type AddAction = {
  type: 'add',
  payload: {
    title: string,
    tipo: string,
    avaliacao: string,
    genero: string
  }
}
type EditAction = {
  type: 'edit',
  payload: {
    id: number,
    newTitle: string,
    newTipo: string,
    newAvaliacao: string,
    newGenero: string
  }
}


export type CatalogoActions = RemoveAction | AddAction | EditAction;

export const CatalogoReducer = (catalogo: PostCatalogo[], actions: CatalogoActions) => {
    switch(actions.type) {
      case 'add':
        return [...catalogo, {
          id: catalogo.length,
          title: actions.payload.title,
          tipo: actions.payload.tipo,
          avaliacao: actions.payload.avaliacao,
          genero: actions.payload.genero
        }];
      case 'remove':
        return catalogo.filter(item => item.id !== actions.payload.id);
    case 'edit':
        return catalogo.map(item => {
            if(item.id === actions.payload.id) {
                item.title = actions.payload.newTitle,
                item.tipo = actions.payload.newTipo,
                item.avaliacao = actions.payload.newAvaliacao,
                item.genero = actions.payload.newGenero
            } 
            return item;
        }); 
    default:
        return catalogo;
    }
}