import { fireEvent, render, screen} from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', () => { 
    test('debe de cambiar el valor de la caja de texto', () => {
        render(<AddCategory onNewCategoria={() => {} }/>);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
    })

    test('debe de llamar onNewCategoria si el input tiene un valor', () => {
        const inputValue = 'Saitama';
        const onNewCategoria = jest.fn();

        render( <AddCategory onNewCategoria={onNewCategoria} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategoria).toHaveBeenCalled();
        expect(onNewCategoria).toHaveBeenCalledTimes(1);
        expect(onNewCategoria).toHaveBeenCalledWith(inputValue)
    }) 

    test('no debe de llamar onNewCategoria si el input esta vacio', () => {
        const onNewCategoria = jest.fn();

        render( <AddCategory onNewCategoria={onNewCategoria} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        
        expect(onNewCategoria).not.toHaveBeenCalled;

    })
})