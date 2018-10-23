const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Code Biscuit',
        siteUrl: 'https://codebiscuit.com',
        menuLinks: [
            {
                name: 'Home',
                link: '/',
                description: '',
            },
            {
                name: 'Data',
                link: '/data',
                description: 'Because good healthy data is the lifeblood of your business',
            },
            {
                name: 'Tools + Training',
                link: '/tools',
                description: 'Because the best tools and knowing how to use them well matters',
            },
            {
                name: 'Blog',
                link: '/blog',
                description: "Providing thought-leadership in business tech",
            },
            {
                name: 'Get In Touch',
                link: '/getintouch',
                description: "We'd love to hear from you",
            },
            {
                name: 'Phone +614 2992 3075',
                link: 'tel:+61429923075',
                description: 'Give us a call',
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