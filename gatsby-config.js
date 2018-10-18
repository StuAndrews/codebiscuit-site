const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Code Biscuit',
        siteUrl: 'https://codebiscuit.com',
        menuLinks: [
            {
                name: 'Home',
                link: '/',
                description: 'Back home',
            },
            {
                name: 'Your Data',
                link: '/data',
                description: 'Because good healthy data is the lifeblood of your business',
            },
            {
                name: 'Your Tools',
                link: '/tools',
                description: 'Because the best tools are critical to your business',
            },
            {
                name: 'Get In Touch',
                link: '/getintouch',
                description: "We'd love to hear from you",
            }
        ]
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: path.join(__dirname, 'src', 'images')
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
    ],
};