export default {
    content: [
        './templates/**/*.twig',
        './src/**/*.js',
        './src/**/*.css'
    ],
    theme: {
        extend: {},
        colors: {
            primary: { // Grey
                lightest: '#A29791',
                lighter: '#615A57',
                light: '#302D2D',
                DEFAULT: '#222020',
                dark: '#181616',
                darker: '#151212',
            },
            orange: {
                DEFAULT: '#CA5629',
            },
            green: {
                DEFAULT: '#48592D',
            },
            white: '#FFFFFF',
        },
        fontFamily: {
            primary: ['Roboto', 'sans-serif'],
            serif: ['Merriweather', 'serif']
        },
    },
    plugins: [],
}