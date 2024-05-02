import { PostCatalogo } from "@/types/postCatalogo"

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


export type CatalogoActions = RemoveAction | AddAction;

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
    }
}