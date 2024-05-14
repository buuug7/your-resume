<template>
  <div class="job-intention" v-if="jobIntention">
    <h4 class="job-intention__title block-title mb-2">
      <span v-if="lang === 'cn'">求职意向</span>
      <span v-else>Job intention</span>
    </h4>
    <ul class="job-intention__content">
      <li>{{ jobIntention.position }}</li>
      <li>{{ jobIntention.location }}</li>
      <li>{{ jobIntention.salary }}</li>
      <li>{{ jobIntention.jobTime }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeJobIntention',
  props: ['jobIntention', 'lang'],
  components: {
    //
  },
};
</script>

<style lang="scss">
.job-intention {
  background-color: #fff;
  padding: 0.5rem 1rem;
}
.job-intention__content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
  padding-left: 0;
  > li {
    padding: 5px 10px;
  }
  margin-bottom: 0.5rem;
}
</style>
