import {render, screen} from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas en <GifItem />', () => {
    const title = 'Saitama';
    const url = "https://one-punch.com/saitama.jpg";

    test('debe hacer un match con el snapshot', () => {
        const {container} = render( <GifItem title={title} url={url} /> );
        expect (container).toMatchSnapshot();   
    });

    test('Debe de mostrar la imagen con el url y el alt indicado', () => {
        render(<GifItem title={title} url={url} />);
        
        const {src, alt} = screen.getByRole('img');
        
        expect(src).toBe(url);
        expect(alt).toBe(alt);
    })
});