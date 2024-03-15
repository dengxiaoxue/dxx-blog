<template>
  <div class="chatting-wrap">
    <div class="content">
      <template v-for="item in props.data">
        <div class="content-item-left" :class="{ 'content-item-right': item.animeinfo.includes('博主') }">
          <img width="48" height="48" class="avatar lazyloaded" :src="item.avatar" :data-src="item.avatar" alt="头像" />
          <div class="content-info" :class="{ 'content-info-right': item.animeinfo.includes('博主') }">
            <div class="user">
              <span>{{ item.name }}</span>
              <span class="reply" v-if="item.reply">@{{ item.reply }}</span>
              <span class="animeinfo" v-for="i in item.animeinfo">{{ i }}</span>
            </div>
            <div class="substance">
              <p>{{ item.content }}</p>
            </div>
            <div class="handle">
              <time class="date" datetime="11th 09:22">{{ item.time }}</time>
              · {{ item.device }}
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    data: any
  }>(),
  {
    data: [
      {
        name: '小鹿',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1169702115&s=100',
        reply: '',
        animeinfo: ['豆芽', '访客'],
        content: '博主的博客风格我好喜欢，是自己开发的吗',
        time: '3天前',
        device: 'Win 10+ · Chrome',
      },
      {
        name: '乌乌龟大师',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=983538712&s=100',
        reply: '小鹿',
        animeinfo: ['博主'],
        content: '别人的主题',
        time: '3天前',
        device: 'Win 10+ · Chrome',
      },
      {
        name: '小鹿',
        avatar: 'https://q1.qlogo.cn/g?b=qq&nk=1169702115&s=100',
        reply: '乌乌龟大师',
        animeinfo: ['豆芽', '访客'],
        content: '所噶',
        time: '3天前',
        device: 'Win 10+ · Chrome',
      },
    ],
  },
)
const emits = defineEmits<{}>()
</script>

<style scoped lang="scss">
.chatting-wrap {
  .content-item-right {
    flex-direction: row-reverse;
  }
  .content-info-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .content {
    background-color: rgba(241, 241, 241, 0.35);
    border-radius: var(--common-border-radius);
    padding: 10px 15px;
    box-shadow: var(--msg-reply-shadow);
    transform: translateZ(-10px);
  }

  margin-bottom: 30px;
  flex: 1;
  background: var(--msg-reply-bg);
  padding: 1.5rem 2rem;
  border-radius: var(--msg-border-radius);
  box-shadow: 0 8px 16px -4px rgba(44, 45, 48, 0.047);
  border: 1px solid #e3e8f7;
  .content-item-left {
    display: flex;
    position: relative;
    margin: 1.5rem 0;
    .content-info {
      min-width: 0;
      flex: 1;
      .user {
        display: flex;
        align-items: center;
        margin: 0 0 0 0.5rem;
        color: var(--main);
        .reply {
          font-size: 12px;
        }
        .animeinfo {
          background: rgb(189 189 189 / 30%);
          border: 1px solid rgb(189 189 189 / 30%);
          border-radius: 0.3rem;
          padding: 0 0.5rem;
          font-size: 0.75rem;
          line-height: 1.2rem;
          color: var(--colorF);
        }
        & > span {
          margin-right: 0.5rem;
        }
      }
      .substance {
        padding: 0.5rem;
        display: table;
        width: auto;
        max-width: 60%;
        & > p {
          margin-bottom: 0.5rem;
          background: var(--theme-10);
          padding: 0.5rem;
          color: var(--main);
          word-break: break-all;
          line-height: 1.75rem;
          border-radius: var(--radius);
        }
      }
      .handle {
        align-items: center;
        font-size: 11px;
        color: var(--colorE);
        margin: -0.5rem 0.5rem 0;
        font-family: sans-serif;
      }
    }
  }

  .avatar {
    display: block;
    width: 3rem;
    height: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--box-shadow);
    -o-object-fit: cover;
    object-fit: cover;
  }
  img.lazyloaded {
    filter: blur(0) brightness(1);
    opacity: 1;
  }
  img {
    transition: filter 0.4s ease-in-out;
  }
}
</style>
