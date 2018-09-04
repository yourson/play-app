<template>
    <div class="header">
      <router-link
        tag="div"
        to="/"
        class="header-abs"
        v-show="showAbs"
      >
        <span class="iconfont icon">&#xe624;</span>
      </router-link>
      <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
      >
        <router-link to="/">
          <div class="iconfont fixed-icon">&#xe624;</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
  export default {
    name: 'detailHeader',
    data () {
      return {
        showAbs: true,
        opacityStyle: {
          opacity: 0
        }
      };
    },
    // 页面展示的时候执行
    activated () {
      window.addEventListener('scroll', this.handleScroll);
    },
    // 页面结束的时候执行
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll () {
        console.log(1);
        let top = Math.floor(document.documentElement.scrollTop);
        if (top > 60) {
          let opacity = top / 140;
          opacity = opacity > 1 ? 1 : opacity;
          this.opacityStyle = { opacity };
          this.showAbs = false;
        } else {
          this.showAbs = true;
        }
      }
    }
  };
</script>

<style scoped lang="stylus">
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    -webkit-border-radius: .4rem
    -moz-border-radius: .4rem
    border-radius: .4rem
    text-align: center
    background-color: rgba(0,0,0,.8);
    .icon
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 6
    position: fixed
    top: 0
    left: 0
    height: .86rem
    line-height: .86rem
    width: 100%
    text-align: center
    color: #fff
    font-size: .32rem
    background-color: #00bcd4
  .fixed-icon
    position: absolute
    top: 0
    left: 0
    width: .64rem
    color: #fff
</style>
