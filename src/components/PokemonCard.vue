<script setup>
const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})

const biggerNumber = computed(() => {
  if (props.pokemon.id < 10) return `00${props.pokemon.id}`
  if (props.pokemon.id < 100) return `0${props.pokemon.id}`
  return props.pokemon.id
})
</script>

<template>
  <button class="w-full bg-white pr-4 py-2 shadow-lg rounded-xl hover:(shadow-2xl translate-x-2) transform  transition-all ">
    <div class="flex flex-row justify-between flex items-center">
      <div class="flex flex-row gap-2 items-center">
        <img class=" h-20" :src="pokemon.sprites.front_default">
        <div class="flex flex-col justify-start text-left">
          <div>
            {{ pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1) }}
          </div>
          <div class="opacity-50">
            Nr. {{ biggerNumber }}
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-1">
        <div v-for="type in pokemon.types" :key="type" class="bg-black text-white rounded-full px-4 py-1 flex-wrap">
          {{ type.type.name }}
        </div>
      </div>
    </div>
  </button>
</template>
