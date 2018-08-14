<template>
  <div class="m_siteScroll">
    <Masklayer/>
      <div class="m_headerWrap">
        <div class="m_header">
          <span>网易严选</span>
          <div class="search">
            <div class="content">
              <i class="iconfont icon-search"></i>
              <span>搜索商品, 共11765款好物</span>
            </div>
          </div>
        </div>
        <div class="headerTab">
          <div class="headerTabItem">
            <span :class="{active:currentIndex === index}" v-for="(item,index) in data" :key="index" @click="handleIndex(index)">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in carouse" :key="index">
            <img :src="item.picUrl"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <Description/>
      <div class="directSupply">
        <div class="supplyHd">
          <span>品牌制造商直供</span>
          <i class="iconfont icon-right"></i>
        </div>
        <div class="supplyBd" v-if="home.tagList">
          <div class="bdItem" v-for="(item,index) in home.tagList.slice(0,4)" :key="index">
            <h4>{{item.name}}</h4>
            <div class="title">
              {{item.floorPrice}} 元起
            </div>
            <span class="new" v-show="item.newOnShelf">
            上新
          </span>
            <img :src="item.picUrl">
          </div>
        </div>
      </div>
      <div class="m-newItems">
        <div class="newItemsWrap">
          <span>新品首发</span>
          <span class="all">查看全部 ></span>
        </div>
        <div class="m-goodGrid">
          <div class="list">
            <div class="goodGrid-item" v-for="(item,index) in home.newItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl">
              </div>
              <div class="title">
                新品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="newItemDesc">{{item.simpleDesc}}</div>
              <div class="price">￥{{item.retailPrice}}</div>
            </div>
            <div class="goodGrid-item">
              <div class="wraper">
                <span>查看全部</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="m-popularItems">
        <div class="popularItemsWrap">
          <span>人气推荐·好物精选</span>
          <span class="all">查看全部 ></span>
        </div>
        <div class="m-popularGrid">
          <div class="list">
            <div class="popularGrid-item" v-for="(item,index) in home.popularItemList" :key="index">
              <div class="wraper">
                <img :src="item.primaryPicUrl">
              </div>
              <div class="title">
                爆品
              </div>
              <div class="name">{{item.name}}</div>
              <div class="popularItemDesc">{{item.simpleDesc}}</div>
              <div class="price">￥{{item.retailPrice}}</div>
            </div>
            <div class="popularGrid-item">
              <div class="wraper">
                <span>查看全部</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="timeLimit">
        <div class="leftItem">
          <div class="title">严选限时购</div>
          <div class="timeWraper">
            <span class="time">{{hour}}</span>
            <span>:</span>
            <span class="time">{{min}}</span>
            <span>:</span>
            <span class="time">{{second}}</span>
          </div>
          <div class="next">下一场14:00开始</div>
        </div>
        <div class="rightItem"></div>
      </div>-->
      <div class="m-sale">
        <img src="http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg">
      </div>
      <GoodList :cateList="home.cateList"/>
      <MsiteFooter/>
    <ScrollTop/>
    </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'


  import Description from '../../components/Description/Description'
  import Masklayer from '../../components/Masklayer/Masklayer'
  import GoodList from '../../components/GoodLlist/GoodList'
  import MsiteFooter from '../../components/MsiteFooter/MsiteFooter'
  import ScrollTop from '../../components/ScrollTop/ScrollTop'
  export default {
    data () {
      return {
        currentIndex : 0
      }
    },
    mounted () {
      this.$store.dispatch('getData',() => {
        this.$nextTick(() => {
          new BScroll('.headerTab',{
            click :true,
            scrollX: true
          })
        })
      })
      this.$store.dispatch('getCarouse',() => {
        this.$nextTick(() => {
          new Swiper('.swiper-container', {
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      })
      this.$store.dispatch('getHome',() =>{
        this.$nextTick(() => {
          new BScroll('.m-goodGrid',{
            click :true,
            scrollX: true,
            eventPassthrough : true
          })
          new BScroll('.m-popularGrid',{
            click :true,
            scrollX: true,
            eventPassthrough : true
          })
        })
      })
    },
    computed : {
      ...mapState(['data','carouse','home']),
    },
    methods : {
      handleIndex (index) {
        this.currentIndex = index
      }

    },
    components : {
      Description,
      Masklayer,
      GoodList,
      MsiteFooter,
      ScrollTop
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .m_siteScroll
    width 100%
    overflow hidden
    margin-bottom 55px
    .m_headerWrap
      width 100%
      background-color #fff
      overflow hidden
      position: fixed;
      z-index 10
      top 0
      .m_header
        display flex
        margin-bottom 10px
        padding 10px
        span
          margin-top 3px
          margin-left 10px
          width 24%
          font-size 20px
        .search
          width 70%
          background-color #ededed
          height 30px
          border-radius 5px
          display flex
          align-items center
          justify-content center
          vertical-align center
          color #666
          span
            font-size 14px
      .headerTab
        width 100%;
        overflow hidden;
        background #ffffff;
        display flex
        .headerTabItem
          display flex;
          justify-content space-between;
          align-items center;
          span
            width 40px
            flex-wrap nowrap
            text-align center
            margin 0 18px
            padding 0 0 2px 0
            &.active
              color #b4282d
              border-bottom  2px solid #b4282d
    .swiper-container
      margin-top 80px
      width 100%
      .swiper-wrapper
        width 100%
        .swiper-slide
          width 100%
        img
          width 100%
          height 180px
      .swiper-pagination-bullets
        .swiper-pagination-bullet
          width 10px
          height 1px
          color #fff
        .swiper-pagination-bullet-active
          color #999
    .directSupply
      width 100%
      margin-top 10px
      background-color #fff
      .supplyHd
        width 100%
        height 60px
        line-height 60px
        text-align center
        i
          font-weight bold
          color #7e8c8d
      .supplyBd
        margin 0 5px 5px
        width 100%
        height 230px
        padding 5px 0
        .bdItem
          margin 0 0 5px 5px
          width 47%
          height 50%
          float left
          position relative
          background-color #f5f5f5
          font-size 14px
          bottom 5px
          h4
            padding 5px
          .title
            padding 0 5px
            margin-bottom 5px
          .new
            padding 0 5px
            border 1px solid #b4282d
            border-radius 5px
            margin-left 10px
          img
            width 100%
            height 100%
            position absolute
            left 0
            top 0
    .m-newItems
      margin-top 10px
      background-color #fff
      .newItemsWrap
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png)
        width 100%
        height 150px
        text-align center
        color #8BA0B6
        position relative
        span
          position absolute
          top 30px
          left 0
          right 0
          font-size 20px
        .all
          background-color #D8E5F1
          width 150px
          position absolute
          top 70px
          left 115px
          font-size 15px
          padding 3px 20px
      .m-goodGrid
        height 300
        display flex
        .list
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          .goodGrid-item
            width 150px
            height 250px
            margin-left 15px
            margin-top 15px
            display flex
            flex-direction column
            .wraper
              position relative
              text-align center
              line-height 150px
              width 100%
              height 150px
              background-color #f4f4f4
              img
                width 100%
              span
                position absolute
                margin 0 auto
                top 0
                bottom 0
                left 0
                right 0
            .title
              box-sizing content-box
              background-color #e5686d
              font-size 12px
              color #fff
              width 30px
              text-align center
              margin 5px 0 5px 5px
              padding 0 5px
            .name
              font-size 15px
              overflow hidden
              white-space nowrap
              text-overflow: ellipsis;
            .newItemDesc
              color #7f7f7f
              font-size 12px
              overflow hidden
              white-space nowrap
              text-overflow: ellipsis;
            .price
              color #e5686d
    .m-popularItems
      margin-top 10px
      background-color #fff
      .popularItemsWrap
        background: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png)
        width 100%
        height 150px
        text-align center
        color #B4A078
        position relative
        span
          position absolute
          top 30px
          left 0
          right 0
          font-size 20px
        .all
          background-color #F4E9CB
          width 150px
          position absolute
          top 70px
          left 115px
          font-size 15px
          padding 3px 20px
      .m-popularGrid
        height 300
        display flex
        .list
          display: flex;
          flex-flow: row nowrap;
          align-items: center;
          justify-content: center;
          .popularGrid-item
            width 150px
            height 250px
            margin-left 15px
            margin-top 15px
            display flex
            flex-direction column
            .wraper
              position relative
              text-align center
              line-height 150px
              width 100%
              height 150px
              background-color #f4f4f4
              img
                width 100%
              span
                position absolute
                margin 0 auto
                top 0
                bottom 0
                left 0
                right 0
            .title
              box-sizing content-box
              background-color #e5686d
              font-size 12px
              color #fff
              width 30px
              text-align center
              margin 5px 0 5px 5px
              padding 0 5px
            .name
              font-size 15px
              overflow hidden
              white-space nowrap
              text-overflow: ellipsis;
            .popularItemDesc
              color #7f7f7f
              font-size 12px
              overflow hidden
              white-space nowrap
              text-overflow: ellipsis;
            .price
              color #e5686d
   /* .timeLimit
      margin-top 10px
      width 100%
      height 180px
      background-color #fff
      .leftItem
        width 50%
        text-align center
        .title
          font-size 20px
        .timeWraper
          width 80%
        .next
          font-size 12px
      .rightItem
        width 50%
        height 100%*/
    .m-sale
      margin-top 10px
</style>
