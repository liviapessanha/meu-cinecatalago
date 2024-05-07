import { useCatalogo } from "@/contexts/catalogoContext";
import { PostCatalogo } from "@/types/postCatalogo";
import { ErrorItem, getErrorFromZod } from "@/utils/getErrorFromZod";
import { useState } from "react";
import { z } from "zod";

type Props = {
  closeModal: () => void;
  item: PostCatalogo | undefined;
}
export const ModalEdit = ({ closeModal, item }: Props) => {
    const catalogoCtx = useCatalogo();

    const [ newTitleInput, setNewTitleInput ] = useState(item?.title || '');
    const [ newGeneroInput, setNewGeneroInput ] = useState(item?.genero || '');
    const [ newTipoInput, setNewTipoInput ] = useState(item?.tipo || '');
    const [ newAvaliacaoInput, setNewAvaliacaoInput ] = useState(item?.avaliacao || '');
    const [ errors, setErrors ] = useState<ErrorItem[]>([]);

    const editSchema = z.object({
        newTitleInput: z.string().min(1, 'Preencha o título'),
        newGeneroInput: z.string().min(1, 'Preencha o gênero'),
        newTipoInput: z.string().min(1, 'Preencha o tipo'),
        newAvaliacaoInput: z.string().max(300,'Números de caracteres atingidos').min(1, 'Preencha o campo')
    });

    const handleSalveButton = () => {
        setErrors([]);
        const data = editSchema.safeParse({ newTitleInput, newGeneroInput, newTipoInput, newAvaliacaoInput });
        if(!data.success) return setErrors(getErrorFromZod(data.error));

        if(item) {
            catalogoCtx?.dispatch({
                type: 'edit',
                payload: {
                    id: item.id,
                    newTitle: newTitleInput,
                    newTipo: newTipoInput,
                    newAvaliacao: newAvaliacaoInput,
                    newGenero: newGeneroInput
                }
            });
        closeModal();
        }     
    }

  return (
    <div className="flex flex-col m-2 gap-2">
            <div className="flex flex-col gap-1">
                <label className="text-md">Título</label>
                <input 
                type="text" 
                placeholder="Digite o nome do filme ou série..."
                className="p-2 text-sm outline-none border border-gray-300 rounded-md text-black "
                value={newTitleInput}
                onChange={e => setNewTitleInput(e.target.value)}
                />
                {errors.find(item => item.field === 'newTitleInput') && 
                    <div className="text-left text-sm text-red-900">
                        {errors.find(item => item.field === 'newTitleInput')?.message}
                    </div>
                }
            </div>
            <div className="flex flex-col gap-1">
            <label className="text-md">Gênero</label>
                <select 
                    value={newGeneroInput} 
                    onChange={e => setNewGeneroInput(e.target.value)}
                    className="py-2 outline-none text-sm border border-gray-300 rounded-md text-black/50"
                >
                    <option value="">Selecione o gênero</option>
                    <option  value="Comédia">Comédia</option>
                    <option value="Suspense">Suspense</option>
                    <option value="Terror">Terror</option>
                    <option value="Drama">Drama</option>
                    <option value="Ação">Ação</option>
                    <option value="Ficção científica">Ficcção científica</option>  
                </select>
                {errors.find(item => item.field === 'newGeneroInput') && 
                    <div className="py-1 text-left text-sm text-red-900 mb-2">
                        {errors.find(item => item.field === 'newGeneroInput')?.message}
                    </div>
                }
            </div>
            <div className="flex flex-col gap-1">
            <label className="text-md">Tipo</label>
                <select 
                    value={newTipoInput} 
                    onChange={e => setNewTipoInput(e.target.value)}
                    className="py-2 text-sm outline-none border border-gray-300 rounded-md text-black/50 "
                >
                    <option value="">Selecione o tipo</option>
                    <option  value="Filme" >Filme</option>
                    <option value="Série" >Série</option>
                </select>
                {errors.find(item => item.field === 'newTipoInput') && 
                    <div className="py-1 text-left text-sm text-red-900 mb-2">
                        {errors.find(item => item.field === 'newTipoInput')?.message}
                    </div>
                }
            </div>
            <div className="flex flex-col gap-1 mb-2">
                <label className="text-md">Avaliação</label>
                <textarea
                    rows={6}
                    cols={60}
                    className="p-1 text-sm  outline-none border border-gray-300 rounded-md text-black"
                    placeholder="Digite a avaliação sobre o que foi assistido..."
                    value={newAvaliacaoInput}
                    onChange={e => setNewAvaliacaoInput(e.target.value)}
                >
                </textarea>
                {errors.find(item => item.field === 'newAvaliacaoInput') && 
                    <div className="text-left text-sm text-red-600">
                        {errors.find(item => item.field === 'newAvaliacaoInput')?.message}
                    </div>
                }
            </div>
            <div className="flex gap-4 ">
                <button onClick={closeModal} className="flex-1 rounded-md text-md border border-red-400 bg-red-500 py-3 text-white cursor-pointer hover:opacity-70">Cancelar</button>
                <button onClick={handleSalveButton}  className="flex-1 rounded-md text-md border border-red-400 bg-red-500 py-3 text-white cursor-pointer hover:opacity-70">Salvar</button>
            </div>
        </div>
  );
}