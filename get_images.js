const https = require('https');

function searchImages(query) {
  return new Promise((resolve) => {
    https.get(`https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data).results.map(r => r.id));
        } catch(e) {
          resolve([]);
        }
      });
    });
  });
}

(async () => {
  console.log("Notebooks:", (await searchImages("notebooks stacking")).slice(0,3));
  console.log("Paper rolls:", (await searchImages("paper manufacturing rolls")).slice(0,3));
  console.log("Stationery layout:", (await searchImages("clean stationery flatlay")).slice(0,3));
  console.log("Warehouse boxes:", (await searchImages("warehouse shipping boxes stack")).slice(0,3));
  console.log("School desk:", (await searchImages("student desk notebook pen")).slice(0,3));
})();
