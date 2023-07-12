# eslint 与 prettier
1. eslint 检查不合格的规范，
2. prettier 使代码格式化为合格的eslint规范； npm i prettier -D
3. 创建prettier配置文件 ; 按保存键自动格式化代码
4. eslint只能够处理js文件，prettier能够处理css文件
5. 安装prettier vscode扩展插件
    //setting.json文件
    "[javascript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[html]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[css]": {
      "editor.defaultFormatter": "esbenp.prettier-vscode"
    },

# eslint 与 prettier
1. eslint 先执行
2. prettier 后执行
3. 规则统一
