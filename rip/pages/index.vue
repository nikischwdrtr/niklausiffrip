<script setup lang="ts">
console.log("%c ♕ niki is king ♕", "background: #00FF00; color: #ffffff");
const port = false;
function openPort() {
  let header = document.getElementById("header");
  let links = document.getElementById("links");
  if (port == false) {
    header.style.opacity = "0.0";
    links.style.opacity = "1.0";
    links.style.pointerEvents = "auto";
  } else {
    header.style.opacity = "1.0";
    links.style.opacity = "0.0";
    links.style.pointerEvents = "none";
  }
}
function closePort() {
  header.style.opacity = "1.0";
  links.style.opacity = "0.0";
  links.style.pointerEvents = "none";
}
</script>

<template>
  <div class="w-screen h-screen overflow-hidden m-0">
    <div class="flex justify-center" @click="openPort()">
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
      id="header"
    >
      <h1 class="text-7xl md:text-9xl" @click="openPort()">niklaus iff</h1>
    </div>
    <div
      class="fixed top-0 w-screen h-screen flex items-center justify-center flex-center flex-col opacity-0 pointer-events-none"
      id="links"
      @click="closePort()"
    >
      <div class="flex items-center justify-center flex-center flex-col gap-5">
        <a
          class="text-3xl md:text-7xl"
          href="niklausiff_selectedworks.pdf"
          target="_blank"
          >selected works</a
        >
        <a class="text-3xl md:text-7xl" href="mailto:getwellsoon@niklausiff.rip"
          >getwellsoon@niklausiff.rip</a
        >
      </div>
    </div>
  </div>
</template>
