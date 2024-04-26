import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Wakanda' ]);

    const onAddCategory = ( newCategory ) => {

        //validar que no esta incluida la categoría y si esta no la agrega
        if( categories.includes(newCategory) ) return;

        //inserta valores
        setCategories([ newCategory, ...categories ]);
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewValue={ event => onAddCategory(event) }
            />

            {/* Listado de Gif */}
            { 
                categories.map(category => (
                    <GifGrid key={ category } 
                                category={ category } />
                    
                    ))
            }
                {/* Gif Item */}
        </>
    )
}