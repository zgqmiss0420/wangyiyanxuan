<template>
  <div class="detailScroll">
    <div class="scroll-wrap">
      <div class="scroll-item" v-for="(item,index) in scroll" :key="index">
        <div class="imgContainer">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="numWrap">
          <div class="topNum">{{item.articleCount}}</div>
        </div>
        <div class="title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "dscroll",
    props: {
      scroll: Array,
    },
    mounted () {
      this.$nextTick(() => {
        new BScroll('.detailScroll', {
          click: true,
          scrollX: true,
          eventPassthrough : true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detailScroll
    padding-top 25px
    padding-bottom 25px
    width 100%
    display flex
    background-color #fff
    overflow hidden
    .scroll-wrap
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      .scroll-item
        position relative
        margin-left 15px
        width 90px
        display flex
        flex-direction column
        .imgContainer
          img
            border-radius 3px
        .numWrap
          position absolute
          right 0
          font-size 12px
          color #fff
          background url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/rbGradient-049c62dfb5.png) no-repeat
        .title
          margin-top 5px
          text-align center
          font-size 12px





</style>
