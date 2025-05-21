/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      colors:{
        Text:'#FAFAFA',
        Text1:'#7D8184',
        Text2:'#000000',
        Secondary2:'#DB4444',
        Button:'#000000',
        Button1:'#00FF66',
        Button2:'#DB4444',
        HoverButton:'#E07575',
        Secondary:'#F5F5F5',
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sl: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xl2: "1536px",
      },
    },
  },
  plugins: [],
}

