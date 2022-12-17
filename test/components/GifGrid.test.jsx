import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {

    const categoria = 'One Punch'

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            imagenes: [],
            isLoading: true
        })

        render( <GifGrid categoria={categoria} />);
        expect(screen.getAllByText('Cargando...'));
        expect(screen.getAllByText(categoria));
    });

    test('debe de mostrar items cuando se cargan las imagenes', () => {

        const gifs = [
            {
                id:'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id:'123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            imagenes: gifs,
            isLoading: false
        })

        render( <GifGrid categoria={categoria} />);
        expect( screen.getAllByRole('img').length).toBe(2);

    });
})