const path = require('path');

module.exports = {
    siteMetadata: {
        title: 'Code Biscuit',
        siteUrl: 'https://codebiscuit.com',
        author: {
            minibio: `
                <strong>Code Biscuit</strong> is run by <strong>Stu & Rach Andrews</strong>, passionate
                Business IT evangelists and thought-leaders. They live in Sydney, Australia.
            `,
        },
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