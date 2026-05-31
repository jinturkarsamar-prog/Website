const https = require('https');
https.get('https://unsplash.com/napi/search/photos?query=notebook', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data).results.map(r => r.id).slice(0,5).join(',')));
});
