const { httpClient } = require('../plugins')

export const  getPokemonById = async (id:string|number ) : Promise<string> => {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    
        const pokemon = await httpClient.get(url)
        
        
    
        return pokemon.name 
    }catch (e) {
        throw 'Pokemon not found with id: ' + id
    }

}
