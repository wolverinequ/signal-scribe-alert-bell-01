import { WebPlugin } from '@capacitor/core';

import type { SafPluginInterface } from './SafPlugin';

export class SafPluginWeb extends WebPlugin implements SafPluginInterface {
  async openDocumentPicker(): Promise<{ uri: string; name?: string; success: boolean }> {
    console.log('SAF Plugin: Web implementation - falling back to file input');
    
    return new Promise((resolve, reject) => {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.txt,text/plain';
      fileInput.style.display = 'none';
      
      fileInput.onchange = (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          // For web, we can't get a persistent URI, so we'll return the file name
          resolve({
            uri: `web_file://${file.name}`,
            name: file.name,
            success: true
          });
        } else {
          reject(new Error('No file selected'));
        }
        document.body.removeChild(fileInput);
      };
      
      fileInput.oncancel = () => {
        reject(new Error('File selection cancelled'));
        document.body.removeChild(fileInput);
      };
      
      document.body.appendChild(fileInput);
      fileInput.click();
    });
  }

  async writeToSafUri(options: { uri: string; content: string }): Promise<{ success: boolean; error?: string }> {
    console.log('SAF Plugin: Web implementation - cannot write to SAF URI');
    return {
      success: false,
      error: 'SAF write not supported on web platform'
    };
  }
}