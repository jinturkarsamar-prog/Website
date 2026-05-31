const https = require('https');

https.get(`https://unsplash.com/napi/search/photos?query=notebooks`, {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' }
}, (res) => {
  console.log('STATUS:', res.statusCode);
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
      console.log(data.slice(0, 100));
  });
});
