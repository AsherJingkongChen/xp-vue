import { defineConfig } from 'cypress';
import { preview } from './vite.config';

const baseUrl = `http://${preview.host}:${preview.port}/`;

export default defineConfig({
  component: {
    specPattern: 'test/unit/**/*.test.ts',
    devServer: {
      bundler: 'vite',
      framework: 'vue',
    },
    indexHtmlFile: 'index.html',
    supportFile: false,
  },
  e2e: {
    baseUrl,
    specPattern: 'test/e2e/**/*.test.ts',
    screenshotOnRunFailure: false,
    supportFile: false,
    video: false,
  },
});
