const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const match = html.match(/<script>([\s\S]*)<\/script>/);
if (match) {
  try {
    new Function(match[1]);
  } catch (e) {
    console.error('JS syntax error:', e.message);
    process.exit(1);
  }
}
