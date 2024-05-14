<template>
  <div class="IndexV2">
    <h2>蒲国红的简历</h2>

    <div v-if="loaded">
      <h4>基本信息</h4>
      <ul>
        <li>姓名: {{ resume.basicInfo.name[lang] }}</li>
        <li>性别: {{ resume.basicInfo['sex'][lang] }}</li>
        <li>生日: {{ resume.basicInfo.born }}</li>
        <li>教育: {{ resume.basicInfo.education[lang] }}</li>
        <li>位置: {{ resume.basicInfo.location[lang] }}</li>
        <li>经验: {{ resume.basicInfo.workExperience[lang] }}</li>
        <li>电话: {{ resume.basicInfo.contact.phone }}</li>
        <li>邮箱: {{ resume.basicInfo.contact.email }}</li>
        <li
          v-for="socialAccount in resume.basicInfo.socialAccounts"
          :key="socialAccount.name"
        >
          <a :href="socialAccount.url" target="_blank"
            >社交: {{ socialAccount.name }}</a
          >
        </li>
      </ul>

      <h4>自我描述</h4>
      <p>
        {{ resume.selfDescription.description[lang] }}
      </p>

      <h4>求职意向</h4>
      <ul v-if="resume.skills">
        <li>{{ resume.jobIntention.position }}</li>
        <li>{{ resume.jobIntention.location }}</li>
        <li>{{ resume.jobIntention.salary }}</li>
        <li>{{ resume.jobIntention.jobTime }}</li>
      </ul>

      <h4>技能</h4>
      <ul>
        <li v-for="skill in resume.skills" :key="skill.name">
          {{ skill.name }}
        </li>
      </ul>

      <h4>教育经历</h4>
      <ul>
        <li
          v-for="educationExperience in resume.educationExperiences"
          :key="educationExperience.id"
        >
          {{ educationExperience.educationName[lang] }}
          <ul>
            <li>{{ educationExperience.durationTime }}</li>
            <li>{{ educationExperience.educationSubject[lang] }}</li>
            <li>{{ educationExperience.educationLevel[lang] }}</li>
          </ul>
        </li>
      </ul>

      <h4>工作经历</h4>
      <ul>
        <li
          v-for="workExperience in resume.workExperiences"
          :key="workExperience.id"
        >
          {{ workExperience.companyName }}
          <ul>
            <li>时间: {{ workExperience.time }}</li>
            <li>职位: {{ workExperience.workPosition }}</li>
            <li
              v-for="workContent in workExperience.workContents"
              :key="workContent.id"
            >
              内容: {{ workContent.text }}
            </li>
          </ul>
        </li>
      </ul>

      <h4>项目经历</h4>
      <ul>
        <li
          v-for="projectExperience in resume.projectExperiences"
          :key="projectExperience.id"
        >
          {{ projectExperience.name }}
          <ul>
            <li>角色: {{ projectExperience.position }}</li>
            <li>描述: {{ projectExperience.description }}</li>
            <li>框架: {{ projectExperience.frameworks }}</li>
          </ul>
        </li>
      </ul>

      <h4>其他</h4>
      <ul>
        <li v-for="item in resume.others" :key="item.id">
          <a :href="item.url" v-if="item.url !== 'none'" target="_blank">
            {{ item.name }}
          </a>
          <p>{{ item.description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import myResume from '../resume.yml';
export default {
  name: 'IndexV2',
  data() {
    return {
      loaded: false,
      resume: {
        basicInfo: null,
        selfDescription: null,
        skills: null,
        jobIntention: null,
        educationExperiences: null,
        workExperiences: null,
        projectExperiences: null,
        others: null,
      },
      lang: 'cn',
    };
  },
  mounted() {
    this.resume = myResume;
    this.loaded = true;
  },
  methods: {},
};
</script>
<style>
.IndexV2 {
  margin: 2rem;
}
</style>
