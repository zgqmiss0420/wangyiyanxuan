<template>
  <div class="maskWrap" v-if="isMask">
    <div class="mask"></div>
    <i class="iconfont icon-jinakangbaoicons18" @click="isMask = false"></i>
    <div class="wrap">
      <div class="modal">
        <div class="title">- 新人专享礼 -</div>
        <div class="subTitle">感谢使用网易严选, 已为你准备了一份专享礼</div>
        <div class="content">
          <div class="img">
            <img src="http://yanxuan.nosdn.127.net/10674b863c773e2752f34cb887592699.jpg?imageView&quality=85&thumbnail=232y232" alt="">
          </div>
          <div class="inner">
            <div class="itemName">Paris绅士休闲裤</div>
            <div class="menu">HUGO BOSS制造商</div>
            <div class="price">
              <div class="retailPrice">¥99.00</div>
              <div class="comparePrice">¥278.00</div>
            </div>
          </div>
        </div>
        <div class="actCouponBtn">领券立减¥40.00</div>
        <div class="linkBtn">查看更多特惠商品</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        isMask: true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .maskWrap
    position fixed
    right 0
    top 0
    bottom 0
    left 0
    margin auto
    z-index 9999
    .mask
      width 100%
      height 100%
      background-color rgba(0,0,0,.5)
    .iconfont
      color #fff
      font-size 30px
      position fixed
      top 50px
      right 30px
    .wrap
      border-radius 10px
      width 80%
      height 50%
      position absolute
      background-color #fff
      transform translate(-50%,-50%)
      top 50%
      left 50%
      .modal
        width 100%
        height 100%
        padding 20px
        .title
          text-align center
          font-weight bold
          font-size 20px
          margin-bottom 10px
        .subTitle
          color #333
          font-size 12px
          text-align center
        .content
          display flex
          margin-top 30px
          height 120px
          border-radius 5px
          background-color #f4f4f4
          .img
            width 120px
            height 100%
          .inner
            padding 15px 5px
            display flex
            flex-direction column
            justify-content space-between;
            height 100%
            .itemName
              font-size 14px
            .menu
              padding 1px 3px
              border 1px solid #999
              font-size 12px
            .price
              display flex
              .retailPrice
                color #b4282d
                font-size 14px
                margin-right 5px
              .comparePrice
                text-decoration:line-through
                color #999
                font-size 14px
        .actCouponBtn
          font-size 14px
          color #fff
          text-align center
          line-height 40px
          margin 10px auto
          height 40px
          width 100%
          background-color #b4282d
        .linkBtn
          font-size 14px
          border 1px solid #999
          text-align center
          line-height 40px
          margin 0 auto
          height 40px
          width 100%


</style>

