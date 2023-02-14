<template>
  <div class="index-container">
    <RIP />
    <section>
      <div class="index-archive">
        <div>
          <img src="images/DSCF1511.jpg" class="lazyload" />
        </div>
      </div>
    </section>
    <template  v-for="(index, i) in index">
      <section>
        <div class="index-archive">
          <div>
            <img :src="index.src" class="lazyload" />
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup>
  console.log('%c ♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱','background: #ffffff; color: #00FF00')
  console.log('%c ♕ rip rip rip ♕','background: #ffffff; color: #00FF00')
  console.log(' %c♱♱♱♱♱♱♱♱♱♱♱♱♱♱♱','background: #ffffff; color: #00FF00')
  const {data: indexP } = await useFetch('https://raw.githubusercontent.com/nikischwdrtr/niklausiffch_api/main/rip.json')
  const index = JSON.parse(indexP.value)
  const router = useRouter()
  getRandomArray(index)
  function getRandomArray(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
</script>

<style lang="scss">
.index-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
}
section {
  position: relative;
  width: 100%;
  height: 100%;
}
.index-archive {
  clip: rect(0, auto, auto, 0);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  div {
    position: fixed;
    display: block;
    top: 50%;
    left: 50%;
    width: 40%;
    height: 90%;
    transform: translateZ(0) translateX(-50%) translateY(-50%);
    will-change: transform;
    img {
      position: relative;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      max-width: 100%;
      max-height: 90%;
    }
  }
}
@media (max-width: 600px) {
  .index-archive {
    div {
      width: 75%;
    }
  }
}
</style>
