/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#97dd1e',
                    50: '#f4fce8',
                    100: '#e6f8cc',
                    200: '#d1f2a0',
                    300: '#b5ea6d',
                    400: '#97dd1e',
                    500: '#78c00f',
                    600: '#5d9908',
                    700: '#48780a',
                    800: '#3b5f0d',
                    900: '#32500f',
                    950: '#192c03',
                    foreground: '#000000',
                },
                dark: {
                    bg: '#0a0a0a',
                    card: '#1a1a1a',
                    border: '#333333',
                    text: '#f5f5f5',
                }
            },
            fontFamily: {
                sans: ['Inter Variable', 'Inter', 'ui-sans-serif', 'system-ui'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'float': 'float 3s ease-in-out infinite',
                'marquee': 'marquee 20s linear infinite',
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
                'progress-fill': 'progressFill 3s ease-in-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    '0%': { transform: 'translateY(0)' },
                    '100%': { transform: 'translateY(-50%)' },
                },
                pulseGlow: {
                    '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
                    '50%': { opacity: '0.8', transform: 'scale(1.1)' },
                },
                progressFill: {
                    '0%': { width: '0%' },
                    '100%': { width: '98%' },
                }
            }
        },
    },
    darkMode: 'class',
    plugins: [],
}
