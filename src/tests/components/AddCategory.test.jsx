import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en <AddCategory/>', () => {

    test('debe de cambiar el valor de la caja de texto', () => {

        render(<AddCategory onNewCategory={() => { }} />);
        const input = screen.getByRole('textbox');

        // Ejecutamos un evento
        fireEvent.input(input, { target: { value: 'Saitama' } });
        expect(input.value).toBe('Saitama')
        // screen.debug();
    });

    test('debe de llamar onNewCategory su el input tiene un valor ', () => {

        const inputValue = 'Saitama';
        // Un Mock es una simulacion
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        // Le agregamos al componente un aria-label
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        // Para validar si se esta dando el submit podemos poner un console.log en nuestra funcion onSubmit
        fireEvent.submit(form);
        expect(input.value).toBe('');

        // Si nuestra funcion ha sido llamada
        expect(onNewCategory).toHaveBeenCalled();
        // Si nuestra funcion ha sido llamada 1 sola vez
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        // Ha sido llamada con nuestro valor
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

        // screen.debug();

    });

    test('no debe de llamar el onNewCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');
        fireEvent.submit(form);

        // espera que la funcion no hubiera sido llamada.
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
});