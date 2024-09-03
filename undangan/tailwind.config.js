/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs,js}"],
  theme: {
    fontFamily: {
      kufi: ["kufi", "sans-serif"],
      zilla:["Zilla Slab", "system-ui"]
    },
    extend: {
      backgroundImage: {
        'bg-m': "url('/images/Background.gif')",
        'bg-platen':"url('/images/platen.gif')",
        'aw' :"url('/images/bg-0.gif')",
        'start':"url('/images/start.png')",
        'bg-1':"url('/images/bg-1.gif')"
      },
      backgroundSize: {
        '108%':'108%',
        '100%' : '100%',
        '150%':'150%',
        'hv':'auto 100%',
        'vw':'100vw'
      },
      colors: {
        'turqu':"#2a7060",
        'turqu-prime':'#3baca3',
        'text1':'#f4d390'
      },
      animationDelay: {
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        // tambahkan lebih banyak delay jika diperlukan
      },
      animation: {
        zoo: 'zoo 3s',
        zoo2: 'zoo2 3s',
        logo: 'logo 3s',
        zhv:'zhv 3s',
        zhv2:'zhv2 3s',
        masjid :'masjid 1s linear',
        'masjid-lg':'masjid-lg 1s linear',
        'masjid-b' :'masjid-b 1s linear',
        'masjid-lg-b':'masjid-lg-b 1s linear',
        'bintang-show' : 'bintang-show 3s ease-in-out',
        'bintang-hidd' : 'bintang-hidd 3s ease-in-out'
      },
      keyframes: {
        zoo: {
          '0%': { 'background-size': '150%'},
          '100%': { 'background-size': '100%' },
        },
        zoo2: {
          '0%': { 'background-size': '150%'},
          '100%': { 'background-size': '108%' },
        },
        zhv: {
          '0%': { 'background-size': 'auto 150%'},
          '100%': { 'background-size': ' auto 100%' },
        },
        zhv2: {
          '0%': { 'background-size': 'auto 150%'},
          '100%': { 'background-size': ' auto 108%' },
        },
        logo: {
          '0%, 35%':{opacity : '0'},
          '100%':{opacity:'1'}
        },
        masjid:{
          '0%':{transform: 'scaleY(0)',opacity :'0',transform: 'translateY(12rem)'},
          '100%':{transform: 'scaleY(1)',opacity:'1',transform: 'translateY(0rem)'}
        },
        'masjid-lg':{
          '0%':{transform: 'scaleY(0)',opacity :'0',transform: 'translateY(16rem)'},
          '100%':{transform: 'scaleY(1)',opacity:'1',transform: 'translateY(0rem)'}
        },
        'masjid-b':{
          '100%':{transform: 'scaleY(1)',opacity :'1',transform: 'translateY(0rem)'},
          '0%':{transform: 'scaleY(0)',opacity:'0',transform: 'translateY(12rem)'}
        },
        'masjid-lg-b':{
          '100%':{transform: 'scaleY(1)',opacity :'1',transform: 'translateY(0rem)'},
          '0%':{transform: 'scaleY(0)',opacity:'0',transform: 'translateY(16rem)'}
        },
        'bintang-show':{
            '0%':{transform:'translateY(-2rem)',opacity:'0'},
          '100%':{transform:'translateY(0rem)',opacity:'1'}
        },
        'bintang-hidd':{
            '0%':{transform:'translateY(2rem)',opacity:'0'},
          '100%':{transform:'translateY(0rem)',opacity:'1'}
        }
      },
      gridTemplateColumns:{
        'stack':'repeat(12,1fr)'
      },
      gridRow:{
        'satu':'1',
        'dua':'2'
      },
      gridColumn:{
        'del':'8',
        'pat':'4'
      },
      height:{
        'h-screen-90':'90vh',
        'h-screen-80':'80vh'
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const utilities = Object.entries(theme('animationDelay')).map(([key, value]) => {
        return {
          [`.${e(`delay-${key}`)}`]: { animationDelay: value },
        };
      });
      addUtilities(utilities);
    }
  ],
}
