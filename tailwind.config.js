/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",    // all files in app folder
    "./pages/**/*.{js,ts,jsx,tsx}",  // if you use pages directory
    "./components/**/*.{js,ts,jsx,tsx}",  // components folder
    "./src/**/*.{js,ts,jsx,tsx}"     // if your source code is in src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EE2720',    // Replace this with your primary color hex code
        secondary: '#F98C0D'   // Replace this with your secondary color hex code
      },
    },
  },
  plugins: [
    require('tailwindcss-animate')   // since you have tailwindcss-animate in deps
  ],
}