import { useState } from 'react';

export const AddCategory = ({ onNewValue }) => {


    const [ inputValue, setInputValue ] = useState('');

    //deja escribir en el input
    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();

        //validación 
        if(inputValue.trim().length <= 1) return;

        //Llamar setCategories
        // setCategories(categories => [inputValue, ...categories ])
        
        //Limpiar el input
        setInputValue('');

        onNewValue( inputValue.trim() );

    }

    return(

        <form onSubmit={ onSubmit }>
            <input type="text" 
                   placeholder="Buscar gifs"
                   value={ inputValue }
                   onChange={ onInputChange }/>
        </form>
    )
}