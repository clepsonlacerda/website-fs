import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#242a2b',
        secondary: '#808080',
        accent: {
          DEFAULT: '#1cbccf',
          secondary: '#18abbc',
          tertiary: '#90c6cd',
        },
        grey: '#e8f0f1',
        fspurple: '#9966FF',
        fsblue1: '#336699',
        fsblue2: '#3399CC',
        fsdark1: '#0F0F0D',
        fsdark2: '#18181B',
        fsdark3: '#1A1A1A',
        fsgray1: '#242424',
        fsgray2: '#313131',
        fsgray3: '#A1A1AA',
        fswhite: '#F5F6F7',
      },
      fontFamily: {
        primary: 'Inter'
      },
      boxShadow: {
        custom1: '0px 2px 40px 0px rgba(8, 70, 78, 0.08)',
        custom2: '0px 0px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        services: 'url(/assets/img/services/bgfs.svg)',
        testimonials: 'url(/assets/img/testimonials/bg.svg)',
        departments: 'url(/assets/img/departments/bg.svg)',
        quoteLeft: 'url(/assets/img/testimonials/quote-left.svg)',
        quoteRight: 'url(/assets/img/testimonials/quote-right.svg)',
      }
    }
  },
  plugins: [],
};
export default config;
