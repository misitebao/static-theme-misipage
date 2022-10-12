export default () => ({
  theme: 'light',
  init() {
    console.log('init');

    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.theme = 'dark';
    } else {
      this.theme = 'light';
    }
  },
  change(theme) {
    this.theme = theme;
    localStorage.theme = theme;
  },
});
