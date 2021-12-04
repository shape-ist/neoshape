import path from 'path';

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    vite: {
      resolve: {
        alias: {
          '@lib': path.resolve('./src/lib'),
          '@static': path.resolve('./static'),
        },
      },
    },
  },
};

export default config;
