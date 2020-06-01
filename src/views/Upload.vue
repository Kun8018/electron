<template>
<div>
<el-page-header @back="goBack" content="详情页面">
</el-page-header>
  <textarea id="txtEditor"></textarea>
</div>

</template>
  
 <style type="text/css">
    body,html{
        margin:0px;
        height:100%;
    }
    
    #txtEditor{
        width:100%;
        height:99.535%;
        padding:0px;
        margin:0px;
        border:0px;
        font-size: 18px;
    }
  </style>
<script>
var fs = require('fs') 

fs.readdir('../', function (err, files) { 
  if (err) 
  {    
      return console.log('目录不存在')  
  } 
   console.log(files)
})



export default {
  name: 'Upload',
  
}
</script>
