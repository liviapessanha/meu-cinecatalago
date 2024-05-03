"use client"

import { ReactNode } from "react";

type Props = {
    closeModal: () => void;
    children: ReactNode;
}

export const Modal = ({ closeModal, children }: Props) => {
    
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0  flex flex-col  justify-center overflow-y-auto  text-white ">
        <div className="bg-red-500 rounded-md border border-red-400 m-2 md:max-w-xl md:mx-auto md:p-2 ">
            <div onClick={closeModal}  className="text-2xl rounded-full text-white hover:opacity-40 h-8 w-8 cursor-pointer  flex
            items-center justify-center md:text-3xl">X</div>
            
            <div>{children}</div>
        </div>
    </div>
  );
}