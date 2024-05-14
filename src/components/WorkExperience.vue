<template>
  <div class="work-experience" v-if="workExperiences">
    <h4 class="work-experience__title block-title mb-2">
      <span v-if="lang === 'cn'">工作经历</span>
      <span v-else>Work experience</span>
    </h4>
    <ul class="work-experience__time-line">
      <li
        class="work-experience__item"
        v-for="workExperience in workExperiences"
        :key="workExperience.id"
      >
        <div class="work-experience__item-time mb-2 text-secondary small">
          {{ workExperience.time }}
        </div>
        <div class="work-experience__company mb-2">
          <span class="work-experience__company-name">{{
            workExperience.companyName
          }}</span>
          <em class="vline"></em>
          <span class="work-experience__company-work-position text-secondary">{{
            workExperience.workPosition
          }}</span>
        </div>
        <div class="work-experience__work-content-title mb-2">工作内容</div>
        <ul class="work-experience__work-content text-secondary">
          <li
            v-for="workContent in workExperience.workContents"
            :key="workContent.id"
          >
            {{ workContent.text }}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeWorkExperience',
  props: ['workExperiences', 'lang'],
  components: {
    //
  },
};
</script>

<style lang="scss" scoped>
.work-experience {
  background-color: #fff;
  padding: 0.5rem 1rem;
}
.work-experience__time-line {
  padding-left: 4rem;
  position: relative;
  list-style: none;
  margin-bottom: 0.5rem;
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
  .work-experience__item {
    margin-left: -2rem;
    padding: 1rem;
    position: relative;
  }
  .work-experience__item-time {
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
  .work-experience__company {
    &:before {
      content: ' ';
      position: absolute;
      width: 5px;
      height: 5px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 100%;
      top: 52px;
      left: -2px;
    }
  }
  .work-experience__work-content-title {
    &:before {
      content: ' ';
      position: absolute;
      width: 5px;
      height: 5px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 100%;
      top: 84px;
      left: -2px;
    }
  }

  .work-experience__work-content {
  }
  .work-experience__company-name {
  }
  .work-experience__company-work-position {
  }
}
</style>
