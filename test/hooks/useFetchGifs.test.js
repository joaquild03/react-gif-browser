import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Pruebas en el Hook useFetchGifs', () => {
    test('debe de regresar el estado inicial', () => {

        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { imagenes, isLoading} = result.current;

        expect( imagenes.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('debe de devolver un array de imagenes y isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));

        await waitFor(
            () => expect(result.current.imagenes.length).toBeGreaterThan(0)
        );

        const {imagenes, isLoading} = result.current;

        expect( imagenes.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});