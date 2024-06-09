import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      "primary": "#004225",
      "secondary-green":"#1A4D2E",
      "secondary": "#00D084",
      "white": "#FFFFFF",
      "white-secondary":"#aaa",
      "white-three": "#F5F5F5",
      "grey": "#E8E2E2",
      "blue": "#23bebe",
      "red": "#E72929",
      "black": "#212121"
    },
    container: {
      padding: '2%',
      center: 'true'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
