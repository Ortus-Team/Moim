const path = require('path');

module.exports = {
    "extends": "airbnb",
    "rules": {
        "jsx-a11y/": 0,
        "react/jsx-filename-extension": 0
    },
    "env": {
        "es6": true,
        "browser": true
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": path.join(__dirname, '/webpack.local.config.js'),
                "config-index": 1,
                "comma-dangle": 2,
                "quotes": [2, "double"],
                "space-infix-ops": 2,
                "strict": 2,
                "babel/generator-star-spacing": 1,
                "babel/object-shorthand": 1,
                "babel/arrow-parens": 1,
                "babel/no-await-in-loop": 1,
                "react/jsx-uses-react": 2,
                "react/jsx-uses-vars": 2,
                "react/react-in-jsx-scope": 2,
                "semi": [2, "always"],
                "new-cap": [2, {
                    "capIsNewExceptions": ["List", "Map", "Record", "Set", "OrderedSet"]
                }],
                "no-unused-vars": 2
            }
        }
    }
}
