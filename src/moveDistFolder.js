const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

// SOURCE_PATH = D:\\source\\typescript-handbook\\dist
// DIST_PATH = D:\\source\\typescript-handbook\\dist\\vue_approval
// BUILD_PATH = D:\\source\\typescript-handbook\\vue_approval

const sourcePath = path.join(process.env.SOURCE_PATH); // dist 폴더 경로
const destinationPath = path.join(process.env.DIST_PATH); // 목적지 경로
const buildPath = path.join(process.env.BUILD_PATH);

// 폴더 내부의 파일 및 폴더 목록 가져오기
const items = fs.readdirSync(sourcePath);

// 파일 및 폴더를 확인하고 처리
items.forEach(item => {
    console.log('item : ', item);
    const itemPath = path.join(sourcePath, item);

    // 파일인지 확인
    const isFile = fs.statSync(itemPath).isFile();

    if (isFile) {
        // 파일일 경우 dist/vue_approval 경로로 이동
        const newFilePath = path.join(destinationPath, item);
        console.log("old : ", itemPath);
        console.log("new : ", newFilePath);
        fs.renameSync(itemPath, newFilePath);
        console.log(`Moved file: ${itemPath} to ${newFilePath}`);
    }

});

const backupDate = '' + new Date().getFullYear() + (new Date().getMonth() + 1).toString().padStart(2, '0') + new Date().getDate() + 'T' + new Date().getHours() + new Date().getMinutes() + new Date().getSeconds();

// 이전 파일 백업처리
fs.renameSync(buildPath, buildPath + '_bk_' + backupDate);

// 신규 파일들 빌드경로로 이동
fs.renameSync(destinationPath, buildPath);
console.log('File movement completed.');
