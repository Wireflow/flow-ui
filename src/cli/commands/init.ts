import fs from 'fs';
import path from 'path';

const defaultConfig = {
  theme: {
    mode: 'light',
    colors: {
      primary: '#007AFF',
      secondary: '#5856D6',
      background: '#FFFFFF',
      text: '#000000',
    },
    spacing: {
      small: 8,
      medium: 16,
      large: 24,
    },
    typography: {
      fontSize: {
        small: 12,
        medium: 16,
        large: 20,
      },
      fontWeight: {
        normal: '400',
        bold: '700',
      },
    },
  },
};

export function init(): void {
  const configPath = path.join(process.cwd(), 'components.json');

  if (fs.existsSync(configPath)) {
    console.log('components.json already exists. Skipping initialization.');
    return;
  }

  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));
  console.log('Created components.json with default configuration.');
}
