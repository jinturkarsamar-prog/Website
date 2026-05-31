const https = require('https');

function searchWiki(query) {
  return new Promise((resolve) => {
    https.get(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=pageimages&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=5&pithumbsize=800`, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const pages = JSON.parse(data).query.pages;
          const images = Object.values(pages).map(p => p.thumbnail?.source).filter(Boolean);
          resolve(images);
        } catch(e) {
          resolve([]);
        }
      });
    });
  });
}

(async () => {
  console.log("Notebook:", await searchWiki("notebook paper stack product"));
  console.log("Factory:", await searchWiki("paper mill machine interior"));
})();
