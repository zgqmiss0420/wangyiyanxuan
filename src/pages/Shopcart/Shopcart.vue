<template>
  <div class="wrap">
    <div class="m-hd">
      <div class="m-cartHd">购物车</div>
      <div class="ticket">领券</div>
    </div>
    <ul class="explain">
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>30天无忧退货</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>48小时快速退款</span>
      </li>
      <li class="expItem">
        <i class="iconfont icon-yuanquan"></i>
        <span>满88元免邮费</span>
      </li>
    </ul>
    <div class="cart">
      <div class="img"></div>
      <div class="txt">
        <div class="inner">
          <div class="txtCon">去添加点什么吧</div>
          <div class="txtBtn" @click="$router.push('/profile')">登录</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .wrap
    width 100%
    position relative
    .m-hd
      position relative
      text-align center
      line-height 50px
      width 100%
      height 50px
      background-color #fff
      font-size 18px
      .ticket
        font-size 14px
        color #B4282D
        position absolute
        right 20px
        top 0
    .explain
      background-color #f4f4f4
      color #666
      display flex
      justify-content space-between
      padding 10px
      span
        font-size 12px
      .iconfont
        transform scale(0.5)
        color 666
    .cart
      width 100%
      height 550px
      text-align center
    .img
      margin auto
      width 50%
      height 100%
      background-size 120px
      background-position center
      background-repeat no-repeat
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png)
    .txt
      margin-top -220px
      .txtCon
        color #7f7f7f
      .txtBtn
        margin 20px auto 0
        padding 12px
        color #fff
        font-size 16px
        background-color #b4282d
        width 60%


</style>
