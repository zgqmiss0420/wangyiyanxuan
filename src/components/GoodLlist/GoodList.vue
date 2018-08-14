<template>
  <div>
    <div class="m-indexFloor" v-for="(item, index) in cateList" :key="index">
      <div class="m-titleGoodGrid">
        <h3 class="title">{{item.name}}好物</h3>
        <div class="m-goodGrid">
          <div class="wraper" v-for="(itemGoodGrid, indexGoodGrid) in item.itemList" :key="indexGoodGrid">
            <img :src="itemGoodGrid.listPicUrl" alt="">
            <div class="desc">{{itemGoodGrid.simpleDesc}}</div>
            <div class="name">{{itemGoodGrid.name}}</div>
            <span class="price">￥{{itemGoodGrid.couponPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      cateList: Array
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .m-indexFloor
    margin-top 10px
    background-color #fff
    .m-titleGoodGrid
      .title
        position relative
        line-height 50px
        text-align center
        font-size 16px
        color #333
      .m-goodGrid
        width 100%
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        .wraper
          margin 10px
          width 44%
          background-color #fff
          img
            background-color #f4f4f4
          .desc
            height 30px
            line-height 30px
            margin-top -5px
            background-color #F1ECE2
            color #9F8A60
            font-size 12px
            overflow hidden
            white-space nowrap
            text-overflow: ellipsis;
            padding 0 5px
            margin-bottom 10px
          .name
            font-size 15px
            overflow hidden
            white-space nowrap
            text-overflow: ellipsis;
          .price
            color #e5686d
            font-size 15px
            overflow hidden
            white-space nowrap
            text-overflow: ellipsis;
</style>
