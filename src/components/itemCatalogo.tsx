"use client"
import { useCatalogo } from "@/contexts/catalogoContext";
import { SquarePenIcon, TrashIcon } from "lucide-react";

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
                    <h1 className="text-md "><span className="font-bold text-md">Título: </span>{item.title}</h1>
                    <span className={`text-sm  opacity-80 rounded-md p-1
                    ${item.genero === 'drama' && 'bg-blue-300'}  
                    ${item.genero === 'comedia' && 'bg-yellow-300'}
                    ${item.genero === 'suspense' && 'bg-green-300'}
                    ${item.genero === 'terror' && 'bg-gray-500'}
                    ${item.genero === 'acao' && 'bg-orange-400'}
                    ${item.genero === 'ficcao' && 'bg-pink-500'}
                    `}
                    >{item.genero}</span>
                </div>
                <div className="text-md w-full break-words">
                    <div className="font-bold">Avaliação: </div>{item.avaliacao}
                </div>
                <div className="flex gap-3 w-20 mt-2">
                    <TrashIcon 
                    size={20} 
                    onClick={() => handleRemoveButton(item.id)} 
                    className="text-black text-sm  hover:opacity-90 cursor-pointer"
                    />
                    <SquarePenIcon
                        size={20}    
                        
                        className="text-black text-sm  hover:opacity-90 cursor-pointer"
                    />
                </div>
            </div>
        ))}
    </>
  );
}