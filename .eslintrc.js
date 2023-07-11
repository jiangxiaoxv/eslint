module.exports = {
  env: {
    browser: true, // window 避免没有声明的变量报错
    commonjs: true,
    es2021: true,
  },
  root: true,
  extends: [
    'plugin:vue/essential',
    'standard', // eslint-config-standard
    // 'eslint-config-airbnb-base', // 第三方，airbnb规则
    // 'eslint:all', 全部规则285个
    // 'eslint:recommended' 规则60多个
  ],
  overrides: [
    {
      files: ['bin/*.js', 'lib/*.js'],
      excludedFiles: '*.test.js',
      rules: {
        'no-unused-expressions': 'off',
      },
    },
  ],
  globals: {
    $: true, // 生命类似的全局变量，类似于window
  },
  parserOptions: {
    ecmaVersion: 'latest', // ecma版本，使用es版本检查代码
    sourceType: 'module',
    // parser: 'babel-eslint', // 采用 babel-eslint 作为语法解析器
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['vue'],
  // 不使用extend节点配置整套的规范,而是使用rule节点中直接配置
  rules: {
    semi: 0, // 1使用分号不报错，报的是警告,0是忽视
    'no-unused-vars': [
      'warn',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    indent: ['error', 2],
  },
};
