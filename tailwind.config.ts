import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'robot': "url('/robot.jpg')",
        'robot-lg': "url('/robot-lg.jpg')",
      },
      listStyleType: {
        square: 'square',
      },
      screens: {
        print: {
          raw: 'print',
        },
      },
    },
  },
} satisfies Config
