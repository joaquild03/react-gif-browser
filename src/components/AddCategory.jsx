import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategoria}) => {
    
    const [inputValue, setInputValue] = useState();

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        //setCategorias( categorias => [...categorias,inputValue]);
        onNewCategoria(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => onSubmit(event)} aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar Gifs" 
                value={inputValue}
                onChange={ onInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategoria: PropTypes.func.isRequired,
}