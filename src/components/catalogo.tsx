
import { Plus } from "lucide-react";
import { ItemCatalogo } from "@/components/itemCatalogo";
import { useState } from "react";
import { Modal } from "./modal";
import { useCatalogo } from "@/contexts/catalogoContext";
import { ModalAdd } from "./ModalAdd";
import { ModalScreens } from "@/types/ModalScreens";

export const Catalogo = () => {
  const catalogoCtx = useCatalogo();
  const [ modalScreen, setModalScreen ] = useState<ModalScreens>(null);
 

  return (
    <div className="mt-2 p-2">
        
            <div className="mb-7 flex items-center">
    
                <h1 className="text-black/90  text-lg flex-1">Avaliações: {catalogoCtx?.catalogo.length}</h1>
                <div className="cursor-pointer border-none">
                    <Plus 
                        className="bg-red-500 rounded-full h-7 w-7" 
                        onClick={() => setModalScreen('add')}
                    />
                </div>
           </div>
        
        <div className="text-black">
            {modalScreen &&
                <Modal closeModal={() => setModalScreen(null)}>
                    {modalScreen == 'add' && <ModalAdd closeModal={() => setModalScreen(null)} />}
                </Modal>
                
            }
            {!modalScreen &&
                <div className="border-t border-red-300">
                    <ItemCatalogo />
                </div>
                
            }
            
        </div>
    </div>
  );
}