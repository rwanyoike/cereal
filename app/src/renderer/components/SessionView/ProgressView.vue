<style scoped>
  .progress-bar {
    height: 10px;
  }
  .col-auto {
    min-width: 8.3%;
  }
</style>

<template>
  <div class="d-flex justify-content-between align-items-center">
    <small class="col-auto px-0 mr-2">{{ index }}</small>
    <div class="progress col px-0 mr-2">
      <div class="progress-bar" :style="{ width: width + '%'}"></div>
    </div>
    <small class="col-auto px-0 text-right">{{ total }}</small>
  </div>
</template>

<script>
  export default {
    computed: {
      index() {
        return this.$store.getters.current.index;
      },
      total() {
        const total = this.$store.getters.archive.entries.length - 1;
        return total > 0 ? total : 0;
      },
      width() {
        return (this.index / this.total) * 100;
      },
    },
  };
</script>
