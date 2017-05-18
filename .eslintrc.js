// ESLint的规则有三种级别：

// "off"或者0，不启用这个规则
// "warn"或者1，出现问题会有警告
// "error"或者2，出现问题会报错
module.exports={
    "parser":"babel-eslint",
    "extends":"eslint-config-airbnb",
    "env":{
        "node":true
    },
    //定义规则
    "rules":{
    "comma-dangle": 0,
    "consistent-return": 0,
    "no-case-declarations": 0,
    "no-shadow": 0,
    "space-before-function-paren": 0,
    "spaced-comment": 0,
    "max-len": 0,
    "no-throw-literal": 0,
    "prefer-const": 1,
    "one-var-declaration-per-line": 0,
    "no-return-assign": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "no-underscore-dangle": 0,
    "no-empty": 0,
    "no-console": 0,
    "no-bitwise": 0,
    "class-methods-use-this": 0,
    "eqeqeq": 0,
    "new-cap": 0,
    "no-param-reassign": 0,
    "linebreak-style": ["error", "windows"]
    }
}
