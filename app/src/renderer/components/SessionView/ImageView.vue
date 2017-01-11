<style scoped>
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
</style>

<template>
  <div class="image col px-0" :style="{ 'background-image': 'url(' + dataURI + ')' }" v-if="dataURI">
  </div>
</template>

<script>
  export default {
    computed: {
      dataURI() {
        return this.$store.getters.current.dataURI;
      },
    },
  };
</script>
