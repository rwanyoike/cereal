<style scoped>
  .wrap {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .head {
    border-bottom: 1px solid #c2c0c2;
    padding: 0.25rem 0.5rem;
    background-color: #e8e6e8;
  }
  .body {
    flex: 1;
    display: flex;
  }
  .foot {
    border-top: 1px solid #c2c0c2;
    padding: 0.25rem 0.5rem;
    background-color: #e8e6e8;
  }
</style>

<template>
  <div class="wrap">
    <div class="head">
      <toolbar-view></toolbar-view>
    </div>
    <div class="body">
      <image-view></image-view>
    </div>
    <div class="foot" v-if="entries.length">
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
    computed: {
      entries() {
        return this.$store.getters.archive.entries;
      },
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
