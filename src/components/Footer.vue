<template>
  <div class="footer text-muted">
    <p>
      Copyright <i class="fa fa-copyright"></i> {{ new Date().getFullYear() }}
      <a href="https://github.com/buuug7" target="_blank">buuug7</a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ResumeFooter',
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  font-size: 14px;
  > p {
    margin: 0;
  }
}
</style>
