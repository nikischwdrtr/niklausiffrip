<template>
  <div class="Footer-container">
    <div class="Footer-left">
      <NuxtLink class="Footer-text" to="/about">PORTFOLIO</NuxtLink>
    </div>
    <div class="Footer-right">
      <NuxtLink class="Footer-text" to="/archive">ARCHIVE</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.Footer-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
}
.Footer-left {
  text-align: left;
}
.Footer-middle {
  text-align: center;
}
.Footer-right {
  text-align: right;
}
.Footer-text {
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
