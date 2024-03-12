<template>
  <div class="message">
    <template v-for="item in [1, 2, 3]">
      <div class="friends_block">
        <div class="user">
          <img
            class="avatar lazyloaded"
            src="https://q1.qlogo.cn/g?b=qq&amp;nk=983538712&amp;s=100"
            data-src="https://q1.qlogo.cn/g?b=qq&amp;nk=983538712&amp;s=100"
            alt="乌乌龟大师"
          />
          <span class="onlinetime_recent" style="background: #2bde3f"></span>
          <div class="info">
            <div class="author">乌乌龟大师 <span class="date">3.11</span></div>
            <div class="animetags">
              <span class="animeinfo lv_0">豆芽 </span>
              <p class="animeinfo lv_guest">访客</p>
            </div>
          </div>
        </div>
        <div class="reply" style="">
          <a class="link" href="https://www.t223.top/archives/1983/comment-page-1#comment-1999" data-pjax-state="">
            博主的博客风格我好喜欢，是自己开发的吗
          </a>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.message {
  --text-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  --box-shadow: 0 7px 20px 1px #d7ceff30;
  --theme-10: #ff6a6a1a;
  --radius: 0.5rem;
  --background-color: #fff;
  --background: rgba(209, 189, 125, 0.15);
  --border: unset;

  position: relative;
  display: flex;
  flex-wrap: wrap;
  border-radius: 6px;
  .friends_block {
    flex: 1;
    margin: 0 20px 20px 0;
    min-width: 326px;
    height: 120px;

    cursor: pointer;
    position: relative;
    padding: 1rem;
    color: var(--common-msg-main);
    box-shadow: var(--box-shadow);
    background: var(--background);
    border: var(--border);
    border-radius: var(--radius);
    transition: transform 0.25s, box-shadow 0.25s, -webkit-transform 0.25s;
    .user {
      display: flex;
      margin-bottom: 0.5rem;
      position: relative;
      img {
        object-fit: cover;
        transition: filter 0.4s ease-in-out;
      }
      .avatar {
        width: 3rem;
        height: 3rem;
        border-radius: var(--radius);
        margin-right: 0.75rem;
        box-shadow: var(--box-shadow);
        -o-object-fit: cover;
        object-fit: cover;
      }
      .lazyloaded {
        filter: blur(0) brightness(1);
        opacity: 1;
      }
      .onlinetime_recent {
        position: relative;
        top: 2.55rem;
        border-radius: 50%;
        width: 0.5rem;
        height: 0.5rem;
        right: 1.1rem;
        border: 0.1rem solid var(--background-color);
        background: #2bde3f;
      }
      .info {
        max-width: 50%;
        .author {
          color: var(--common-msg-main);
          text-shadow: var(--text-shadow);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          .date {
            font-size: 1rem;
            right: 0.5rem;
            position: absolute;
            font-weight: 400;
            color: var(--common-msg-colorF);
          }
        }
        .animetags {
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          .animeinfo {
            border-radius: 0.3rem;
            background: var(--theme-10);
            border: 1px solid var(--theme-10);
            padding: 0 0.5rem;
            vertical-align: top;
            font-size: 0.75rem;
            word-break: keep-all;
            display: inline-block;
            line-height: 1.2rem;
            vertical-align: baseline;
            font-weight: unset;
            color: var(--common-msg-colorF);
            vertical-align: middle;
          }
          .lv_0 {
            background: rgb(189 189 189 / 30%);
            border: 1px solid rgb(189 189 189 / 30%);
          }
          .lv_guest {
            background: rgb(189 189 189 / 30%);
            border: 1px solid rgb(189 189 189 / 30%);
          }
        }
      }
    }
    .reply {
      font-size: 1rem;
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      color: rgb(12 25 50);
      max-height: 3.8rem;
      position: relative;
      background: var(--theme-10);
      border-radius: 6px;
      padding: 0.5rem 1rem;
      word-break: break-word;
      line-height: 1.5rem;
    }
  }
}
</style>
