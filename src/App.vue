<template>
  <div id="app">
    <IndexV1 v-if="version === 'v1'" />
    <IndexV2 v-if="version === 'v2'" />
  </div>
</template>

<script>
import IndexV1 from './components/IndexV1';
import IndexV2 from './components/IndexV2';

export default {
  name: 'app',
  components: {
    IndexV1,
    IndexV2,
  },
  data() {
    return {
      version: 'v1',
    };
  },

  mounted() {
    const q = window.location.search;
    if (q) {
      const r1 = q.substr(1);
      const isV2 = r1.split('=')[1] === 'v2';
      if (isV2) {
        this.version = 'v2';
      }
    }
  },
};
</script>

<style>
#app {
}
</style>
