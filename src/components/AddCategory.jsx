import { useState } from "react"

export const AddCategory = (/*{setCategories}*/ {onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }/*event*/) => {
        setInputValue(target.value);
    }

    const onSubmit = ( event )=>{
        event.preventDefault();
        // En caso que sea menor a 1 no se va insertar nada. (No pasa a la siguiente instruccion)
        if ( inputValue.trim().length <= 1) return;
        // setCategories( categories => [ inputValue, ...categories])
        
        // Borramos el contenido de nuestra caja.
        setInputValue('');
        // Lo que hace aqui es emitirlo y enviarle el valor a la funcion
        onNewCategory( inputValue.trim() );
    }

    return (

        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}
