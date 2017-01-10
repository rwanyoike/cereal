<style scoped>
  .progress {
    flex: 1;
  }

  .progress-bar {
    height: 5px;
  }
</style>

<template>
  <div>
    <div class="progress align-self-center">
      <div class="progress-bar" :style="{ width: (index / max) * 100 + '%'}"></div>
    </div>
    <div class="d-flex justify-content-end">
      <small class="mr-auto">{{ index }}</small>
      <small>{{ max }}</small>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      index() {
        return this.$store.getters.current.index;
      },
      max() {
        const archive = this.$store.getters.archive;
        return archive.entries.length - 1;
      },
    },
  };
</script>
