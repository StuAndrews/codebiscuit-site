module.exports = {
    siteMetadata: {
        title: 'Code Biscuit',
        siteUrl: 'https://codebiscuit.com',
        description: 'The best tech byte for your business',
        keywords: 'business technology, technology solutions, it project, systems review, problem solving',
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js',
            },
        },
        'gatsby-plugin-react-helmet',
    ],
};