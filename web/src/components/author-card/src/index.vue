<template>
  <div class="dxx-ui-author-card" :style="styleCSS">
    <img :src="wallPaperSrc" class="image" alt="博主栏壁纸" width="100%" />
    <div class="user">
      <img
        :src="avatarSrc"
        class="avatar"
        alt="博主头像"
        width="75"
        height="75"
      />
      <p class="motto">{{ motto }}</p>
    </div>
    <div class="count">
      <div class="item" v-for="item in siteState">
        <span class="num">{{ item.count }}</span>
        <span class="">{{ item.title }}</span>
      </div>
    </div>
    <div class="site-links">
      <a
        class="site-links-item"
        v-for="item in siteLinks"
        target="_blank"
        :href="item.href"
      >
        <img :src="item.logo" width="20" height="20" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type.sfc'
import { computed } from 'vue'
const props = withDefaults(defineProps<Props>(), {
  wallPaperSrc: '/vite.svg',
  avatarSrc: 'https://thirdqq.qlogo.cn/g?b=qq&nk=2904838175&s=100',
  motto: '我的梦想，努力就会绽放！',
  siteState: [
    {
      title: '文章',
      count: 43
    },
    {
      title: '标签',
      count: 121
    },
    {
      title: '评论',
      count: 999 + '+'
    }
  ],
  siteLinks: [
    {
      logo: '/vite.svg',
      href: 'https://github.com/SinzMise'
    },
    {
      logo: '/vite.svg',
      href: ''
    },
    {
      logo: '/vite.svg',
      href: ''
    }
  ]
})
const styleCSS = computed(() => {
  return {
    width: props.width + 'px',
    height: props.height + 'px'
  }
})
</script>

<style scoped lang="scss">
.dxx-ui-author-card {
  width: 100%;
  height: 100%;
  // background: rgba(255, 255, 255, 0.8);
  background: rgba(224, 224, 245, 0.8);
  padding: 85px 15px 15px;
  border-radius: 6px;
  font-size: 12px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: 30px;
    z-index: 2;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      rgba(144, 144, 249, 0.8)
    );
  }
  .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120px;
    -o-object-fit: cover;
    object-fit: cover;
    z-index: 1;
  }
  .user {
    position: relative;
    z-index: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
    .avatar {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      overflow: hidden;
      margin-bottom: 7px;
      -o-object-fit: cover;
      object-fit: cover;
      transition: -webkit-transform 0.75s;
      transition: transform 0.75s;
      transition: transform 0.75s, -webkit-transform 0.75s;
      border: rgba(144, 147, 153, 0.23) 3px solid;
      padding: 0px;
    }
    .motto {
      color: #404044;
      text-align: center;
      word-break: break-word;
    }
  }
  .count {
    width: 100%;
    padding-bottom: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebeef5;
    margin-bottom: 9px;
    .item {
      min-width: 0;
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #606266;
      font-size: 12px;
      .num {
        max-width: 70px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        font-size: 1.2rem;
        color: #404044;
      }
    }
  }
  .site-links {
    display: flex;
    align-items: center;
    justify-content: center;
    .site-links-item {
      cursor: pointer;
      width: 32px;
      height: 32px;
      margin-right: 10px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease 0s;
      &:hover {
        background: rgba(255, 255, 255, 1);
      }
    }
  }
}
</style>
