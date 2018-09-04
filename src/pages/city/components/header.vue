<template>
    <div>
      <div class="header">
        城市选择
        <router-link to="/">
          <div class="iconfont city-icon">&#xe624;</div>
        </router-link>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'CityHeader'
  };
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .header
    position: relative
    overflow: hidden
    height: .86rem
    line-height: .86rem
    background-color: $bgColor
    color: #fff
    text-align: center
    font-size: .32rem
    .city-icon
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-style: .4rem
      color: #fff
</style>
