import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      listStyleType: {
        square: 'square',
      },
    },
  },
} satisfies Config

// https://blog.logrocket.com/creating-custom-themes-tailwind-css/
// https://github.com/unjs/jiti
// https://github.com/adoxography/tailwind-scrollbar
