"use client"
import { useCatalogo } from "@/contexts/catalogoContext";

export const ItemCatalogo = () => {
  const catalogoCtx = useCatalogo();

  const handleRemoveButton = (id: number) => {
    catalogoCtx?.dispatch({
        type:'remove',
        payload: {id}
    })
  }
  return (
    <>
        {catalogoCtx?.catalogo.map(item => (
            <div key={item.id} className="flex flex-col gap-2  border-b p-2 border-red-300 "> 
                <div className="flex items-center gap-2 ">
                    <h1 className="text-lg "><span className="font-bold">Título: </span>{item.title}</h1>
                    <span className="text-sm  opacity-80 bg-red-200 rounded-md p-1">{item.genero}</span>
                </div>
                <div className="text-md overflow-hidden">
                    <span className="font-bold">Avaliação: </span>{item.avaliacao}
                </div>
                <div onClick={() => handleRemoveButton(item.id)} className="rounded-md text-white bg-red-500 w-20 text-center text-sm py-1 hover:opacity-90 cursor-pointer">Remover</div>
            </div>
        ))}
    </>
  );
}