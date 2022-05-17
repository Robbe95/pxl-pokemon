<script setup>
import PokemonService from '../services/PokemonService'
const emits = defineEmits(['selectPokemon'])
const allPokemon = ref()
const fetchPokemon = async() => {
  const response = await PokemonService.getAllPokemons()
  allPokemon.value = response.data
}

fetchPokemon()

const selectPokemon = (pokemon) => {
  emits('selectPokemon', pokemon)
}

const search = ref()

const filteredPokemon = computed(() => {
  if (!search.value || search.value.length === 0) return allPokemon.value
  return allPokemon.value.filter(pokemon => pokemon.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>

<template>
  <div class="h-screen w-30vw  pb-10">
    <h1 class="font-bold text-3xl  px-10 pt-20 pb-4">
      Pokedex
    </h1>
    <div class="px-10 py-5">
      <input v-model="search" class="bg-[#EFF0F1] py-2 px-4 w-full" placeholder="Pokemon zoeken">
    </div>

    <div class="h-[calc(100vh-10rem)] overflow-auto flex flex-col gap-2 px-10">
      <div v-for="pokemon in filteredPokemon" :key="pokemon.id">
        <PokemonCard :pokemon="pokemon" @click="selectPokemon(pokemon)" />
      </div>
    </div>
  </div>
</template>
