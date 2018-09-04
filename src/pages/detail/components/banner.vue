<template>
    <div>
      <div class="banner" @click="handleBannerClick">
        <img class="bannerImg" src="http://f12.baidu.com/it/u=3931984114,750350835&fm=72"/>
        <div class="bannerInfo">
          <div class="bannerTitle">
            {{sightName}}
          </div>
          <div class="bannerNumber">
            <span class="iconfont icon">&#xe669;</span>
            {{gallaryImgs.length}}
          </div>
        </div>
      </div>
      <common-fade>
        <common-gallary
          :imgs="gallaryImgs"
          v-show="showGallary"
          @close="handleGallaryClose"
        ></common-gallary>
      </common-fade>
    </div>
</template>

<script>
  import commonGallary from '@/common/gallary/gallary';
  import commonFade from '@/common/fade/fade';
  export default {
    name: 'detailBanner',
    props: {
      sightName: String,
      bannerImg: String,
      gallaryImgs: Array
    },
    components: {
      commonGallary,
      commonFade
    },
    data () {
      return {
        showGallary: false
      };
    },
    methods: {
      handleBannerClick () {
        this.showGallary = true;
      },
      handleGallaryClose () {
        this.showGallary = false;
      }
    }
  };
</script>

<style scoped lang="stylus">
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .bannerImg
      width: 100%
    .bannerInfo
      display: flex
      width: 100%
      position: absolute
      left: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .bannerTitle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .bannerNumber
        padding: 0 .4rem
        height: .32rem
        margin-top: .14rem
        margin-right: .14rem
        line-height: .32rem
        -webkit-border-radius: .2rem
        -moz-border-radius: .2rem
        border-radius: .2rem
        font-size: .24rem
        background-color: rgba(0,0,0,.8)
        .icon
          font-size: .24rem
</style>
