import type { Config } from 'tailwindcss'
import themer from 'tailwindcss-themer'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {},
    extend: {
      listStyleType: {
        square: 'square',
      },
    },
  },
  plugins: [
    themer({
      defaultTheme: {
        extend: {
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
        },
      },
      themes: [
        {
          name: 'printable',
          extend: {
            colors: {
              text: '#000',
              background: '#fff',
              paper: '#fff',
              divider: '#aaa',
              bullet: '#666',
              section: '#000',
              subsection: '#444',
              avatar: '#888',
              details: '#666',
              link: '#000',
              decoration: '#fff',
            },
          },
        },
      ],
    }),
  ]
} satisfies Config

// https://blog.logrocket.com/creating-custom-themes-tailwind-css/
// https://github.com/unjs/jiti
// https://github.com/adoxography/tailwind-scrollbar
