module.exports = {
    files: [
        "src",
        "tools",
        "config",
        "README.md",
        ".eslintrc.js",
        ".eslintignore",
        ".stylelintrc.js",
        "postcss.config.js",
        ".gitignore",
        ".babelrc",
    ],
    options: [
        {
            type: 'input',
            name: 'webserver',
            message: 'html url(//localhost:9000/)',
            default: "//localhost:9000/",
        },
        {
            type: 'input',
            name: 'cdn',
            message: 'common cdn url(//localhost:8000/)',
            default: "//localhost:8000/",
        },
        {
            type: 'input',
            name: 'cssCdn',
            message: 'css cdn url(//localhost:8000/)',
            default: "//localhost:8000/",
        },
        {
            type: 'input',
            name: 'imgCdn',
            message: 'img cdn url(//localhost:8000/)',
            default: "//localhost:8000/",
        },
        {
            type: 'input',
            name: 'port',
            message: 'development server port(9000)',
            default: '9000',
        },
        {
            type: 'input',
            name: 'route',
            message: 'development server directory(/news/)',
            default: '/news/',
        }
    ]
};