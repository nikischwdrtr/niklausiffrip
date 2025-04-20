<script setup lang="ts">
console.log("%c ♕ niki is king ♕", "background: #00FF00; color: #ffffff");
function openPortfolio() {
  window.open("niklausiff_selectedworks.pdf", "_blank");
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden m-0">
    <div class="flex justify-center" @click="openPortfolio()">
      <video
        class="absolute min-w-full min-h-full"
        src="/test.mp4"
        autoplay
        muted
        loop
        playsinline
      />
    </div>
    <div
      class="h-screen flex items-center justify-center flex-center flex-col"
      id="niklaus"
    >
      <h1 class="text-7xl md:text-9xl" @click="openPortfolio()">niklaus iff</h1>
    </div>
  </div>
</template>
