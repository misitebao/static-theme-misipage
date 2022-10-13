export default () => ({
  theme: 'light',
  init() {
    console.log('init');

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.theme = 'dark';
      changeGiscusTheme('dark');
    } else {
      this.theme = 'light';
      changeGiscusTheme('light');
    }
  },
  change(theme) {
    this.theme = theme;
    localStorage.theme = theme;
    changeGiscusTheme(theme);
  },
});

function changeGiscusTheme(theme) {
  const iframe = document.querySelector('iframe.giscus-frame');
  console.log(iframe);
  if (!iframe) return;

  iframe.contentWindow.postMessage(
    {
      giscus: {
        setConfig: {
          theme: theme,
        },
      },
    },
    'https://giscus.app'
  );
}
