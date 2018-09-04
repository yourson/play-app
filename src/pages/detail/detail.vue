<template>
    <div>
      <detail-banner
        :sightName="sightName"
        :bannerImg="bannerImg"
        :gallaryImgs="gallaryImgs"
      ></detail-banner>
      <detail-header
        :categoryList="categoryList"
      ></detail-header>
      <div class="content">
        <detail-list :list="categoryList"></detail-list>
      </div>
    </div>
</template>

<script>
  import detailBanner from './components/banner';
  import detailHeader from './components/header';
  import detailList from './components/list';
  import axios from 'axios';
  export default {
    name: 'Detail',
    components: {
      detailBanner,
      detailHeader,
      detailList
    },
    data () {
      return {
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: []
      };
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json?id=', {
          params: {
            id: this.$route.params.id
          }
        }).then(this.handleGetData);
      },
      handleGetData (res) {
        res = res.data;
        if (res.ret && res.data) {
          const data = res.data;
          this.sightName = data.sightName;
          this.bannerImg = data.bannerImg;
          this.gallaryImgs = data.gallaryImgs;
          this.categoryList = data.categoryList;
        }
      }
    },
    mounted () {
      this.getDetailInfo();
    }
  };
</script>

<style scoped lang="stylus">
  .content
    height: 50rem
</style>
