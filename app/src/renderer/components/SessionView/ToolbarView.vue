<style scoped>
  button {
    border-color: #c2c0c2 #c2c0c2 #a19fa1;
  }
  label {
    margin-bottom: 0;
  }
</style>

<template>
  <div>
    <div class="btn-group btn-group-sm mr-2">
      <button type="button" class="btn btn-secondary" @click="prev">
        <i class="fa fa-fw fa-angle-left"></i>
      </button>
      <button type="button" class="btn btn-secondary" @click="next">
        <i class="fa fa-fw fa-angle-right"></i>
      </button>
    </div>
    <div class="btn-group btn-group-sm mr-2" data-toggle="buttons">
      <label class="btn btn-secondary">
        <input type="radio" name="options" id="option1" autocomplete="off">
        <i class="fa fa-fw fa-toggle-left"></i>
      </label>
      <label class="btn btn-secondary active">
        <input type="radio" name="options" id="option2" autocomplete="off" checked>
        <i class="fa fa-fw fa-toggle-right"></i>
      </label>
    </div>
    <div class="btn-group btn-group-sm">
      <button type="button" class="btn btn-secondary">
        <i class="fa fa-fw fa-columns"></i>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
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
