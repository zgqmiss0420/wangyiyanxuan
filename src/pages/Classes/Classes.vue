<template>
  <div style="height: 100%; width:100%;background-color: #fff"  class="wrap">
    <Search/>
    <div class="leftNavWrap">
      <div class="leftNav">
        <div class="classesNav" v-for="(item,index) in nav.categoryL1List" :key="index" :class="{on:currentIndex === index}" @click="handleIndex(index)">
          <!--{{item.name}}-->
          <router-link tag="div" :to="`/classes/cateList/${item.id}`">{{item.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="CateListWrap">
      <CateList v-if="currentIndex===0" :currentIndex="currentIndex"/>
      <router-view v-if="currentIndex!==0" :currentIndex="currentIndex"/>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  import Search from './Search/Search'
  import CateList from './CateList/CateList'
  export default {
    data () {
      return {
        currentIndex : 0
      }
    },
    mounted () {
      this.$store.dispatch('getNav',() => {
        this.$nextTick(() => {
          new BScroll('.leftNavWrap', {
            click: true,
          })
          new BScroll('.CateListWrap', {
            click: true,
          })
        })
      })
    },
    computed : {
      ...mapState(['nav'])
    },
    methods : {
      handleIndex (index) {
        this.currentIndex = index
        this.$router.dispatch('saveIndex')
      }
    },
    components : {
      Search,
      CateList
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .leftNavWrap
    width 20%
    height 567px
    float left
    background-color #fff
    .leftNav
      border-right 1px solid #ededed
      padding-top 50px
      padding-bottom 50px
      width 100%
      float left
      background-color #fff
      .classesNav
        padding 15px 5px 15px
        font-size 12px
        text-align center
        &.on
          font-size 14px
          color #ab2b2b
          border-left 2px solid #ab2b2b
        a
          text-decoration none
        .router-link-active
          text-decoration none

  .CateListWrap
    background-color #fff
    margin-top 50px
    width 80%
    height 567px
    margin-bottom 50px
    float right
</style>
