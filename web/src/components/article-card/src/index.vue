<template>
  <div class="dxx-ui-article-card" :style="styleCSS">
    <div class="top">
      <img :src="wallPaperSrc" class="image" alt="" />
    </div>
    <div class="recent-post-info">
      <div class="recent-post-info-top">
        <div class="recent-post-info-top-tips">
          <span class="sticky-warp"> <i class="sticky"></i><span class="sticky">置顶</span> </span>
          <div class="article-categories-original">歌曲收集</div>
          <a
            class="unvisited-post"
            href="/posts/54386/"
            title="如果你觉得不开心的话，就来听一下这些纯音乐吧"
            draggable="false"
            data-pjax-state=""
          >
            未读
          </a>
        </div>
        <div class="article-title" title="如果你觉得不开心的话，就来听一下这些纯音乐吧">
          如果你觉得不开心的话，就来听一下这些纯音乐吧
        </div>
      </div>
      <div class="article-meta-wrap">
        <span class="post-meta-date">
          <i class="anzhiyufont anzhiyu-icon-calendar-alt"></i>
          <span class="article-meta-label">发表于</span>
          <time
            class="post-meta-date-created"
            datetime="2023-09-01T13:23:01.000Z"
            title="发表于 2023-09-01 21:23:01"
            time="2023-09-01 21:23:01"
            >2023-09-01
          </time>
          <span class="article-meta-separator"></span>
          <i class="anzhiyufont anzhiyu-icon-history" style="font-size: 15px"></i>
          <span class="article-meta-label">更新于</span>
          <time
            class="post-meta-date-updated"
            datetime="2023-09-29T14:53:38.312Z"
            title="更新于 2023-09-29 22:53:38"
            time="2023-09-29 22:53:38"
          >
            2023-09-29
          </time>
        </span>
        <span class="tags">
          <a
            class="article-meta__tags"
            href="/tags/%E6%AD%8C%E6%9B%B2%E6%94%B6%E9%9B%86/"
            event.cancelbubble=""
            onclick="window.event.cancelBubble=true;"
            draggable="false"
            data-pjax-state=""
          >
            <span> <i class="anzhiyufont anzhiyu-icon-hashtag"></i>歌曲收集</span>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Props } from './type.sfc'
import { computed } from 'vue'
const props = withDefaults(defineProps<Props>(), {
  wallPaperSrc: 'https://www.jsdelivr.ren/gh/SinzMise/picx-images-hosting@master/20240131/20.34xsj1b9tek0.webp',
})
const styleCSS = computed(() => {
  return {
    width: props.width + 'px',
    height: props.height + 'px',
  }
})
</script>

<style scoped lang="scss">
.dxx-ui-article-card {
  cursor: pointer;
  width: 100%;
  height: 100%;
  background: var(--article-card-bg);
  border-radius: 6px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .top {
    height: 226px;
    display: flex;
    position: relative;
    overflow: hidden;
    .image {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }
  .recent-post-info {
    width: 100%;
    position: relative;
    padding: 0;
    display: inline-block;
    overflow: hidden;
    flex: 1;
    .recent-post-info-top {
      position: relative;
      transition: 0.3s;
      padding: 0 32px;
      .recent-post-info-top-tips {
        display: flex;
        margin-top: 20px;
        align-items: center;
        .sticky-warp {
          line-height: 23px;
          display: box;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 8px;
          .sticky {
            color: #ff7242;
            font-size: 12px;
          }
        }
        .article-categories-original {
          display: flex;
          color: rgba(60, 60, 67, 0.8);
          font-size: 0.75rem;
          position: relative;
          margin-right: 8px;
        }
        .unvisited-post {
          display: flex;
          color: rgba(60, 60, 67, 0.8);
          font-size: 0.75rem;
          position: relative;
        }
      }
      .article-title {
        display: flex;
        font-size: 20px;
        font-weight: 700;
        color: #363636;
        transition: 0.3s;
        overflow: hidden;
        padding: 3px 0 10px;
      }
    }
    .article-meta-wrap {
      color: #363636;
      font-size: 0.7rem;
      padding: 0 32px;
      transition: 0.3s;
      display: flex;
      flex-direction: column;
      text-overflow: ellipsis;
      .post-meta-date {
        color: #363636;
        font-size: 0.875rem;
        overflow: hidden;
        display: inline-block;
        text-overflow: ellipsis;
        height: 32px;
        line-height: 32px;
        .article-meta-label {
          padding-right: 4px;
        }
        .article-meta-separator {
          margin: 0 6px;
        }
      }
      .tags {
        line-height: 20px;
      }
    }
  }
}
</style>
