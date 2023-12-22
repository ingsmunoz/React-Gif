import { getGifs } from "../../helpers/getGif"

describe('Pruebas en getGifs()', () => {

    test('debe de retornar un arreglo de gifs', async () => {

        const gifs = await getGifs('Colombia');
        // console.log(gifs)
        // Que sea mayor a cero (0)
        expect( gifs.length ).toBeGreaterThan( 0 );

        // Va evaluar que sea el arreglo correspondiente a sus valores
        // Y evalua que traiga cualquier cosa que sea de tipo String
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })
})