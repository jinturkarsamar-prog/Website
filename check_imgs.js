import fs from 'fs';
import https from 'https';

const pages = fs.readdirSync('./src/pages').map(f => fs.readFileSync('./src/pages/' + f, 'utf-8'));
const urls = pages.map(c => c.match(/unsplash\.com\/photo-[0-9a-fA-F-]+/g) || []).flat();

const uniqueUrls = [...new Set(urls)];

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(`https://${url}`, (res) => {
      resolve(`${url} -> ${res.statusCode}`);
    });
  });
}

(async () => {
  for (const url of uniqueUrls) {
      console.log(await checkUrl(url));
  }
})();
