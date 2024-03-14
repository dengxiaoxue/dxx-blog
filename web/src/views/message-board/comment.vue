<template>
  <div id="respond-comment" class="respond">
    <form
      method="post"
      class="cat_block cat_comment_respond_form"
      action="https://liuyuyang.net/index.php/1932.html/comment"
      data-type="text"
      data-pjax-state=""
    >
      <div class="little_card_title">Comment</div>
      <div class="top">
        <div class="replyavatar">
          <img
            class="avatar api_avatar"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div class="head">
          <div class="list">
            <input type="email" id="toavatar" value="" autocomplete="off" name="mail" placeholder="邮箱" />
          </div>
          <div class="list">
            <input type="text" value="" autocomplete="off" name="author" maxlength="16" placeholder="昵称" />
          </div>
          <div class="list"><input type="url" value="" autocomplete="off" name="url" placeholder="站点" /></div>
        </div>
      </div>
      <div class="body">
        <textarea name="text" value="" class="Comment_Textarea" placeholder="注意文明发言哦！"></textarea>
        <div class="comment_emoji_block">
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😀')">😀</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😃')">😃</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😄')">😄</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😁')">😁</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😆')">😆</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😅')">😅</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤣')">🤣</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😂')">😂</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🙂')">🙂</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🙃')">🙃</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😉')">😉</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😊')">😊</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😇')">😇</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥰')">🥰</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😍')">😍</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤩')">🤩</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😘')">😘</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😗')">😗</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😚')">😚</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😙')">😙</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😋')">😋</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😛')">😛</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😜')">😜</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤪')">🤪</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😝')">😝</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤑')">🤑</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤗')">🤗</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤭')">🤭</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤫')">🤫</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤔')">🤔</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤐')">🤐</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤨')">🤨</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😐')">😐</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😑')">😑</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😶')">😶</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😏')">😏</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😒')">😒</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🙄')">🙄</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😬')">😬</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤥')">🤥</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😌')">😌</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😔')">😔</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😪')">😪</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤤')">🤤</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😴')">😴</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😷')">😷</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤒')">🤒</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤕')">🤕</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤢')">🤢</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤮')">🤮</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤧')">🤧</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥵')">🥵</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥶')">🥶</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥴')">🥴</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😵')">😵</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤯')">🤯</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤠')">🤠</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥳')">🥳</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😎')">😎</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤓')">🤓</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🧐')">🧐</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😕')">😕</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😟')">😟</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🙁')">🙁</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '☹️')">☹️</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😮')">😮</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😯')">😯</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😲')">😲</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😳')">😳</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥺')">🥺</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😦')">😦</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😧')">😧</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😨')">😨</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😰')">😰</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😥')">😥</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😢')">😢</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😭')">😭</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😱')">😱</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😖')">😖</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😣')">😣</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😞')">😞</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😓')">😓</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😩')">😩</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😫')">😫</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🥱')">🥱</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😤')">😤</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😡')">😡</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '😠')">😠</span>
          <span onclick="$('textarea.Comment_Textarea').val($('textarea.Comment_Textarea').val() + '🤬')">🤬</span>
        </div>
      </div>
      <div class="foot">
        <div class="right">
          <div id="cancel-comment-reply-link" class="cat_cancel_comment_reply send_anniu_style">取消</div>
          <div class="send_anniu_style" id="comment_put">发表</div>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.respond-comment {
  --margin: 1.5rem;
  --main: rgb(52 73 94);
  --background: #fff;
  --radius: 1rem;
  --margin: 1.5rem;

  .cat_comment_respond_form {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    gap: 0.5rem;
    width: 100%;
  }
  .cat_block {
    position: relative;
    padding: var(--margin);
    color: var(--main);
    background: var(--background);
    border-radius: var(--radius);
    margin-bottom: var(--margin);
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
}
</style>
