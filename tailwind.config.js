module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        freigeist: ['Freigeist'],
        freigeistwide: ['Freigeist Wide'],
        euclid: ['Euclid Circular B'],
        freigeistlight: ['Freigeist Light']
      },
      colors: {
        dpyellow: '#FFC400',
        dplightyellow: '#FFC35E',
        dplightpurple: '#DC98FF',
        dplightblue: '#54BBFF',
        dpdarkyellow: '#FFAD00',
        dpdarkpurple: '#B729FF',
        dpdarkblue: '#00A8FF',
        dplightgrey: '#F0F1F4',
        dpgrey: '#676767',
        dpdarkgrey: '#E2E2E2',
        dpoffwhite: '#F5F0F5',
        // dpdark: '#1C1C27',
        // dpdarklight: '#28293E',
        dpdarklighter: '#42426A',
        dpblack: '#1C1C1C',
        dpdark: '#000000',
        dpdarklight: '#1C1C1F'

      }
    },
    screens: {
      xs: '370px',
      sm: '640px',
      md: '768px',
      mdlg: '896px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },

  bgimage2 : {url: '/img/makeroom/makeroom2.png'},
  plugins: []
}
