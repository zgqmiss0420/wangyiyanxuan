<template>
  <div>
    <div class="moreWrap" v-if="detail.findMore">
      <div class="line-title">
        <div class="line"></div>
        <div class="inner">更多精彩</div>
      </div>
      <div class="wrap">
        <div class="content" v-for="(item,index) in detail.findMore" :key="index">
          <div class="imgContainer">
            <img :src="item.itemPicUrl" alt="">
          </div>
          <div class="desc">{{item.subTitle}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "more",
    props : {
      detail : Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../../../common/stylus/mixins.styl'
    .moreWrap
      .line-title
        height 100px
        display flex
        align-items center
        position relative
        .inner
          font-size 14px
          text-align center
          width 100px
          background-color #f7f7f7
          position absolute
          left 50%
          z-index 5
          transform translateX(-50%)
        .line
          margin 0 auto
          width 90%
          height 1px
          background-color #e1e1e1
      .wrap
        width 100%
        margin 0 auto
        .content
          background-color #fff
          width 90%
          text-align center
          margin 0 auto 30px
          .imgContainer
            width 100%
            padding 15px 15px 0 15px
            margin 0 auto
            img
              width 100%
              height 180px
          .desc
            width 80%
            text-align left
            padding  10px 20px 30px
            font-size 14px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis

</style>
