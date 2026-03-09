const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'Client', 'src', 'pages');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(directoryPath, function(filePath) {
  if (filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace 'min-h-screen bg-spiritual-cream' 
    let newContent = content.replace(/min-h-screen\s+bg-spiritual-cream/g, 'min-h-screen');
    // Also handle possible reverse
    newContent = newContent.replace(/bg-spiritual-cream\s+min-h-screen/g, 'min-h-screen');
    
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log('Updated:', filePath);
    }
  }
});
