import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    //event.target.value
    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }

    const onSubmit = (evento) => {
        evento.preventDefault();

        if (inputValue.trim().length <= 1) {
            return;
        }

        /*
        hacerlo pasando el state desde el padre
        const { setCategories } = props;
        setCategories((categories) => [...categories, inputValue])*/

        onNewCategory(inputValue.trim());
        setInputValue('');

    }
    return (

        <form onSubmit={(event) => { onSubmit(event) }}>
            <input
                type="text"
                placeholder="Search gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>

    )
}
