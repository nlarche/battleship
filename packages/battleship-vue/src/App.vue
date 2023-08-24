<script setup lang="ts">
import Grid from './components/Grid.vue'
import Notification from './components/Notification.vue'
import { useGridStore } from './stores/grid'

const store = useGridStore()

const newGame = () => store.reset()
</script>

<template>
  <nav>
    <button @click="newGame">New Game</button>
    <Notification />
  </nav>
  <section>
    <Grid />
  </section>
</template>

<style scoped>
nav {
  display: flex;
  gap: 10px;
  height: 25px;
}
</style>
