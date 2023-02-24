export function init(params) {
  const giscusElement = document.querySelector('#giscus');
  if (!giscusElement) return;

  const giscusConfig = window.defaultConfig.comments.giscus;
  const theme = giscusConfig.theme || window.Alpine.store('theme').theme;

  const giscusAttributes = {
    src: 'https://giscus.app/client.js',
    'data-repo': giscusConfig['repo'],
    'data-repo-id': giscusConfig['repo-id'],
    'data-category': giscusConfig['category'],
    'data-category-id': giscusConfig['category-id'],
    'data-mapping': giscusConfig['mapping'],
    'data-strict': giscusConfig['strict'],
    'data-reactions-enabled': giscusConfig['reactions-enabled'],
    'data-emit-metadata': giscusConfig['emit-metadata'],
    'data-input-position': giscusConfig['input-position'],
    'data-theme':
      window.location.protocol +
      '//' +
      window.location.host +
      '/assets/styles/giscus/themes/' +
      theme +
      '.css',
    'data-lang': window.defaultConfig.lang,
    crossorigin: 'anonymous',
    async: '',
    // 'data-loading': 'lazy',
  };

  const giscusScript = document.createElement('script');

  Object.entries(giscusAttributes).forEach(([key, value]) => giscusScript.setAttribute(key, value));

  document.body.appendChild(giscusScript);
}
