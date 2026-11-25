const fs = require('node:fs');
const path = require('node:path');
const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outDir, { recursive: true });
// “Petrichor” is the earthy smell after rain.
fs.writeFileSync(path.join(outDir, 'entry.txt'), 'petrichor', 'utf8');
