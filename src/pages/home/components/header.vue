<template>
    <div class="header">
      <div class="header-left">
        <span class="iconfont">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont icon">&#xe600;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
  // 这是vuex中的高级安api，用计算属性拿到state里面的值
  import { mapState } from 'vuex';
  export default {
    name: 'HomeHeader',
    computed: {
      ...mapState(['city'])
  }
  };
</script>

<style scoped lang="stylus">
  @import '~@/assets/styles/varibles.styl'
  .header
    height: .86rem
    line-height: .86rem
    display: flex
    background-color: $bgColor
    color: #fff
  .header-left
    width: .64rem
    text-align: center
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background-color: #fff
    -webkit-border-radius: .1rem
    -moz-border-radius: .1rem
    border-radius: .1rem
    color: #ccc
  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    text-align: center
    color: #fff
    .icon
      margin-left: -.04rem
</style>
