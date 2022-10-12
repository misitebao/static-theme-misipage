import { fileURLToPath, URL } from 'url';

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
              title: '首页',
            },
          },
        },
        // {
        //   filename: 'projects.html',
        //   template: 'projects.html',
        //   injectOptions: {
        //     data: {
        //       title: '项目',
        //     },
        //   },
        // },
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
        // {
        //   filename: 'sponsors.html',
        //   template: 'sponsors.html',
        //   injectOptions: {
        //     data: {
        //       title: '赞助',
        //     },
        //   },
        // },
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
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
});
