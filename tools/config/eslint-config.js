module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
            "modules": true,
            "spread" : true,
            "restParams" : true
        },
        "sourceType": "module"
    },
    "plugins": [
        "babel",
        "react",
    ],
    rules: {
        // "indent": [2, 'tab', {SwitchCase: 1, VariableDeclarator: 1, ObjectExpression: 2}],
        "no-console": 0,
        "no-redeclare": 0,
        "no-sparse-arrays": 0,
        "one-var-declaration-per-line": [2, "always"],
        "no-mixed-spaces-and-tabs": 0,
        "semi": 2,
        "react/jsx-uses-vars": 1,
        "no-undef": 1,
        "no-unused-vars": [1, {"args": "none", "varsIgnorePattern": "React|Preact|Root|h"}],
        "babel/new-cap": [1, {"capIsNew": false}],
        // "babel/object-curly-spacing": 1,
        "babel/no-await-in-loop": 1,
        "babel/flow-object-type": 1,
        "babel/no-invalid-this": 0
    },
    "globals": {
        "React": true,
        "ReactDOM": true,
    }
};