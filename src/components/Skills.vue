<template>
  <div class="skills" v-if="skills">
    <h4 class="skills__title text-center mb-3">技能</h4>
    <ul class="skills__skills">
      <li
        class="skills__item-skill mb-3"
        v-for="skill in skills"
        :key="skill.name"
      >
        <div class="skills__item-skill-name text-secondary">{{ skill.name }}</div>
        <div class="progress progress--skill">
          <div
            class="progress-bar"
            role="progressbar"
            :style="{ width: skill.level + '%' }"
          >
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ResumeSkills',
    props: ['skills'],
    components: {
      //
    }
  }
</script>

<style lang="scss" scoped>
  .skills {
    background-color: #fff;
    padding: 1rem 2rem;
    overflow-x: auto;
  }

  .skills__skills {
    list-style: none;
    padding-left: 0;
  }

  .progress--skill {
    height: 1px;
    overflow: initial;
    display: flex;
    background-color: #e9ecef;
    border-radius: 0.25rem;

    .progress-bar {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      background-color: #007bff;
      color: #007bff;
      text-align: center;
      white-space: nowrap;

      &:after {
        content: "\f111";
        position: absolute;
        font: normal normal normal 14px/1 FontAwesome;
        font-size: 10px;
        text-rendering: auto;
        display: inline-block;
        color: #007bff;
        right: 0;
      }
    }

    .skills__item-skill {

    }
  }

  .skills__item-skill-name {
    font-size: 14px;
  }
</style>
