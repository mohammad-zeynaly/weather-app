/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily:{
      montserrat : ['montserrat-Regular','montserrat-Medium','montserrat-SemiBold','montserrat-Bold']
    },

    extend: {
      container : {
        center : true,
      }
    },

  },
  plugins: [],
}
