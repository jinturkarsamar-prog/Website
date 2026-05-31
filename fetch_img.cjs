const fs = require('fs');
const https = require('https');
https.get("https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200", {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/91.0.4472.124 Safari/537.36' }
}, function(res) {
  console.log("Status:", res.statusCode);
});
