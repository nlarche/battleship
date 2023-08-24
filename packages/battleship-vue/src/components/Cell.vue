<script setup lang="ts">
import { useGridStore } from '@/stores/grid'
import { type Cell } from 'battleship-core'

const store = useGridStore()

const props = defineProps<{ cell: Cell }>()

const shoot = () => store.shoot(props.cell)
</script>

<template>
  <div
    class="cell"
    :class="{ 'cell-shooted': cell.shooted, 'cell-hited': cell.containsBoat && cell.shooted }"
    @click="shoot"
  ></div>
</template>

<style scoped>
.cell {
  width: 60px;
  height: 60px;
  border: 1px solid #113c92;
  cursor: pointer;
}
.cell:hover {
  background-color: #113c92;
}

.cell-shooted {
  background-color: #0d4dd8;
}
.cell-hited {
  background-color: #e93737;
}
</style>
