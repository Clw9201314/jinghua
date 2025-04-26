// clean_blockAds.js
const fetch = require('node-fetch');
const fs = require('fs');

const SOURCE_URL = 'https://github.com/fmz200/wool_scripts/raw/main/Loon/plugin/blockAds.plugin';
const OUTPUT_FILE = 'blockAds_clean.plugin';

async function cleanPlugin() {
  const response = await fetch(SOURCE_URL);
  const text = await response.text();

  // 删除所有 pangolin-sdk-toutiao.com 相关内容
  const cleanedText = text.replace(/.*pangolin-sdk-toutiao.*\n?/g, '');

  // 保存为新的 plugin 文件
  fs.writeFileSync(OUTPUT_FILE, cleanedText);
  console.log('已生成清理后的插件：', OUTPUT_FILE);
}

cleanPlugin();
