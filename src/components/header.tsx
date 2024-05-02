import { Search, User } from 'lucide-react';
export const Header = () => {
  return (
    <header>
        <div className="flex px-2 py-2 bg-red-500 md:items-center">
            <div className="flex flex-1 items-center gap-2">
                <div className="bg-white/80 rounded-full p-1">
                    <User className='cursor-pointer'/>
                </div>
                <div className='text-xl font-bold '>Meu cineCatálogo</div>
            </div>
        
            <div className="px-2 cursor-pointer ">
                <Search className=''/>
            </div>
         </div>
    </header>
  );
}