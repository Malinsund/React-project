import { ChangeEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { Recipie, mockedRecipies } from './Recipies';
import chefHat from './assets/chefHat.png';

export default function Header(){
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Recipie[]>([]);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        setSearchTerm(term);
        const results = mockedRecipies.filter(recipie =>
            recipie.title.toLowerCase().includes(term.toLowerCase())
        );
        setSearchResults(results);
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setSearchResults([]);
    };
    
    return(
        <div className="flex items-center justify-between bg-stone-200">
            <div className="flex items-center">
                <img className='h-20 w-20 m-2' src={chefHat} alt='kock mössa'/>
                <h1 className='font-extrabold font-sans text-3xl'>Mat-Malle</h1>
            </div>
            <div className='relative'>
                
                <input
                    className='rounded-lg border p-2 mr-5'
                    type="search"
                    placeholder="Sök recept..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                {searchResults.length > 0 && (
                    <div className="absolute bg-white shadow-md rounded-lg mt-1 p-2 w-full">
                        {searchResults.map(recipie => (
                            <Link key={recipie.id} to={`/recipies/${recipie.id}`} onClick={handleClearSearch}>
                           <p>{recipie.title}</p>
                       </Link>
                        ))}
                    </div>
                )}
            </div>
            
        </div>

    )
}