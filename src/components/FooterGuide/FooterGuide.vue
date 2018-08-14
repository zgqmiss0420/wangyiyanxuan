<template>
  <footer class="footer_guide">
    <span class="guide_item" @click="goTo('/msite')" :class="{on: $route.path==='/msite'}">
      <span class="item_icon">
        <i class="iconfont icon-home"></i>
      </span>
      <span>首页</span>
    </span>
    <a href="javascript:;" class="guide_item" @click="goTo('/detail')" :class="{on: $route.path==='/detail'}">
      <span class="item_icon">
        <i class="iconfont icon-fangkuang"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/classes')" :class="{on: $route.path==='/classes'}">
      <span class="item_icon">
        <i class="iconfont icon-chouti"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/shopcart')" :class="{on: $route.path==='/shopcart'}">
      <span class="item_icon">
        <i class="iconfont icon-cart"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goTo('/profile')" :class="{on: $route.path==='/profile'}">
      <span class="item_icon">
        <i class="iconfont icon-user"></i>
      </span>
      <span>个人</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goTo (path) {
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#d9d9d9)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #f5f5f5
    width 100%
    height 55px
    display flex
    a
      text-decoration none
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #666
      &.on
        color #b4282d
      span
        font-size 14px
        margin-top 1px
        margin-bottom 1px
        .iconfont
          font-size 20px
</style>
