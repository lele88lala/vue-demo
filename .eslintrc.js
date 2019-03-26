// https://eslint.org/docs/user-guide/configuring
module.exports = {
  //默认情况下，ESLint 会在所有父级目录里寻找配置文件，一直到根目录。如果你想要你所有项目都遵循一个特定的约定时，这将会很有用，但有时候会导致意想不到的结果。为了将 ESLint 限制到一个特定的项目，在你项目根目录下的 package.json 文件或者 .eslintrc.* 文件里的 eslintConfig 字段下设置 "root": true。ESLint 一旦发现配置文件中有 "root": true，它就会停止在父级目录中寻找。
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    "ecmaVersion": 2017
  },
  "globals": { "_": true },//识别 lodash 标识
  env: {
    "es6": true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions 要求箭头函数的参数使用圆括号
    'arrow-parens': 0,
    // allow async-await 强制 generator 函数中 * 号周围使用一致的空格
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "semi": [2, "always"],//语句强制分号结尾
    "no-var": 0,//禁用var，用let和const代替
    "no-redeclare": 2,//禁止重复声明变量
    // "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
    // "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
    // "vars-on-top": 2,//var必须放在作用域顶部
    // "valid-typeof": 2,//必须使用合法的typeof的值
    // "spaced-comment": 0,//注释风格不要有空格什么的
    // "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
    // "space-return-throw-case": 2,//return throw case后面要不要加空格
    // "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    // "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
    // "sort-vars": 0,//变量声明时排序
    // "space-after-keywords": [0, "always"],//关键字后面是否要空一格
    // "space-before-blocks": [0, "always"],//不以新行开始的块{前面要不要有空格
    // "quotes": [1, "single"],//引号类型 `` "" ''
    // "padded-blocks": 0,//块语句内行首行尾是否要空行
    // "eqeqeq": [2, "allow-null"],// 使用 === 替代 ==  
    // "no-eq-null": 2,//禁止对null使用==或!=运算符
    // "computed-property-spacing": [2,"never"],// 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    // "no-extra-parens": 2,//禁止非必要的括号
    // "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
    // "no-func-assign": 2,//禁止重复的函数声明
    // "no-invalid-regexp": 2,//禁止无效的正则表达式
    // "no-invalid-this": 2,//禁止无效的this，只能用在构造器，类，对象字面量  
    // "no-labels": 2,//禁止标签声明
    // "no-lone-blocks": 2,//禁止不必要的嵌套块
    // "no-lonely-if": 2,//禁止else语句内只有if语句
  }
}

