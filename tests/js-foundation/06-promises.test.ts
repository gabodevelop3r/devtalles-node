
import { getPokemonById } from "../../src/js-foundation/06-promises"

describe('js-foundation/06-promises', () => {

    test('getPokemonById should return a pokemon', async ()=>{

        const pokemonId =1
        const pokemonName = await getPokemonById( pokemonId )
        expect( pokemonName ).toBe( 'bulbasaur' )

    })  

    test('getPokemonById should throw an error for invalid id', async ()=>{

        const pokemonId = 132332323
        try {
            await getPokemonById( pokemonId )
        }catch (e) {
            expect( e ).toBe( 'Pokemon not found with id: ' + pokemonId )
        }

    })

})