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
          filename: 'index.html',
          template: 'index.html',
          injectOptions: {
            data: {
              title: 'MisiPage - Static Homepage Theme',
              description: 'Static personal homepage developed with AlpineJS and Tailwind CSS',
            },
          },
        },
        {
          filename: 'projects.html',
          template: 'projects.html',
          injectOptions: {
            data: {
              title: '项目',
              description: '',
            },
          },
        },
        // {
        //   filename: 'videos.html',
        //   template: 'videos.html',
        //   injectOptions: {
        //     data: {
        //       title: '视频',
        //     },
        //   },
        // },
        // {
        //   filename: 'about.html',
        //   template: 'about.html',
        //   injectOptions: {
        //     data: {
        //       title: '关于',
        //     },
        //   },
        // },
        // {
        //   filename: 'links.html',
        //   template: 'links.html',
        //   injectOptions: {
        //     data: {
        //       title: '友情链接',
        //     },
        //   },
        // },
        {
          filename: 'sponsors.html',
          template: 'sponsors.html',
          injectOptions: {
            data: {
              title: '赞助',
              description: '',
            },
          },
        },
        // {
        //   filename: '404.html',
        //   template: '404.html',
        //   injectOptions: {
        //     data: {
        //       title: '404',
        //     },
        //   },
        // },
      ],
    }),
    // (() => {
    //   return {
    //     name: 'vite-plugin',
    //     handleHotUpdate() {
    //       console.log('vite-plugin');
    //     },
    //     buildStart() {
    //       console.log('vite-plugin');
    //     },
    //   };
    // })(),
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
