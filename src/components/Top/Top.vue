<template>
  <div>
    <div class="m-topBar">
      <div class="bd" :class="{on: changeColor}">
        <div class="row">
          <i class="shouye" @click="$router.replace('/msite')"></i>
          <i class="logo"></i>
          <div class="right">
            <div class="search" @click="$router.replace('/msite')">
              <i class="search1"></i>
            </div>
            <div class="cart" @click="$router.replace('/Shopcart')">
              <i class="cart1"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "top",
    data () {
      return {
        changeColor : false
      }
    },
    methods : {
      change () {
        this.changeColor = true
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m-topBar
    width 100%
    position fixed
    top 0
    z-index 10
    .bd
      width 100%
      height 50px
      background-color #fafafa
      position relative
      &.on
        background-color #fff
      .row
        position relative
        width 100%
        margin auto
        height 100%
        padding 0 15px
        display flex
        align-items center
        justify-content space-between
        .shouye
          width 20%
          height 30px
          display inline-block
          vertical-align middle
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
          background-repeat no-repeat
          background-size 100px 220px
          background-position 0 -35px
        .logo
          width 100px
          height 30px
          background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
          background-repeat no-repeat
          background-size 100px 220px
          background-position 0 -70px
        .right
          width 20%
          height 30px
          .search
            width 50%
            height 100%
            float left
            .search1
              display inline-block
              width 100px
              height 30px
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
              background-repeat no-repeat
              background-size 100px 220px
              background-position 0 -185px
          .cart
            width 50%
            height 100%
            float right
            .cart1
              display inline-block
              width 100px
              height 30px
              background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png)
              background-repeat no-repeat
              background-size 100px 220px
              background-position 0 -1px



</style>
