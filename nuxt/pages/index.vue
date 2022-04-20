<template>
  <div class="index-container">
    <Menu class="index-menu"/>
    <Footer class="index-footer"/>
  </div>
</template>

<script>
export default {
  mounted() {},
	data() {
	  return {
    };
	},
  computed: {},
	methods: {},
}
</script>

<style lang="scss">
.index-container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
.index-menu {
  position: fixed;
  top: 2%;
  left: 3%;
  width: 94%;
  height: 5%;
  z-index: 10;
}
.index-footer {
  position: fixed;
  bottom: 0%;
  left: 3%;
  width: 94%;
  height: 5%;
  z-index: 10;
}
@media (max-width: 600px) {
}
@media (min-width: 600px) and (max-width: 1200px) {
}
</style>