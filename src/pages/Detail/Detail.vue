<template>
  <div class="detailWrap">
    <Top/>
    <div class="swiper">
      <div class="swiper-container" v-if="detail.banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in detail.banner" :key="index">
            <img :src="item.picUrl">
            <div class="content">
              <div class="subTitle">- {{item.subTitle}} -</div>
              <div class="title">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dscroll :scroll="detail.column" />
    <Recommend :detail="detail"/>
    <div class="tenFifteen">
      <div class="title">十点一刻</div>
      <div class="innerWrap">
        <div class="innerScroll">
          <div class="scroll-item" v-for="(item,index) in detail.tenfifteen" :key="index">
            <div class="allTitle">-今日话题-</div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="count">
              <img class="avatar" v-if="participantAvatar" :src="participantAvatar" v-for="(participantAvatar,index) in item.participantAvatar"  :key="index">
              <span class="peopleCount">{{item.participantNum}}人参与话题</span>
            </div>
          </div>
          <div class="scroll-item">
            <div class="more">查看全部话题</div>
          </div>
        </div>
      </div>
    </div>
    <Zhen :detail="detail"/>
    <Look :detail="detail"/>
    <More :detail="detail"/>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'

  import Top from '../../components/Top/Top'
  import Dscroll from './DScroll/Dscroll'
  import Recommend from './Recommend/Recommend'
  import Zhen from './Zhen/Zhen'
  import Look from './Look/Look'
  import More from './More/More'
  export default {
    mounted () {
      this.$store.dispatch('getDetail',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 1.2,
            centeredSlides: true,
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
          new BScroll('.innerWrap', {
            click: true,
            scrollX: true,
            eventPassthrough : true
          })
        })
      })
    },
    computed : {
      ...mapState(['detail']),
    },
    components : {
      Top,
      Dscroll,
      Recommend,
      Zhen,
      Look,
      More
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detailWrap
    padding-bottom 55px
    width 100%
    .swiper
      .swiper-container
        background-color #fff
        margin-top 60px
        width 100%
        .swiper-wrapper
          width 100%
          .swiper-slide
            width 100%
            position relative
            img
              width 100%
              border-radius 5px
            .content
              position absolute
              left 0
              right 0
              top 0
              bottom 0
              margin auto
              display flex
              align-items center
              justify-content center
              flex-direction column
              width 250px
              height 100px
              background-color rgba(255,255,255,0.9)
              .subTitle
                font-size 10px
                color #7f7f7f
                margin-bottom 10px
              .title
                font-size 16px
                font-weight bold
                color #333
                margin-bottom 5px
              .desc
                font-size 12px
                color #333



    .tenFifteen
      width 100%
      height 300px
      background-color #fff
      margin-top 10px
      .title
        width 100%
        height 50px
        text-align center
        line-height 50px
      .innerWrap
        width 100%
        display flex
        overflow hidden
        .innerScroll
          display: flex;
          flex-flow: row nowrap;
          justify-content: center;
          .scroll-item
            text-align center
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png)
            background-repeat no-repeat
            background-size 100% 100%
            position relative
            margin-left 15px
            width 300px
            height 200px
            display flex
            flex-direction column
            .allTitle
              margin-top 20px
              color #7f7f7f
              font-size 12px
            .title
              font-size 16px
              font-weight bold
            .desc
              font-size 14px
            .count
              margin-top 15px
              .avatar
                width 20px
                height 20px
                border-radius 20px
                vertical-align middle
              .peopleCount
                font-size 14px
                color #7f7f7f
                margin-left 15px
            .more
              margin auto 0
              color #7f7f7f
</style>
