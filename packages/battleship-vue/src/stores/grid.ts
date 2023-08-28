import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { Grid, type Cell, type GameState, generateBoat } from 'battleship-core'

export const useGridStore = defineStore('grid', () => {
  const gridSize = 10

  const grid = reactive<Grid>(initialize())
  const shooted = ref<GameState>('UNSET')

  const displayableGrid = computed(() => grid.toDisplayableGrid())

  function shoot(cell: Cell) {
    shooted.value = grid.shoot(cell.position)
    const reset = setTimeout(() => {
      shooted.value = 'UNSET'
      clearTimeout(reset)
    }, 1000)
  }

  function reset() {
    const newGrid = initialize()
    Object.assign(grid, newGrid)
  }

  return { grid, displayableGrid, shoot, shooted, reset }

  function initialize() {
    const grid = new Grid(gridSize)
    const boats = generateBoat(grid)
    boats.map((b) => grid.addBoat(b))
    return grid
  }
})
