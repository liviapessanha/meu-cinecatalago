"use client"
import { CatalogoProvider } from "@/contexts/catalogoContext";
import { Header } from "@/components/header";
import { Catalogo } from "@/components/catalogo";
import { Footer } from "@/components/Footer";

export const CineCatalogo = () => {
  return (
    <CatalogoProvider>
        <div className="w-screen flex flex-col items-center justify-center max-w-xl sm:max-w-full md:mx-auto md:max-w-5xl">
            <div className="w-full">
                <Header />
            </div>
            <div className="w-full">
                <Catalogo />
            </div>
                <Footer />
        </div>
    </CatalogoProvider>
   
  );
}