# npm i eslint -D

# npx eslint --init

#  npx eslint ./src/index.js

#  npx eslint ./src

# standard 
    extends: [
        'plugin:vue/essential', // "eslint-plugin-vue": "^8.5.0"
        'standard' // "eslint-config-standard": "^16.0.3",
    ],

# eslint语法规范本质
1. 就是函数
2. 285个规则，每条规则都是一个create函数
3. 在进行语法检查时，会将代码传入这些函数内部做检查
4. 分为七大类 
    - possible errors       ----- no-console
    - best practices        ----- no-global-assign
    - strict mode           ----- strict
    - variables             ----- no-delete-var
    - node.js and commonjs  ----- callback-return
    - stylistic issues      ----- no-mixed-spaces-and-tabs
    - ECMAScript 6          ----- constructor-super

   
