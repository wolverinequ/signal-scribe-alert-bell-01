const fs = require('fs');
const path = require('path');

function copyFile(src, dest) {
  const destDir = path.dirname(dest);
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }
  
  fs.copyFileSync(src, dest);
  console.log(`✅ Copied: ${src} → ${dest}`);
}

function copyNativeFiles() {
  console.log('📁 Copying native files...');
  
  // Copy Android files
  const androidSrcDir = 'native-src/android';
  const androidDestDir = 'android/app/src/main/java/com/example/app';
  
  if (fs.existsSync(androidSrcDir)) {
    const files = fs.readdirSync(androidSrcDir);
    files.forEach(file => {
      if (file.endsWith('.java')) {
        copyFile(
          path.join(androidSrcDir, file),
          path.join(androidDestDir, file)
        );
      }
    });
  }
  
  console.log('✨ Native files copied successfully!');
}

copyNativeFiles();