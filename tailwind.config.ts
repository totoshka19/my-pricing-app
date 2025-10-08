import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-montserrat)'],
                raleway: ['var(--font-raleway)'],
                gilroy: ['var(--font-gilroy)'],
            }
        },
    },
    plugins: [],
}
export default config
