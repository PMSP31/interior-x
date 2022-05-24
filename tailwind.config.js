module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'herro-img': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('../image/living-room.jpg')"
      },
      colors: {
        primary: '#0f766e',
        contact: '#e9eafc'
      },
      transitionProperty: {
        'width': 'width'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
