export default {
    content: [
        './templates/**/*.twig',
        './src/**/*.js',
        './src/**/*.css'
    ],
    theme: {
        extend: {},
        colors: {
            primary: '#2f5c2d', // Green
            secondary: '#e6d6d1', // Cream
            gray: {
                lighter: '#BCBDC0',
                DEFAULT: '#8A8D91',
                darker: '#565857'
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