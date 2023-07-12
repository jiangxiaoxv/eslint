// module.exports = {
//   env: {
//     browser: true, // window 避免没有声明的变量报错
//     commonjs: true,
//     es2021: true,
//   },
//   root: true,
//   extends: [
//     'plugin:vue/essential',
//     // 'standard', // eslint-config-standard
//     'eslint-config-airbnb-base', // 第三方，airbnb规则
//     // 'eslint:all', 全部规则285个
//     // 'eslint:recommended' 规则60多个
//   ],
//   overrides: [
//     {
//       files: ['bin/*.js', 'lib/*.js'],
//       excludedFiles: '*.test.js',
//       rules: {
//         'no-unused-expressions': 'off',
//       },
//     },
//   ],
//   globals: {
//     $: true, // 生命类似的全局变量，类似于window
//   },
//   parserOptions: {
//     ecmaVersion: 'latest', // ecma版本，使用es版本检查代码
//     sourceType: 'module',
//     // parser: 'babel-eslint', // 采用 babel-eslint 作为语法解析器
//     ecmaFeatures: {
//       jsx: true,
//     },
//   },
//   plugins: ['vue'],
//   // 不使用extend节点配置整套的规范,而是使用rule节点中直接配置
//   rules: {
//     semi: 0, // 1使用分号不报错，报的是警告,0是忽视
//     'no-unused-vars': [
//       'warn',
//       { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
//     ],
//     indent: ['error', 2],
//   },
// };
module.exports = {
  // 告诉eslint代码运行环境，像document，未声明会报错的；env里面的全局变量不会报错
  env: {
    browser: true,
    commonjs: true, // __dirname 未声明不会报错
    node: true,
    es2021: true,
  },
  root: true, // 告诉eslint只要检查到该配置文件所在的目录的所有文件即可，没必要去检查用户根目录
  extends: ['plugin:vue/essential', 'eslint:recommended'], // standard规范也会对env做一些兼容['eslint:all', 'eslint:recommended', 'standard']
  // extends: ['plugin:vue/essential', 'standard'], // standard规范也会对env做一些兼容['eslint:all', 'eslint:recommended', 'standard']
  parserOptions: {
    ecmaVersion: 'latest', // ecma版本，使用es版本检查代码
    // 一个对象，指定要使用哪些附加语言功能
    ecmaFeatures: {
      jsx: true,
    },
  },
  globals: {
    $: true, // 生命类似的全局变量，类似于window
    //   $: false, // false只能访问，不能修改 $ = 1
  },
  plugins: ['vue'],

  rules: {
    'no-unused-vars': 'warn',
    quotes: ['error', 'single'],
    indent: ['error', 2],
    semi: [0],
  },
};
