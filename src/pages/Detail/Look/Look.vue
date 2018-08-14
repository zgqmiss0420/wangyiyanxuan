<template>
  <div>
    <div class="lookWrap" v-if="detail.yxLook">
      <div class="moduleTitle">严选LOOK</div>
      <div class="content">
        <img :src="detail.yxLook.picUrl" alt="">
        <div class="topicInfo">
          <div class="author-container">
            <div class="author">
              <img class="avatar" :src="detail.yxLook.avatar">
              <span class="nickname">{{detail.yxLook.nickname}}</span>
            </div>
          </div>
          <div class="comment">{{detail.yxLook.content}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "look",
    props : {
      detail : Object
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .lookWrap
    width 100%
    margin-top 10px
    background-color #fff
    padding-bottom 20px
    .moduleTitle
      width 100%
      height 50px
      text-align center
      line-height 50px
    .content
      img
        width 100%
        height 500px
      .topicInfo
        width 100%
        height 100px
        background-color #fff
        .author-container
          .author
            margin 10px
            .avatar
              vertical-align middle
              width 30px
              height 30px
              border-radius 30px
            .nickname
              font-size 12px
        .comment
          font-size 14px
          color #7f7f7f
          margin 10px

</style>
