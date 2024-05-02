
import { Plus } from "lucide-react";
import { ItemCatalogo } from "@/components/itemCatalogo";
import { useState } from "react";
import { Modal } from "./modal";
import { useCatalogo } from "@/contexts/catalogoContext";

export const Catalogo = () => {
  const catalogoCtx = useCatalogo();
  const [ showModal, setShowModal ] = useState(false);

  const handleAddButton = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {

    setShowModal(false);
  }


  return (
    <div className="mt-2 p-2">
        
            <div className="mb-7 flex items-center">
    
                <h1 className="text-black/90  text-lg flex-1">Avaliações: {catalogoCtx?.catalogo.length}</h1>
                <div className="cursor-pointer border-none">
                    <Plus 
                        className="bg-red-500 rounded-full h-7 w-7" 
                        onClick={handleAddButton}
                    />
                </div>
           </div>
        
        
        <div className="text-black">
            {showModal &&
                <Modal closeModal={handleCloseModal}/>
            }
            {!showModal &&
                <div className="border-t border-red-300">
                    <ItemCatalogo />
                </div>
                
            }
            
        </div>
    </div>
  );
}