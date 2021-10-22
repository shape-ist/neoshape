import path from 'path'
import svelteSVG from 'vite-plugin-svelte-svg'

const config = {
    kit: {
        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        vite: {
            resolve: {
                alias: {
                    '@lib': path.resolve('./src/lib'),
                    '@static': path.resolve('./static'),
                }
            },
            plugins: [
                svelteSVG({
                    svgoConfig: {}, // See https://github.com/svg/svgo#configuration
                }),
            ],
        }
    }
};

export default config;