module.exports = function(config) {

    let configWebpack = config.webpack;

    // 模板loader
    const templateRules = {
        html: {
            test: /\.html$/,
            loader: 'html-loader'
        },
        pug: {
            test: /\.pug$/,
            loader: 'pug-loader'
        },
        handlebars: {
            test: /\.handlebars$/,
            loader: 'handlebars-loader'
        },
        ejs: {
            test: /\.ejs$/,
            loader: 'ejs-compiled-loader',
            query: {
                'htmlmin': true, // or enable here  
                'htmlminOptions': {
                    removeComments: true
                }
            }
        }
    };

    let rules = [];

    configWebpack.template.forEach((tpl) => {
        let rule = templateRules[tpl] || '';
        rule && rules.push(rule);
    });

    return rules;
};