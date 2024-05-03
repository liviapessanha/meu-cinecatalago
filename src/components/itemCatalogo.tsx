"use client"
import { useCatalogo } from "@/contexts/catalogoContext";
import { SquarePenIcon, TrashIcon } from "lucide-react";

type Props = {
    showModalEdit: () => void;
}
export const ItemCatalogo = ({ showModalEdit }: Props) => {
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
                    <h1 className="text-sm md:text-md flex-1"><span className="font-bold text-base">Título: </span>{item.title}</h1>
                    <span className={`text-sm  opacity-80 rounded-md p-1
                    ${item.genero === 'Drama' && 'bg-blue-300 opacity-70'}  
                    ${item.genero === 'Comédia' && 'bg-blue-500 opacity-70'}
                    ${item.genero === 'Suspense' && 'bg-green-400 opacity-70'}
                    ${item.genero === 'Terror' && 'bg-gray-500 opacity-70'}
                    ${item.genero === 'Ação' && 'bg-green-500 opacity-70'}
                    ${item.genero === 'Ficção científica' && 'bg-pink-500 opacity-70'}
                    `}
                    >{item.genero}</span>
                    <span className={`text-sm  opacity-80 rounded-md p-1
                    ${item.tipo === 'Série' && 'bg-orange-600 opacity-70 px-2'}  
                    ${item.tipo === 'Filme' && 'bg-yellow-500 opacity-70 px-2'}
                    `}
                    >{item.tipo}</span>
                </div>
                <div className="text-sm md:text-base w-full break-words">
                    <span className=" text-base font-bold">Avaliação: </span>{item.avaliacao}
                </div>
                <div className="flex  gap-3 w-full mt-2 items-center justify-end">
                    <div className="flex gap-3">
                        <TrashIcon 
                        size={20} 
                        onClick={() => handleRemoveButton(item.id)} 
                        className="text-black text-sm  hover:opacity-90 cursor-pointer"
                        />
                        <SquarePenIcon
                            size={20}    
                            onClick={showModalEdit}
                            className="text-black text-sm  hover:opacity-90 cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        ))}
    </>
  );
}