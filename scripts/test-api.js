const path = require('path');
const fs = require('fs');
const http = require('http');

// Load config like server does
const CONFIG = require('./config');

console.log('CONFIG.msgDir:', CONFIG.msgDir);

const discDir = path.join(CONFIG.msgDir, '..', 'discussions');
console.log('discDir:', discDir);
console.log('exists:', fs.existsSync(discDir));

const files = fs.readdirSync(discDir).filter(f => f.endsWith('.md')).sort().reverse();
console.log('files:', files);

const list = files.slice(0, 15).map(f => {
  const content = fs.readFileSync(path.join(discDir, f), 'utf8');
  const title = (content.match(/^#\s+(.+)$/m) || [])[1] || f;
  return { filename: f, title, date: f.slice(0,10) };
});

console.log('list:', JSON.stringify(list, null, 2));
