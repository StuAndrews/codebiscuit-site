import Typography from "typography";

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.61,
    bodyWeight: 300,
    headerWeight: 700,
    boldWeight: 700,
    scaleRatio: 3.5,
    googleFonts: [
        { 
            name: 'Lato',
            styles: [
                '300',
                '300i',
                '700',
                '700i',
            ],
        },
    ],
    headerFontFamily: ['Lato','Helvetica Neue','Helvetica','Roboto','sans-serif'],
    bodyFontFamily: ['Lato','Helvetica Neue','Helvetica','Roboto','sans-serif'],
    overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
        'h1,h2,h3,h4': {
            textAlign: 'center',
        },
    }),
});

export default typography;