<template>
  <div class="recommendWrap">
    <div class="moduleTitle">严选甄品</div>
    <div class="firstRecommend" v-if="detail.zhenOne">
      <img :src="detail.zhenOne.picUrl" alt="">
      <div class="inTitle">
        {{detail.recommendOne.nickname}}
      </div>
      <div class="recommendContent">
        <div class="title">{{detail.zhenOne.title}}</div>
        <div class="subTitle">{{detail.zhenOne.subTitle}}</div>
      </div>
    </div>
    <div class="nextRecommend" v-if="detail.zhenTwo">
      <div class="commendInfo">
        <div class="author">
          <img class="avatar" :src="detail.zhenTwo.avatar" alt="">
          <span class="nickName">{{detail.zhenTwo.nickname}}</span>
        </div>
        <div class="line1">{{detail.zhenTwo.title}}</div>
        <div class="line2">{{detail.zhenTwo.subTitle}}</div>
      </div>
      <div class="commendImg">
        <img :src="detail.zhenTwo.picUrl" alt="">
        <div class="type">{{detail.zhenTwo.typeName}}</div>
      </div>
    </div>
    <div class="nextRecommend" v-if="detail.zhenThree">
      <div class="commendInfo">
        <div class="author">
          <img class="avatar" :src="detail.zhenThree.avatar" alt="">
          <span class="nickName">{{detail.zhenThree.nickname}}</span>
        </div>
        <div class="line1">{{detail.zhenThree.title}}</div>
        <div class="line2">{{detail.zhenThree.subTitle}}</div>
      </div>
      <div class="commendImg">
        <img :src="detail.zhenThree.picUrl" alt="">
        <div class="type">{{detail.zhenThree.typeName}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recommend",
    props : {
      detail : Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendWrap
    width 100%
    margin-top 10px
    background-color #fff
    padding-bottom 20px
    .moduleTitle
      width 100%
      height 50px
      text-align center
      line-height 50px
    .firstRecommend
      width 100%
      text-align center
      position relative
      img
        width 90%
      .inTitle
        background-color #fff
        position absolute
        top 10px
        left 30px
        z-index 5
        font-size 12px
        padding 0 10px
        border-radius 10px
      .recommendContent
        text-align left
        width 90%
        height 100px
        margin -4px auto
        border-radius 0 0 3px 3px
        background-color #fff
        border-bottom  1px solid #ddd
        border-left  1px solid #ddd
        border-right  1px solid #ddd
        .title
          font-size 18px
          margin 10px 12px 0
          color #333
        .subTitle
          font-size 12px
          color #7f7f7f
          margin 10px 12px
        .price
          font-size 16px
          float right
          margin-top -20px
          margin-right 10px
    .nextRecommend
      width 90%
      height 135px
      margin 20px auto
      border 1px solid #ddd
      border-radius 3px
      .commendInfo
        width 60%
        height 100%
        float left
        padding-right 20px
        .author
          margin 10px
          .avatar
            width 20px
            height 20px
            border-radius 20px
            vertical-align middle
          .nickName
            font-size 12px
        .line1
          margin 10px
          font-size 16px
        .line2
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          font-size 12px
          margin-left 10px
          color #7f7f7f
      .commendImg
        width 40%
        height 100%
        float right
        position relative
        img
          width 100%
          height 100%
        .type
          background-color #fff
          position absolute
          top 10px
          left 10px
          z-index 5
          font-size 12px
          padding 0 10px
          border-radius 10px

</style>
