<template>
  <div>
    <div class="footerWrap">
      <div class="footer">
        <div class="bd">
          <div class="App">下载APP</div>
          <div class="Web">电脑版</div>
        </div>
        <p class="copyright">
          <span>网易公司版权所有 © 1997-</span>
          <span>2018</span>
          <br>
          <span>食品经营许可证：JY13301080111719</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "msite-footer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .footerWrap
    background-color #414141
    margin-top 10px
    width 100%
    padding-top 10px
    .footer
      .bd
        width 60%
        margin 0 auto
        text-align center
        color #fff
        font-size 12px
        margin-top 20px
        div
          display inline-block
          border 1px solid #999
          border-radius 3px
          width 100px
          height 30px
          line-height 30px
          margin-right 10px
      .copyright
        text-align center
        font-size 12px
        color #999
        padding 10px 0

</style>
