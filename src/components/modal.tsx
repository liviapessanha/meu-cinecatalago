"use client"

import { useCatalogo } from "@/contexts/catalogoContext";
import { useState } from "react";

type Props = {
    closeModal: () => void;
}

export const Modal = ({closeModal}: Props) => {
    const catalogoCtx = useCatalogo();

    const [ titleInput, setTitleInput ] = useState('');
    const [ generoInput, setGeneroInput ] = useState('');
    const [ tipoInput, setTipoInput ] = useState('');
    const [ avaliacaoInput, setAvaliacaoInput ] = useState('');

    const handleAdicionarAvaliacao = () => {
        if(titleInput === '' || generoInput === '' || avaliacaoInput === '') {
            alert('Preencha todos os campos!');
        } else {
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
    }
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0  flex flex-col  justify-center overflow-y-auto  text-white ">
        <div className="bg-red-500 rounded-md border border-red-400 m-2 md:max-w-xl md:mx-auto md:p-2">
            <div onClick={closeModal}  className="text-2xl rounded-full text-white hover:opacity-40 h-8 w-8 cursor-pointer  flex
            items-center justify-center md:text-3xl">X</div>
            <div className="flex flex-col gap-3 m-2">
                <h1 className="text-lg  text-center">Preencha as informações para adicionar sua avaliação ao catálogo:</h1>
                <input 
                    type="text" 
                    placeholder="Digite o nome do filme ou série..."
                    className=" p-3 outline-none border border-gray-300 rounded-md text-black "
                    value={titleInput}
                    onChange={e => setTitleInput(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Digite o gênero..."
                    className=" p-3 outline-none border border-gray-300 rounded-md text-black"
                    value={generoInput}
                    onChange={e => setGeneroInput(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Digite o tipo [ SERIE ou FILME ]..."
                    className=" p-3 outline-none border border-gray-300 rounded-md text-black "
                    value={tipoInput}
                    onChange={e => setTipoInput(e.target.value)}
                />
                <textarea 
                    className="p-3 outline-none border border-gray-300 rounded-md text-black"
                    placeholder="Digite sua avaliação sobre o que foi assistido..."
                    value={avaliacaoInput}
                    onChange={e => setAvaliacaoInput(e.target.value)}
                >
                </textarea>
                <button onClick={handleAdicionarAvaliacao}  className="rounded-md border border-red-400 bg-red-500 py-3 text-white cursor-pointer hover:opacity-70">Adicionar</button>
            </div>
        </div>
    </div>
  );
}