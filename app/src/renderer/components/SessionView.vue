<style scoped>
  .page {
    height: 100vh;
  }
  .head {
    border-bottom: 1px solid #c2c0c2;
  }
  .foot {
    border-top: 1px solid #c2c0c2;
  }
</style>

<template>
  <div class="page d-flex flex-column">
    <div class="head px-2 py-1 bg-faded">
      <toolbar-view></toolbar-view>
    </div>
    <div class="body d-flex col px-0">
      <image-view></image-view>
    </div>
    <div class="foot px-2 py-1 bg-faded">
      <progress-view></progress-view>
    </div>
  </div>
</template>

<script>
  import ToolbarView from './SessionView/ToolbarView.vue';
  import ImageView from './SessionView/ImageView.vue';
  import ProgressView from './SessionView/ProgressView.vue';

  export default {
    name: 'session',
    components: {
      ToolbarView,
      ImageView,
      ProgressView,
    },
    methods: {
      prev() {
        this.$electron.ipcRenderer.send('do-prev-item');
      },
      next() {
        this.$electron.ipcRenderer.send('do-next-item');
      },
    },
  };
</script>
