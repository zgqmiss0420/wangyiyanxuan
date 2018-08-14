<template>
  <div class="profileWrap">
    <Top ref="top"/>
    <div class="contentWrap" v-if="profileType === 0">
      <div class="imgWrap">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phone" @click="toPhoneLogin">
        <i class="iconfont icon-mobile"></i>
        <span>手机号码登录</span>
      </div>
      <div class="mail" @click="toMailLogin">
        <i class="iconfont icon-mail"></i>
        <span>邮箱账号登录</span>
      </div>
      <div class="toPhone">手机号快速注册></div>
      <div class="footer">
        <i class="iconfont icon-iconfontweixin"></i>
        <span>微信</span> |
        <i class="iconfont icon-qq"></i>
        <span>QQ</span> |
        <i class="iconfont icon-weibo"></i>
        <span>微博</span>
      </div>
    </div>
    <div class="phoneLogin" v-if="profileType === 1">
      <div class="imgWrap" >
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <input class="phoneInput" type="text" placeholder="请输入手机号">
      <div class="messageContainer">
        <input class="messageInput" type="text" placeholder="请输入短信验证码">
        <span class="getMessage">获取验证码</span>
      </div>
      <span class="question">遇到问题？</span>
      <span class="usePwd">使用密码验证登录</span>
      <div class="login">
        <span>登录</span>
      </div>
      <div class="other" @click="otherLogin">
        <span>其他登录方式</span>
      </div>
      <div class="toRegister">注册账号 ></div>
    </div>
    <div class="mailLogin" v-if="profileType === 2">
      <div class="imgWrap" >
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <input class="phoneInput" type="text" placeholder="邮箱账号">
      <div class="messageContainer">
        <input class="messageInput" type="text" placeholder="密码">
      </div>
      <span class="register">注册账号</span>
      <span class="forgotPwd">忘记密码</span>
      <div class="login">
        <span>登录</span>
      </div>
      <div class="other" @click="otherLogin">
        <span>其他登录方式</span>
      </div>
    </div>
  </div>
</template>

<script>
  import Top from '../../components/Top/Top'
  export default {
    data () {
      return {
        profileType : 0
      }
    },
    mounted () {
      this.$refs.top.change()
    },
    methods : {
      toPhoneLogin () {
        this.profileType = 1
      },
      toMailLogin () {
        this.profileType = 2
      },
      otherLogin () {
        this.profileType = 0
      }
    },
    components : {
      Top
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .profileWrap
    width 100%
    height 100%
    .contentWrap
      position relative
      width 100%
      height 100%
      padding-top 50px
      .imgWrap
        width 30%
        height 30%
        margin 0 auto
        position relative
        img
          position absolute
          top 50%
      .phone
        font-size 14px
        width 90%
        margin 0 auto
        height 50px
        background-color #b4282d
        margin-bottom 30px
        text-align center
        line-height 50px
        color #fff
      .mail
        font-size 14px
        text-align center
        line-height 50px
        border 1px solid #b4282d
        width 90%
        height 50px
        color #b4282d
        margin 0 auto 30px
      .toPhone
        font-size 14px
        text-align center
      .footer
        color #7e8c8d
        text-align center
        font-size 12px
        position absolute
        left 0
        right 0
        bottom 40px
        .iconfont
          margin-left 20px
        span
          margin-right 20px
    .phoneLogin
      text-align center
      width 100%
      height 100%
      padding-top 50px
      background-color #fff
      .imgWrap
        width 20%
        height 20%
        margin 0 auto
        position relative
        img
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
      .phoneInput
        font-size 14px
        padding 5px
        border-bottom 1px solid #dedede
        width 85%
        height 40px
        margin 0 auto 30px
        outline none
      .messageContainer
        position relative
        .messageInput
          font-size 14px
          padding 5px
          border-bottom 1px solid #dedede
          width 85%
          height 40px
          margin 0 auto 20px
          outline none
        .getMessage
          border-radius 5px
          color #666
          padding 5px
          border 1px solid #666
          font-size 14px
          position absolute
          top 5px
          right 40px
      .question
        color #666
        float left
        font-size 14px
        margin-left 20px
      .usePwd
        font-size 14px
        float right
        margin-right 20px
      .login
        font-size 14px
        width 90%
        margin 30px auto
        height 50px
        background-color #b4282d
        text-align center
        line-height 50px
        color #fff
      .other
        font-size 14px
        text-align center
        line-height 50px
        border 1px solid #b4282d
        width 90%
        height 50px
        color #b4282d
        margin 0 auto 30px
      .toRegister
        font-size 12px
    .mailLogin
      text-align center
      width 100%
      height 100%
      padding-top 50px
      background-color #fff
      .imgWrap
        width 20%
        height 20%
        margin 0 auto
        position relative
        img
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)
      .phoneInput
        font-size 14px
        padding 5px
        border-bottom 1px solid #dedede
        width 85%
        height 40px
        margin 0 auto 30px
        outline none
      .messageContainer
        position relative
        .messageInput
          font-size 14px
          padding 5px
          border-bottom 1px solid #dedede
          width 85%
          height 40px
          margin 0 auto 20px
          outline none
        .getMessage
          border-radius 5px
          color #666
          padding 5px
          border 1px solid #666
          font-size 14px
          position absolute
          top 5px
          right 40px
      .register
        color #666
        float left
        font-size 14px
        margin-left 20px
      .forgotPwd
        font-size 14px
        float right
        margin-right 20px
        color #666
      .login
        font-size 14px
        width 90%
        margin 30px auto
        height 50px
        background-color #b4282d
        text-align center
        line-height 50px
        color #fff
      .other
        font-size 14px
        text-align center
        line-height 50px
        border 1px solid #b4282d
        width 90%
        height 50px
        color #b4282d
        margin 0 auto 30px
</style>
