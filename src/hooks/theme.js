export default {
  theme: 'light',
  init() {
    if (
      window.defaultConfig.theme == 'dark' ||
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }

    // window.addEventListener('load', changeGiscusTheme('this.theme'));
  },
  changeTheme(theme) {
    if (theme) {
      this.theme = theme;
      localStorage.theme = theme;
      window.defaultConfig.theme = theme;

      changeGiscusTheme(this.theme);
    } else {
      console.log('设置为根据系统');
    }
  },
};

function changeGiscusTheme(theme) {
  const iframe = document.querySelector('iframe.giscus-frame');
  if (!iframe) return;

  let themePath =
    window.location.protocol +
    '//' +
    window.location.host +
    '/assets/styles/giscus/themes/' +
    theme +
    '.css';

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: themePath,
          reactionsEnabled: true,
        },
      },
    },
    'https://giscus.app'
  );
}
