import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import chefHat from './assets/chefHat.png';

export default function Header(){
    return(
        <div className="flex items-center justify-between bg-stone-200">
            <div className="flex items-center">
                <img className='h-20 w-20 m-2' src={chefHat} alt='kock mössa'/>
                <h1 className='font-extrabold font-serif text-3xl'>Mat-Malle</h1>
            </div>
            <div className='flex '>
                <MagnifyingGlassIcon className='w-10 h-10'/>
                <input className='rounded-lg border mr-5' type="search" />
            </div>
        </div>

    )
}