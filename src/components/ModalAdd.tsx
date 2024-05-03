"use client"
import { useCatalogo } from "@/contexts/catalogoContext";
import { ErrorItem, getErrorFromZod } from "@/utils/getErrorFromZod";

import { useState } from "react";
import { z } from "zod";

type Props = {
    closeModal: () => void;
}
export const ModalAdd = ( { closeModal }: Props) => {
    const catalogoCtx = useCatalogo();

    const [ titleInput, setTitleInput ] = useState('');
    const [ generoInput, setGeneroInput ] = useState('');
    const [ tipoInput, setTipoInput ] = useState('');
    const [ avaliacaoInput, setAvaliacaoInput ] = useState('');
    const [ errors, setErrors ] = useState<ErrorItem[]>([])

    const addSchema = z.object({
        titleInput: z.string().min(1, 'Preencha o título'),
        generoInput: z.string().min(1, 'Preencha o gênero'),
        tipoInput: z.string().min(1, 'Preencha o tipo'),
        avaliacaoInput: z.string().max(300,'Números de caracteres atingidos') 
    });



    const handleAddAvaliacao = () => {
        setErrors([]);
        const data = addSchema.safeParse({ titleInput, generoInput, tipoInput, avaliacaoInput });
        console.log(data);
        if(!data.success) return setErrors(getErrorFromZod(data.error));

            catalogoCtx?.dispatch({
                type: 'add',
                payload: {
                    title: titleInput,
                    tipo: tipoInput,
                    avaliacao: avaliacaoInput,
                    genero: generoInput
                }
            })
            setTitleInput('');
            setTipoInput('');
            setGeneroInput('');
            setAvaliacaoInput('');  
            closeModal();
        }
  return (
        <div className="flex flex-col m-2 gap-2 ">
            <h1 className="text-md  text-center">Preencha as informações para adicionar sua avaliação ao catálogo:</h1>
            <div className="flex flex-col gap-1">
                <label className="text-md">Título</label>
                <input 
                type="text" 
                placeholder="Digite o nome do filme ou série..."
                className="p-2 text-sm outline-none border border-gray-300 rounded-md text-black "
                value={titleInput}
                onChange={e => setTitleInput(e.target.value)}
                />
                {errors.find(item => item.field === 'titleInput') && 
                    <div className="text-right text-sm text-red-900">
                        {errors.find(item => item.field === 'titleInput')?.message}
                    </div>
                }
            </div>
            <div className="flex flex-col gap-1">
            <label className="text-md">Gênero</label>
                <select 
                    value={generoInput} 
                    onChange={e => setGeneroInput(e.target.value)}
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
                {errors.find(item => item.field === 'generoInput') && 
                    <div className="py-1 text-left text-sm text-red-900 mb-2">
                        {errors.find(item => item.field === 'generoInput')?.message}
                    </div>
                }
            </div>
            <div className="flex flex-col gap-1">
            <label className="text-md">Tipo</label>
                <select 
                    value={tipoInput} 
                    onChange={e => setTipoInput(e.target.value)}
                    className="py-2 text-sm outline-none border border-gray-300 rounded-md text-black/50 "
                >
                    <option value="">Selecione o tipo</option>
                    <option  value="Filme" >Filme</option>
                    <option value="Série" >Série</option>
                </select>
                {errors.find(item => item.field === 'tipoInput') && 
                    <div className="py-1 text-left text-sm text-red-900 mb-2">
                        {errors.find(item => item.field === 'tipoInput')?.message}
                    </div>
                }
            </div>
            <div className="flex flex-col gap-1 mb-2">
                <label className="text-md">Avaliação</label>
                <textarea 
                    className="p-1 text-sm  outline-none border border-gray-300 rounded-md text-black"
                    placeholder="Digite a avaliação sobre o que foi assistido..."
                    value={avaliacaoInput}
                    onChange={e => setAvaliacaoInput(e.target.value)}
                >
                </textarea>
                {errors.find(item => item.field === 'avaliacaoInput') && 
                    <div className="text-right text-sm text-red-600">
                        {errors.find(item => item.field === 'avaliacaoInput')?.message}
                    </div>
                }
            </div>
            <button onClick={handleAddAvaliacao}  className="rounded-md text-md border border-red-400 bg-red-500 py-3 text-white cursor-pointer hover:opacity-70">Adicionar</button>
        </div>
  )
}