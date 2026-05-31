const https = require('https');
https.get('https://html.duckduckgo.com/html/?q=site:unsplash.com+factory+machine', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
      const links = data.match(/https:\/\/unsplash\.com\/photos\/[a-zA-Z0-9-]+/g) || [];
      console.log(links.slice(0, 5));
  });
});
