import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; //evita los enter falsos
        //setCategories(categories => [inputValue, ...categories]); //llenado de lista
        onNewCategory(inputValue.trim());
        setInputValue(''); //limpia despues del enter
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
        <input 
            type="text" 
            placeholder= 'Buscar Gifs'
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
