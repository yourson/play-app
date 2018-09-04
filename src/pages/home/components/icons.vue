<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) in pages" :key="index">
          <div class="icon" v-for="item in page"
                :key="item.id">
            <div class="icon-img">
              <img class="icon-content" :src="item.imgUrl"/>
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      };
    },
    computed: {
      pages () {
        let pages = [];
        this.list.forEach((item, index) => {
          let page = Math.floor(index / 8);
          if (!pages[page]) {
            pages[page] = [];
          }
          pages[page].push(item);
        });
        return pages;
      }
    }
  };
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  @import "~@/assets/styles/mixins.styl"
  .icons > > >  .swiper-container
    height: 0
    padding-bottom: 50%

  .icons
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 50%
    .icon
      position: relative
      overflow: hidden
      height: 0
      float: left
      width: 25%
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        -webkit-box-sizing: border-box
        -moz-box-sizing: border-box
        box-sizing: border-box
        padding: .1rem
        overflow: hidden
        .icon-content
          height: 100%
          display: block
          margin: 0 auto
      .icon-desc
        position: absolute
        left: 0
        bottom: 0
        width: 100%
        height: .44rem
        line-height: .44rem
        text-align: center
        ellipse()
        color: $darkTextColor
</style>
