import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        "primary":"#1a8cd8",
      },
      space:{
        "26":"40px"
      },
      boxShadow:{
        "normal":"0px 0px 5px rgb(0 0 0 / 0.2);",
        "modal":"4px 4px 5px rgba(0, 0, 0, 0.2)"
      },
      screens:{
        "xs":"520px"
      }
    },
  },
  plugins: [],
}
export default config
