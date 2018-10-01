module.exports = {
    plugins: [],
    presets: [
        ['@babel/env', {
            useBuiltIns: 'usage',
            modules: false
        }],
        '@babel/preset-react'
    ],
    env: {
        development: {
            plugins: [
                'react-hot-loader/babel'
            ]
        }
    }
};
