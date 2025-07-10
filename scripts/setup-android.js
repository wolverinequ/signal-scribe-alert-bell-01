const { execSync } = require('child_process');

function runCommand(command) {
  console.log(`🔄 Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ Completed: ${command}`);
  } catch (error) {
    console.error(`❌ Failed: ${command}`);
    throw error;
  }
}

function setupAndroid() {
  console.log('🚀 Setting up Android project...');
  
  // Build the web app
  runCommand('npm run build');
  
  // Add Android platform
  runCommand('npx cap add android');
  
  // Sync Capacitor
  runCommand('npx cap sync');
  
  // Copy native files
  runCommand('node scripts/copy-native-files.js');
  
  console.log('✨ Android setup complete! You can now build the APK.');
  console.log('📱 Run: cd android && .\\gradlew assembleDebug');
}

setupAndroid();