import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { createBoat, Grid, type Cell, type GameState, generateBoat } from 'battleship-core'

export const useGridStore = defineStore('grid', () => {
  const gridSize = 10

  const grid = reactive(new Grid(gridSize))
  addBoats()
  const shooted = ref<GameState>('UNSET')

  const displayableGrid = computed(() => {
    const cells = grid.cells()
    const gridCells = []
    for (let i = 0; i < cells.length; i += gridSize) {
      const chunk = cells.slice(i, i + gridSize)
      gridCells.push(chunk)
    }
    return gridCells
  })

  function addBoats() {
    const boats = generateBoat(gridSize)
    boats.map(grid.addBoat)
  }

  function shoot(cell: Cell) {
    shooted.value = grid.shoot(cell.position)
    const reset = setTimeout(() => {
      shooted.value = 'UNSET'
      clearTimeout(reset)
    }, 1000)
  }

  function reset() {
    Object.assign(grid, new Grid(gridSize))
    addBoats()
  }

  return { grid, displayableGrid, shoot, shooted, reset }
})
