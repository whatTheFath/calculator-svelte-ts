import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
  },

  onwarn: (warning, handler) => {
    const { code, frame } = warning
    if (code === 'css-unused-selector') return

    handler(warning)
  },
}

export default config
