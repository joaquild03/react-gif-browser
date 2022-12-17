import { getGif } from "../../src/helpers/getGif";


describe('Pruebas en getGifs()', () => {

    test('debe de devolver un array de gifs', async() => {
        const gifs = await getGif('One Punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        })
    });
})