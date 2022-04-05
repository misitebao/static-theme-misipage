import { createApp, ref } from "vue/dist/vue.esm-bundler.js";
// import App from "../../App.vue";

import useHeader from "@/hooks/useHeader.js";
import useFooter from "@/hooks/useFooter.js";

createApp({
  // 设置Vue模板文件渲染标记符,主要是为了避免和渲染引擎标记冲突
  compilerOptions: {
    delimiters: ["{[", "]}"],
    comments: true,
  },
  components: {
    // App,
  },
  setup() {
    const { name: headerName } = useHeader();
    const { name: footerName } = useFooter();

    const name = ref("index page");

    return {
      headerName,
      footerName,
      name,
    };
  },
}).mount("#app");
