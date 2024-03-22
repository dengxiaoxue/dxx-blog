<template>
  <div id="article-container">
    <div id="maincontent">
      <div id="form-wrap">
        <img
          class="no-lightbox entered loaded"
          id="beforeimg"
          src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/before.png"
          onerror='this.onerror=null,this.src="/img/404.jpg"'
          data-lazy-src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/before.png"
          data-ll-status="loaded"
        />
        <div id="envelope">
          <form>
            <div class="formmain" style="pointer-events: none">
              <img
                class="headerimg no-lightbox entered loaded"
                src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/violet.jpg"
                onerror='this.onerror=null,this.src="/img/404.jpg"'
                data-lazy-src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/violet.jpg"
                style="width: 100%; overflow: hidden; pointer-events: none"
                data-ll-status="loaded"
              />
              <div class="comments-main">
                <h3 class="title3" style="text-decoration: none; text-align: center">来自乌乌龟大师的留言:</h3>
                <div
                  class="comments"
                  style="
                    text-align: center;
                    border-bottom: #ddd 1px solid;
                    border-left: #ddd 1px solid;
                    padding-bottom: 20px;
                    background-color: #eee;
                    margin: 15px 0px;
                    padding-left: 20px;
                    padding-right: 20px;
                    border-top: #ddd 1px solid;
                    border-right: #ddd 1px solid;
                    padding-top: 20px;
                  "
                >
                  <div>有什么想问的？</div>
                  <div>有什么想说的？</div>
                  <div>有什么想吐槽的？</div>
                  <div>哪怕是有什么想吃的，都可以告诉我哦~</div>
                </div>
                <div class="bottomcontent" style="text-align: center; margin-top: 40px">
                  <img
                    class="bottomimg no-lightbox entered loaded"
                    src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/line.png"
                    onerror='this.onerror=null,this.src="/img/404.jpg"'
                    data-lazy-src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/line.png"
                    style="width: 100%; margin: 5px auto 5px auto; display: block; pointer-events: none"
                    data-ll-status="loaded"
                  />
                </div>
                <p class="bottomhr" style="font-size: 12px; text-align: center; color: #999">
                  自动书记人偶竭诚为您服务！
                </p>
              </div>
            </div>
          </form>
        </div>
        <img
          class="no-lightbox entered loaded"
          id="afterimg"
          src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/after.png"
          onerror='this.onerror=null,this.src="/img/404.jpg"'
          data-lazy-src="https://jsd.onmicrosoft.cn/npm/hexo-butterfly-envelope/lib/after.png"
          data-ll-status="loaded"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@media screen and (max-width: 600px) {
  #beforeimg,
  #afterimg {
    display: none !important;
  }
}
@media screen and (min-width: 600px) {
  #article-container img {
    margin: 0 auto 0rem;
  }
  #form-wrap {
    overflow: hidden;
    height: 447px;
    position: relative;
    top: 0px;
    transition: all 1s ease-in-out 0.3s;
    z-index: 0;
  }
  #form-wrap:hover {
    height: 700px;
    top: 0;
  }
  #beforeimg {
    position: absolute;
    bottom: 126px;
    left: 0px;
    background-repeat: no-repeat;
    width: 530px;
    height: 317px;
    z-index: -100;
    pointer-events: none;
  }

  #afterimg {
    position: absolute;
    bottom: -2px;
    left: 0;
    background-repeat: no-repeat;
    width: 530px;
    height: 259px;
    z-index: 100;
    pointer-events: none;
  }

  #envelope {
    position: relative;
    overflow: visible;
    width: 500px;
    margin: 0px auto;
    transition: all 1s ease-in-out 0.3s;
  }

  #maincontent {
    width: 530px;
    margin: 20px auto 0;
  }

  .formmain {
    background: white;
    width: 95%;
    max-width: 800px;
    margin: auto auto;
    border-radius: 5px;
    border: 1px solid;
    overflow: hidden;
    -webkit-box-shadow: 0px 0px 20px 0px #000000;
    box-shadow: 0px 0px 20px 0px #000000;
  }
}

#article-container {
  color: #000000;
}

/* 夜间模式 */
[data-theme='dark'] .formmain {
  background: #323232;
}
[data-theme='dark'] .comments {
  background: #5a5a5a !important;
}
</style>
