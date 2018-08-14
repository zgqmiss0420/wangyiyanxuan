<template>
  <div class="g-bd">
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg" alt="">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg" alt="">
    </div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg" alt="">
      <div class="download-app"></div>
      <router-link to="/msite" class="backWapBtn"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "interlayer"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .g-bd
    height 100%
    .g-row
      position relative
      img
        vertical-align top
        &:nth-of-type(1)
          height 225px
        &:nth-of-type(2)
          height 225px
      .backWapBtn
        width 150px
        height 20px
        top 120px
        left 120px
        position absolute
</style>
