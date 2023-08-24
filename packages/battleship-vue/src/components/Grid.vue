<script setup lang="ts">
import Cell from './Cell.vue'
import { useGridStore } from '../stores/grid'
const store = useGridStore()
</script>

<template>
  <div class="rows" v-for="(row, i) in store.displayableGrid">
    <span class="header">{{ row[0].position.x }}</span>
    <div class="cell" v-for="cell in row">
      <span class="header" v-if="i === 0">{{ cell.position.y }}</span>
      <Cell :cell="cell" />
    </div>
  </div>
</template>

<style scoped>
.rows {
  display: flex;
  flex-direction: row;
}
.header {
  height: 20px;
  width: 20px;
  align-self: center;
  justify-self: center;
}
</style>
