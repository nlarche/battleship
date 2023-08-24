<script setup lang="ts">
import { useGridStore } from '@/stores/grid'
const store = useGridStore()
</script>

<template>
  <Transition name="fade">
    <h1
      class="Notification hit"
      :class="{
        hit: store.shooted === 'HIT',
        miss: store.shooted === 'MISS',
        win: store.shooted === 'WIN'
      }"
      v-if="store.shooted !== 'UNSET'"
    >
      {{ store.shooted }} !
    </h1>
  </Transition>
</template>

<style>
.Notification {
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
.hit {
  background-color: #e93737;
}
.miss {
  background-color: #3799e9;
}
.win {
  background-color: #2ff328;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
