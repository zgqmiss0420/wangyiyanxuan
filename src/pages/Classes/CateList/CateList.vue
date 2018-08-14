<template>
  <div class="listWrap">
    <div class="cateWrap" v-if="currentIndex===index"  v-for="(item,index) in nav.categoryL1List" :key="index">
      <img :src="item.bannerUrl">
      <div class="line"></div>
      <div class="name">{{item.name}}分类</div>
      <div class="list">
        <div class="cateItem" v-for="(itemCate,index) in item.subCateList" :key="index">
          <div class="cateImgWrapper" >
            <img :src="itemCate.wapBannerUrl" alt="">
            <div class="cateName">{{itemCate.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "cate-list",
    props : {
      nav : Object,
      currentIndex : Number
    },
    computed : {
      ...mapState(['nav'])
    },

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl';
  .listWrap
    width 100%
    float right
    background-color #fff
    .cateWrap
      position relative
      width 80%
      margin 20px auto
    .name
      font-size 12px
      color #7f7f7f
      text-align center
      width 100px
      background-color #fff
      position absolute
      left 50%
      top 100px
      z-index 5
      transform translateX(-50%)
    .line
      margin 15px auto 0
      width 90%
      height 1px
      background-color #e1e1e1
    .list
      margin-top 20px
      width 100%
      display flex
      flex-wrap wrap
      .cateItem
        width 33%
        height 120px
        float left
        text-align center
        .cateImgWrapper
          .cateName
            font-size 12px



</style>
