<template>
  <ul>
    <li v-for="(item,index) in items" :key="index">
      <i style="font-size: 14px" class="iconfont icon-gou"></i>
      <span>{{item}}</span>
    </li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        items: ['网易自营品牌','30天无忧退货','48小时无忧退款']
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  ul
    width 100%
    display flex
    background-color #fff
    align-items center
    justify-content space-between;
    padding 10px 15px
    margin-top -5px
    li
      font-size 12px
      i
        color #b4282d
        margin-right 3px

</style>
