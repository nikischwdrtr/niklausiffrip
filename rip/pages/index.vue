<script setup lang="ts">
console.log("%c ♕ niki is king ♕", "background: #00FF00; color: #ffffff");
function openPort() {
  window.open("niklausiff_selectedworks.pdf", "_blank");
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden m-0">
    <div
      class="h-screen flex items-center justify-center flex-center flex-col gap-10"
    >
      <h1 class="text-7xl md:text-9xl" @click="openPort()">niklaus iff</h1>
    </div>
  </div>
</template>
