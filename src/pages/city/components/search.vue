<template>
    <div>
      <div class="search">
        <input class="search-input"
               type="text"
               placeholder="输入城市名或拼音"
               v-model="keyword"
        />
      </div>
      <div class="search-Content"
           ref="search"
           v-show="keyword"
      >
        <ul>
          <li class="search-item border-bottom"
              v-for="item in list"
              :key="item.id"
              @click="handleCityClick(item.name)"
          >
            {{item.name}}
          </li>
          <li class="search-item border-bottom"
              v-show="hasNoData"
          >
            没有找到您想要的城市，请重新输入
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import Bscroll from 'better-scroll';
  export default {
    name: 'CitySearch',
    props: {
      cities: Object
    },
    data () {
      return {
        keyword: '',
        list: [],
        timer: null // 节流作用，侦听器
      };
    },
    computed: {
      hasNoData () {
        return !this.list.length;
      }
    },
    watch: {
      keyword () {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (!this.list) {
          this.list = [];
          return;
        }
        this.timer = setTimeout(() => {
          let result = [];
          for (let i in this.cities) {
            this.cities[i].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1) {
                result.push(value);
              }
              this.list = result;
            });
          }
        }, 100);
      }
    },
    mounted () {
      this.scroll = new Bscroll(this.$refs.search);
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
  .search
    height: .72rem
    padding: 0 .1rem
    background-color: $bgColor;
    .search-input
      width: 100%
      height: .62rem
      line-height: .62rem
      -webkit-box-sizing: border-box
      -moz-box-sizing: border-box
      box-sizing: border-box
      padding: 0 .1rem
      text-align: center
      -webkit-border-radius: .06rem
      -moz-border-radius: .06rem
      border-radius: .06rem
      color: #666
  .search-Content
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    background-color: #eee
  .search-item
    line-height: .62rem
    text-indent: .2rem
    color: #666
    background-color: #fff;
</style>
