import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      text: '#fff',
      background: 'rgb(24, 24, 27)',
      paper: 'rgb(39, 39, 42)',
      divider: 'rgb(2, 132, 199)',
      bullet: 'rgb(74, 222, 128)',
      section: 'rgb(125, 211, 252)',
      subsection: 'rgb(56, 189, 248)',
      avatar: 'rgb(7, 89, 133)',
      details: 'rgb(161, 161, 170)',
      link: 'rgb(56, 189, 248)',
      decoration: 'rgb(7, 89, 133)',
    },
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
