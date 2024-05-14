<template>
  <div class="project-experience" v-if="others">
    <h4 class="project-experience__title block-title mb-2">
      <span v-if="lang === 'cn'">其他</span>
      <span v-else>Others</span>
    </h4>
    <ul class="project-experience__time-line">
      <li
        class="project-experience__item"
        v-for="item in others"
        :key="item.id"
      >


        <div class="work-experience__project mb-2">
          <a
            :href="item.url"
            v-if="item.url !== 'none'"
            target="_blank"
            class="work-experience__project-name"
          >
            {{ item.name }}
          </a>
          <span v-else class="work-experience__project-name">{{
            item.name
          }}</span>
        </div>
        <p class="project-experience__project-description text-secondary">
          {{ item.description }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResumeOther',
  props: ['others', 'lang'],
  components: {
    //
  },
};
</script>

<style lang="scss" scoped>
.project-experience {
  background-color: #fff;
  padding: 0.5rem 1rem;
}
.project-experience__time-line {
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
  .project-experience__item {
    margin-left: -2rem;
    padding: 1rem;
    position: relative;
    font-size: 16px;
  }
  .work-experience__project {
    border-radius: 5px;
    &:before {
      content: '';
      position: absolute;
      width: 9px;
      height: 9px;
      background: #fff;
      border: 1px #18c3b1 solid;
      border-radius: 100%;
      top: 22px;
      left: -4px;
    }
  }
  .project-experience__project-description {
    margin-bottom: 0;
    &:before {
      content: ' ';
      position: absolute;
      width: 5px;
      height: 5px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 100%;
      top: 55px;
      left: -2px;
    }
  }
  .project-experience__project-frameworks {
    margin-bottom: 0;
    &:before {
      content: ' ';
      position: absolute;
      width: 5px;
      height: 5px;
      background: rgba(0, 0, 0, 0.3);
      border-radius: 100%;
      top: 90px;
      left: -2px;
    }
  }
}
</style>
