// 'use strict';

// const fileSystem = require('./src/fs/fileSystem')
// const userInterface = require('./src/fs/userInterface')

// function main() {
//     userInterface.bindDocument(window);

//     const folderPath = fileSystem.getUsersHomeFolder();

//     fileSystem.getFilesInFolder(folderPath, (err: any, files: any[]) => {
//       if (err) {
//         console.log('对不起，您没有加载您的home folder');
//       }
//       /*
//       files.forEach((file: any) => {
//         console.log(`${folderPath}/${file}`);
//       });
//       */
//      fileSystem.inspectAndDescribeFiles(folderPath, files, userInterface.displayFiles);
//     });
//   }
  
//   window.onload = function(){
//       main();
//   }
 