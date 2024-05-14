<template>
  <div class="header" v-if="basicInfo">
    <div class="header__cn-en">
      <span @click="setLang('cn')">CN</span>
      <span @click="setLang('en')">EN</span>
    </div>
    <div class="header__top">
      <img :src="avatar" class="header__avatar" alt="" />
    </div>
    <div class="header__down">
      <ul class="header__personal-info">
        <li>{{ basicInfo.name[lang] }}</li>
        <li>{{ basicInfo['sex'][lang] }}</li>
         <li>{{ basicInfo.born }}</li>
        <li>{{ basicInfo.education[lang] }}</li>
        <li>{{ basicInfo.location[lang] }}</li>
        <li>{{ basicInfo.workExperience[lang] }}</li>
      </ul>
      <ul class="header__contact">
        <li><i class="fa fa-envelope"></i> {{ basicInfo.contact.email }}</li>
        <li><i class="fa fa-phone"></i> {{ basicInfo.contact.phone }}</li>
      </ul>
      <ul class="header__social-links">
        <li
          v-for="socialAccount in basicInfo.socialAccounts"
          :key="socialAccount.name"
        >
          <a :href="socialAccount.url" target="_blank"
            ><i :class="'fa fa-' + socialAccount.name"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import avatar from '../assets/avatar.jpg';

export default {
  name: 'ResumeHeader',
  props: ['basicInfo', 'lang'],
  components: {
    //
  },
  data() {
    return {
      avatar: avatar,
    };
  },

  methods: {
    setLang(lang) {
      this.$emit('langChanged', lang);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  position: relative;

  .header__cn-en {
    position: absolute;
    right: 4px;
    top: 4px;
    color: #fff;
    z-index: 2;
    //font-size: 13px;
    cursor: pointer;

    > span {
      padding: 0 4px;
      background: purple;
    }
  }

  .header__top {
    background: url('./../assets/resum-header-bg.jpg') no-repeat center center;
    background-size: cover;
    position: relative;
    height: 6.5rem;
    padding: 1rem;
    text-align: center;
  }

  .header__avatar {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    position: absolute;
    bottom: -60px;
    transform: translate(-50%, 0);
    border: 3px solid darken(#fff, 2%);
  }

  .header__down {
    padding: 3.5rem 1rem 0.5rem 1rem;
  }

  .header__personal-info {
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
    text-align: center;
    justify-content: center;
    list-style: none;
    padding-left: 0;

    li {
      padding: 0 8px;
    }
  }

  @media (max-width: 768px) {
    .header__personal-info {
      flex-direction: column;

      li {
        margin-bottom: 5px;
      }
    }
  }

  .header__contact {
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0;
    text-align: center;
    justify-content: center;
    list-style: none;
    padding-left: 0;

    li {
      padding: 0 8px;
    }
  }

  .header__social-links {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    margin-bottom: 0;
    list-style: none;
    padding-left: 0;

    li {
      padding: 6px;
    }
  }
}
</style>
