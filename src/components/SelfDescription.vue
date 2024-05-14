<template>
  <div class="self-description" v-if="selfDescription">
    <h4 class="self-description__title block-title mb-2">
      <span v-if="lang === 'cn'">自我描述</span>
      <span v-else>Self description</span>
    </h4>
    <p class="self-description__description">
      {{ selfDescription.description[lang] }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResumeSelfDescription',
  props: ['selfDescription', 'lang'],
  components: {
    //
  },
};
</script>

<style lang="scss" scoped>
.self-description {
  background-color: #fff;
  padding: 1rem 2rem;
}
.self-description__description {
  margin-bottom: 0.5rem;
}
</style>
