const fs = require('fs');
const path = require('path')

const folderPath = __dirname;

fs.readdir(folderPath, (err,files)=>{
  console.log(files)
});

