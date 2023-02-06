<template>
  <div id="RIP-container">
    <div id="RIP-title" @click="openMenu()">
      <h1>rip</h1>
    </div>
    <div id="RIP-menu">
      <div>
        <h2 @click="hideMenu()">[hide]</h2>
        <h2 @click="closeMenu()">[close]</h2>
      </div>
      <div>
        <p>curated archive of a life</p>
        <a href="mailto:getwellsoon@niklausiff.rip">getwellsoon@niklausiff.rip</a>
        <a href="https://niklausiff.ch/" target="_blank">niklausiff.ch</a>
      </div>
    </div>
  </div>
</template>


<script setup>
  function openMenu() {
    let title = document.getElementById('RIP-title')
    let menu = document.getElementById('RIP-menu')
    let container = document.getElementById('RIP-container')
    title.style.opacity = '0.0'
    title.style.transform = 'translate(-50%,-50%) scale(5)'
    title.style.zIndex = '20'
    menu.style.opacity = '1.0'
    menu.style.zIndex = '21'
    menu.style.pointerEvents = 'auto'
    container.style.left = '50%'
    container.style.top = '50%'
  }
  function hideMenu() {
    let title = document.getElementById('RIP-title')
    let menu = document.getElementById('RIP-menu')
    let container = document.getElementById('RIP-container')
    title.style.opacity = '1.0'
    title.style.transform = 'translate(-50%,-50%) scale(1)'
    title.style.zIndex = '21'
    menu.style.opacity = '0.0'
    menu.style.zIndex = '20'
    menu.style.pointerEvents = 'none'
    setTimeout(() => {
      container.style.left = '10%'
      container.style.top = '50%'
    }, "500")
  }
  function closeMenu() {
    let title = document.getElementById('RIP-title')
    let menu = document.getElementById('RIP-menu')
    title.style.opacity = '1.0'
    title.style.transform = 'translate(-50%,-50%) scale(1)'
    title.style.zIndex = '21'
    menu.style.opacity = '0.0'
    menu.style.zIndex = '20'
    menu.style.pointerEvents = 'none'
  }
</script>

<style lang="scss">
#RIP-container {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 20;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
}
#RIP-title {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  z-index: 21;
}
#RIP-menu {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 20;
  opacity: 0;
  transition-duration: 1s;
  transition-timing-function: ease-in-out;
  pointer-events: none;
}
@media (max-width: 600px) {
}
</style>
