import axios from 'axios'

export default {
  async getAllPokemons() {
    try {
      return await axios.get('https://stoplight.io/mocks/appwise-be/pokemon/57519009/pokemon')
    }
    catch (error) {
      console.error(error)
    }
  },

  async getPokemon(id) {
    try {
      return await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    }
    catch (error) {
      console.error(error)
    }
  },

}
