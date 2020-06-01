<template>
  <div class="main">
    <div class="avatar">
      <el-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div class="item">
      <el-input placeholder="请输入账号" v-model="account" clearable prefix-icon="el-icon-user"></el-input>
    </div>
    <div class="item">
      <el-input placeholder="请输入密码" v-model="password" show-password prefix-icon="el-icon-lock"></el-input>
    </div>
    <div class="item">
      <el-button type="primary" round @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
import { app, protocol, BrowserWindow,Menu,Tray,remote } from 'electron'

var rightTemplate = [
    {
     label: '复制',
     accelerator: 'ctrl+c',
     
    },
    {type: 'separator'},
    {
     label:'粘贴',
     accelerator:'ctrl+v',
     
    }
]//设置右键菜单栏

var m = remote.Menu.buildFromTemplate(rightTemplate)
//启动右键监听函数
window.addEventListener('contextmenu',function(e){
        e.preventDefault()
        m.popup({window:remote.getCurrentWindow()})
    })

export default {
  
  name: 'Login',
  data () {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    
    login () {
      if (this.account === 'admin' && this.password === '123456') {
        this.$router.push('Home')
      } else {
        this.$message.error('用户名或密码错误')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.main
  margin-left 30px
  margin-right 30px
.avatar
  margin-top 40px
  margin-bottom 40px
button
  width 100%
.item
  margin-top 20px
</style>