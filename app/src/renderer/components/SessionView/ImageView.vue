<style scoped>
  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    flex: 1;
  }
</style>

<template>
  <div class="image" :style="{ 'background-image': 'url(' + dataURI + ')' }" v-if="dataURI">
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
