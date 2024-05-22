/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': "url('./src/img/show_image.jpeg')",
        'Bg_Infantil_1':  "url('./src/img/Bg_Infantil_1.jpg')",
        'Bg_Infantil_2':  "url('./src/img/Bg_Infantil_2.jpg')", 
        'Bg_Infantil_3':  "url('./src/img/Bg_Infantil_3.jpg')",
        'Bg_Infantil_4':  "url('./src/img/Bg_Infantil_4.jpg')"
      }
    },
  },
  plugins: [],
}

