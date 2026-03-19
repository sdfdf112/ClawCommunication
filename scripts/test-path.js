const path = require('path');
const __dirname_test = 'E:\\ClawCommunication\\scripts';
const BASE_DIR = path.join(__dirname_test, '..');
const msgDir = path.join(BASE_DIR, 'messages');
const discDir = path.join(msgDir, '..', 'discussions');
const fs = require('fs');

console.log('BASE_DIR:', BASE_DIR);
console.log('msgDir:', msgDir);
console.log('discDir:', discDir);
console.log('discDir exists:', fs.existsSync(discDir));
console.log('discDir files:', fs.readdirSync(discDir).filter(f => f.endsWith('.md')));
