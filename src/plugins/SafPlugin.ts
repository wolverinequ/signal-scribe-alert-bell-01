import { registerPlugin } from '@capacitor/core';

export interface SafPluginInterface {
  openDocumentPicker(): Promise<{ uri: string; name?: string; success: boolean }>;
  writeToSafUri(options: { uri: string; content: string }): Promise<{ success: boolean; error?: string }>;
}

const SafPlugin = registerPlugin<SafPluginInterface>('SafPlugin', {
  web: () => import('./SafPluginWeb').then(m => new m.SafPluginWeb()),
});

export default SafPlugin;