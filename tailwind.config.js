/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "Kumbh": ["Kumbh Sans"],
    },
    extend: {
      colors: {
        button: {
          100: "hsl(25, 100%, 94%)",
          200: "hsl(26, 100%, 55%)",
        },
        texts: {
          100: "hsl(223, 64%, 98%)",
          200: "hsl(220, 14%, 75%)",
          300: "hsl(219, 9%, 45%)",
          400: "hsl(220, 13%, 13%)",
        },
      },
    },
  },
  plugins: [],
};
