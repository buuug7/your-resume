<template>
  <div class="education-experience" v-if="educationExperiences">
    <h4 class="education-experience__title block-title mb-2">
      <span v-if="lang === 'cn'">教育经历</span>
      <span v-else>Educational experience</span>
    </h4>
    <ul class="education-experience__time-line">
      <li
        class="education-experience__item"
        v-for="educationExperience in educationExperiences"
        v-bind:key="educationExperience.id"
      >
        <div class="education-experience__duration-time mb-2 text-secondary">
          {{ educationExperience.durationTime }}
        </div>
        <div class="education-experience__item-education-info">
          <span class="education-experience__education-name">
            {{ educationExperience.educationName[lang] }}
          </span>
          <em class="vline"></em>
          <span class="education-experience__education-subject">
            {{ educationExperience.educationSubject[lang] }}
          </span>
          <em class="vline"></em>
          <span class="education-experience__education-level">
            {{ educationExperience.educationLevel[lang] }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeEducationExperience',
  props: ['educationExperiences', 'lang'],
  components: {
    //
  },
};
</script>

<style lang="scss" scoped>
.education-experience {
  background-color: #fff;
  padding: 0.5rem 1rem;
}
.education-experience__time-line {
  padding-left: 4rem;
  position: relative;
  list-style: none;
  &:before {
    content: ' ';
    position: absolute;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.1);
    display: block;
    left: 2rem;
    top: 0;
    bottom: 0;
  }

  .education-experience__item {
    margin-left: -2rem;
    padding: 1rem;
    position: relative;
  }
  margin-bottom: 0.5rem;
}
.education-experience__duration-time {
  border-radius: 5px;
  &:before {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    background: #fff;
    border: 1px #18c3b1 solid;
    border-radius: 100%;
    top: 21px;
    left: -4px;
  }
}
.education-experience__education-name {
}

.education-experience__item-education-info {
  &:before {
    content: ' ';
    position: absolute;
    width: 5px;
    height: 5px;
    background: rgba(0, 0, 0, 0.3);
    border-radius: 100%;
    top: 53px;
    left: -2px;
  }
}
</style>
