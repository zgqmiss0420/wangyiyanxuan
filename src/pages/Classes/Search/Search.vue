<template>
  <header class="search">
    <div class="inner">
      <div class="ipt">
        <i class="iconfont icon-search"></i>
        <span class="placeholder">搜索商品, 共11999款好物</span>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: "search"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .search
    position fixed
    top 0
    z-index 99
    background-color #fff
    width 100%
    height 50px
    border-bottom 1px solid #ededed
    .inner
      font-size 14px
      color #7f7f7f
      line-height 30px
      position absolute
      left 0
      right 0
      top 0
      bottom 0
      height 60%
      text-align center
      background-color #ededed
      margin auto
      border-radius 5px
      width 90%
</style>
