<template>
  <div class="media box">
    <div class="media-content">
      <article>
        <h2 class="title">{{ item.title }}</h2>
        <div class="is-size-7">
          <sup class="has-text-grey-light" style="font-family: 'Times New Roman'">“</sup>
          {{ item.description }}
        </div>
      </article>
      <div class="postlist_tags" itemprop="keywords">
        <span>
          <DxxIcon icon="liulan" size="big"></DxxIcon>
          <p>浏览</p>
          <span>12</span>
        </span>
        <span @click="comment">
          <DxxIcon icon="pinglun" size="big"></DxxIcon>
          <p>评论</p>
          <span>10</span>
        </span>
      </div>
    </div>
    <div class="media-right">
      <figure class="image" style="max-width: 96px">
        <img
          src="https://www.jsdelivr.ren/gh/SinzMise/picx-images-hosting@master/20240131/20.34xsj1b9tek0.webp"
          alt="cover_image"
        />
      </figure>
    </div>
  </div>
</template>

<script setup lang="ts">
import { DxxIcon } from 'dxx-web-ui'
defineProps<{
  item: any
}>()
const comment = () => {}
</script>

<style scoped lang="scss">
.box {
  background: var(--essay-item-bg);
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);
  color: var(--essay-color);
  display: block;
  padding: 1.25rem 1.25rem 0.5rem;
  cursor: pointer;
  transition: var(--common-init-transition);
  &:hover {
    box-shadow: var(--common-box-shadow);
    transition: var(--common-hover-transition);
  }
}
.media {
  align-items: flex-start;
  display: flex;
  text-align: inherit;
  .media-content {
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 1;
    text-align: inherit;
    .title {
      font-size: 1.8rem;
      color: var(--essay-title);
      font-weight: 600;
      line-height: 1.125;
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
    }
    .is-size-7 {
      font-size: 0.9rem;
      .has-text-grey-light {
        color: var(--essay-text-grey);
        font-size: 3.1rem;
      }
    }
  }
  .media-right {
    margin-left: 1rem;
    .image {
      display: block;
      position: relative;
    }
    .image img {
      display: block;
      height: auto;
      width: 100%;
    }
    img {
      height: auto;
      max-width: 100%;
      overflow: clip;
    }
  }
  .media-left,
  .media-right {
    flex-basis: auto;
    flex-grow: 0;
    flex-shrink: 0;
  }
}
.postlist_tags {
  font-size: 0.9rem;
  margin-top: 1.5rem;
  display: flex;
  column-gap: 1.2rem;
  flex-direction: row;
  flex-wrap: wrap;
  & > span {
    display: flex;
    font-family: sans-serif;
  }
  & p {
    margin: 0 5px 0 3px;
    font-family: sans-serif;
  }
}
</style>
