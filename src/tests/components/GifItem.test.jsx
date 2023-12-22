import { render, screen } from "@testing-library/react";
import { GifItem } from "../../components/GifItem";

describe('Pruebas en <GifItem/>', () => {

    const title = 'Saitama';
    const url = 'https://media4.giphy.com/media/DBv3fLQGTBmJW/giphy.gif?cid=56ae463f4pe40f6st6j85hphqoqfmnb5bpq4xylrzla48ct7&ep=v1_gifs_search&rid=giphy.gif&ct=g';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el URL y el ALT indicado ', () => {
        render(<GifItem title={title} url={url} />);
        // expect( screen.getByRole('img').alt ).toBe( title );

        // Mucho mejor destructuracion.
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe de mostar el titulo del componente', () => {
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title ) ).toBeTruthy();
    })
})