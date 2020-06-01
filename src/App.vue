<template>

  <div id="app">
  
  <a-layout id="components-layout-demo-custom-trigger">
  <a-layout-sider :trigger="null" collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <a-menu-item key="1">
          <a-icon type="user" />
          <span>用户</span>
           <router-link to="/Login"></router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="upload"  />
          <span>上传</span>
          <router-link to="/Upload">Upload</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <a-icon type="video-camera" />
          <span>相册</span>
          <router-link to="/Photo">Photo</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <a-icon type="hdd" />
          <span>首页</span>
          <router-link to="/"></router-link>
        </a-menu-item>
        <a-menu-item key="5">
          <a-icon type="hdd" />
          <span>文件</span>
          <router-link to="/File"></router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content
        :style="{padding: '24px', background: '#fff', minHeight: '600px' }"
      >
       
    <router-view/>
      </a-layout-content>
      </a-layout>
    
  </div>
</template>

<script>

import { app, protocol, BrowserWindow,Menu,Tray,remote } from 'electron'

import { Titlebar, Color } from 'custom-electron-titlebar'

var titlebar = new Titlebar({
	backgroundColor: Color.fromHex('#FF4500'),
  icon: './assets/logo.png',
  
});


titlebar.updateTitle('嘿嘿嘿')

import Calculator from './components/Calculator.vue'

export default {
  
  data() {
    return {
      collapsed: false,
    };
  },
  name:'App',
  components:{
     Calculator 
  },
  methods: {
    
  },
}
</script>

<style lang="stylus">
#components-layout-demo-custom-trigger .trigger {
  font-size: 14px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #000000;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height :100%
</style>
