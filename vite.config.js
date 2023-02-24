import { fileURLToPath, URL } from 'url';
import { extname } from 'path';

import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    createHtmlPlugin({
      minify: false,
      pages: [
        {
          // entry: "src/main.ts",
          template: 'index.html',
          filename: 'index.html',
          injectOptions: {
            data: {
              title: 'MisiPage - Static Homepage Theme',
              description: 'Static personal homepage developed with AlpineJS and Tailwind CSS',
            },
          },
        },
        {
          template: '404.html',
          filename: '404.html',
          injectOptions: {
            data: {
              title: '404',
              description: '',
            },
          },
        },
        {
          template: 'projects.html',
          filename: 'projects.html',
          injectOptions: {
            data: {
              title: 'Projects',
              description: '',
            },
          },
        },
        {
          template: 'videos.html',
          filename: 'videos.html',
          injectOptions: {
            data: {
              title: 'Videos',
              description: '',
            },
          },
        },
        {
          template: 'sponsors.html',
          filename: 'sponsors.html',
          injectOptions: {
            data: {
              title: '赞助',
              description: '',
            },
          },
        },
        {
          template: 'about.html',
          filename: 'about.html',
          injectOptions: {
            data: {
              title: 'About',
              description: '',
            },
          },
        },
        {
          template: 'links.html',
          filename: 'links.html',
          injectOptions: {
            data: {
              title: 'Links',
              description: '',
            },
          },
        },
        {
          template: 'post.html',
          filename: 'post.html',
          injectOptions: {
            data: {
              title: 'Post',
              description: '',
            },
          },
        },
        {
          template: 'post-list.html',
          filename: 'post-list.html',
          injectOptions: {
            data: {
              title: 'Post List',
              description: '',
            },
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      input: {},
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: `assets/js/chunk/[name].js`,
        assetFileNames: function (chunkInfo) {
          console.log(chunkInfo.name);
          let assetFileNames = 'assets/[name].[ext]';
          let extMapping = {
            images: ['.jpg', '.png'],
            fonts: ['.ttf', '.woff2'],
            styles: ['.css'],
          };

          for (const extType in extMapping) {
            if (extMapping[extType].indexOf(extname(chunkInfo.name)) != -1) {
              assetFileNames = `assets/${extType}/[name].[ext]`;
            }
          }

          return assetFileNames;
        },
      },
    },
  },
});
