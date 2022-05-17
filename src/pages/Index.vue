<script setup>
import PokemonService from '../services/PokemonService'
const selectedPokemon = ref(null)

const selectPokemon = async(pokemon) => {
  const response = await PokemonService.getPokemon(pokemon.id)
  selectedPokemon.value = response.data
}
</script>

<template>
  <div class="flex flex-row">
    <SidebarComponent class="flex-none" @select-pokemon="selectPokemon" />
    <div>
      {{ selectedPokemon }}
    </div>
  </div>
</template>
