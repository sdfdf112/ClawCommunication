const line = '- [x] 前后端分离（server.js + ui/index.html）';
console.log('Testing line:', line);

const match = line.match(/^(- \[[ x~]\])(.+)$/);
console.log('match:', match);

if (match) {
  const statusChar = line.match(/^(- \[)([ x~])(\])/)[2];
  console.log('statusChar:', statusChar);
  
  const newContent = '测试修改内容';
  const result = `- [${statusChar}] ${newContent}`;
  console.log('result:', result);
}
