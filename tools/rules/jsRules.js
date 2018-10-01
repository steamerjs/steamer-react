module.exports = function(config) {
    let configWebpack = config.webpack;

    // js方言
    const jsRules = {
        ts: {
            test: /\.(tsx|ts)$/,
            loader: 'awesome-typescript-loader'
        }
    };

    let rules = [
        {
            test: /\.(js|jsx)$/,
            loader: 'happypack/loader?id=1',
            exclude: /node_modules/
        }
    ];

    configWebpack.js.forEach((tpl) => {
        let rule = jsRules[tpl] || '';
        rule && rules.push(rule);
    });

    return rules;
};
