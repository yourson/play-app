<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{this.currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper"
                 v-for="item in hotCities"
                 :key="item.id"
                 @click="handleCityClick(item.name)"
            >
              <div class="button">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area"
             v-for="(item, key) in cities"
             :key="key"
             :ref="key"
        >
          <div class="title border-topbottom">
            {{key}}
          </div>
          <div class="item-list"
               v-for="city in item"
               :key="city.id"
               @click="handleCityClick(city.name)"
          >
            <div class="item border-bottom">{{city.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import BScroll from 'better-scroll';
  export default {
    name: 'CityList',
    props: {
      cities: Object,
      hotCities: Array,
      letter: String
    },
    mounted () {
      this.scroll = new BScroll(this.$refs.wrapper);
    },
    watch: {
      // 发现传进来的letter数据发生改变的时候就调用
      letter () {
        if (this.letter) {
          let element = this.$refs[this.letter][0];
          this.scroll.scrollToElement(element);
        }
      }
    },
    computed: {
      ...mapState({
        currentCity: 'city'
      })
    },
    methods: {
      handleCityClick (city) {
        this.changeCity(city);
        this.$router.push('./');
      },
      ...mapActions(['changeCity'])
    }
  };
</script>

<style scoped lang="stylus">
  @import "~@/assets/styles/varibles.styl"
  .border-topbottom
    &:befor
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-botttom
    &:befor
      border-color: #ccc
  .list
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    .title
      lien-height: .44rem
      background-color: #eee
      color: #666
      font-size: .26rem
      text-indent: .2rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          border: .02rem solid #ccc
          border-radius: .06rem
          text-align: center
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
