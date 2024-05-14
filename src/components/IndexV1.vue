<template>
  <div class="resume">
    <Header
      :basicInfo="resume.basicInfo"
      :lang="lang"
      class="mb-2"
      @langChanged="handleLangChanged"
    />
    <SelfDescription
      :selfDescription="resume.selfDescription"
      :lang="lang"
      class="mb-2"
    />
    <Skills :skills="resume.skills" :lang="lang" class="mb-2" />
    <JobIntention
      :jobIntention="resume.jobIntention"
      :lang="lang"
      class="mb-2"
      v-if="false"
    />
    <EducationExperience
      :educationExperiences="resume.educationExperiences"
      :lang="lang"
      class="mb-2"
    />
    <WorkExperience
      :workExperiences="resume.workExperiences"
      :lang="lang"
      class="mb-2"
    />
    <ProjectExperience
      :projectExperiences="resume.projectExperiences"
      :lang="lang"
      class="mb-2"
    />
    <ResumeOther :others="resume.others" :lang="lang" class="mb-1" />
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import SelfDescription from './SelfDescription';
import Skills from './Skills';
import JobIntention from './JobIntention';
import WorkExperience from './WorkExperience';
import ProjectExperience from './ProjectExperience';
import EducationExperience from './EducationExperience';
import ResumeOther from './Other';
import Footer from './Footer';

import myResume from '../resume.yml';

export default {
  name: 'ResumeIndexV1',
  data() {
    return {
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
  },
  methods: {
    handleLangChanged(e) {
      console.log('lang', e);
      this.lang = e;
    },
  },
  components: {
    ResumeOther,
    Header,
    SelfDescription,
    Skills,
    JobIntention,
    WorkExperience,
    ProjectExperience,
    EducationExperience,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.resume {
  /*max-width: 650px;*/
  /*margin: 4rem auto;*/
}

@media (min-width: 768px) {
  .resume {
    max-width: 768px;
    margin: 0 auto;
  }
}
</style>
