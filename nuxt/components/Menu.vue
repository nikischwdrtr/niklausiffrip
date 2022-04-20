<template>
  <div class="Menu-container">
    <div class="Menu-left">
      <NuxtLink class="Menu-text" to="/algo">ALGO</NuxtLink>
    </div>
    <div class="Menu-middle">
      <NuxtLink class="Menu-text" to="/">NIKLAUS IFF</NuxtLink>
    </div>
    <div class="Menu-right">
      <NuxtLink class="Menu-text" to="/info">INFO</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.Menu-container {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
}
.Menu-left {
  text-align: left;
}
.Menu-middle {
  text-align: center;
}
.Menu-right {
  text-align: right;
}
.Menu-text {
  border: solid black 1px;
  border-radius: 25px;
  color: black;
  padding-left: 3%;
  padding-right: 3%;
  padding-top: 1%;
  padding-bottom: 1.5%;
  letter-spacing: 0.1em;
  background-color: white;
  &:hover {
    background-color: rgb(0, 255, 0);
  }
}
@media (max-width: 600px) {
}
@media (min-width: 600px) and (max-width: 1200px) {
}
</style>
