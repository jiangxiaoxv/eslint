# 为什么要用eslint
1. 统一团队编码规范
2. 统一语法
3. 减少不必要的git提交
4. 避免低级错误
5. 在编译时检查语法，而不是等js引擎执行的时候才检查

# eslint用法
1. 手动下载
2. 脚手架自带

# eslint包
   # 安装
    1. npm i eslint -D
    2. vue create 创建过程中选择lint

# vscode中语法报错
1. 通过安装 vscode的扩展插件 eslint 就能在vscode看到语法检查不合法的东西


# 生成eslint配置文件
1. 内部有很多规则，要告诉eslint使用什么规则，就是通过配置文件
2. 配置文件命名 .eslintrc.js, 也可以直接在package.json 中配置
3. npx eslint --init 生成一个配置文件
4. commonjs、vue

# eslint 执行
1. npx eslint ./src
2. eslint-config-standard 依赖 就是 extends:['standard']

# eslint 配置
1. global可以定义全局变量
2. extends 可以使用一些规范，包括插件， 可以省略名字；eslint-config-standard 省略成 standard
3. parseOptions 告诉eslint用那种esca规范检查项目代码
4. 全部变量需要通过env来指定


# eslint 语法规范类型
1. eslint-all / eslint-recommended
2. 标准规范 eslint-config-standard; npm i eslint-config-standard -D
3. eslint-config-airbnb-base ; npx install-peerdeps -D eslint-config-airbnb-base


