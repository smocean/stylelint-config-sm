# stylelint-config-sm

* 神马前端stylelint配置

## 安装 stylelint ##

```bash
$ npm install stylelint -g
```

## stylelint config for sm.cn ##

```bash
$ npm install stylelint-config-sm -g
```

## 集成 ##

* sublime text 3

	1. 安装sublime text 3
	2. 使用快捷键(`cmd+shift+p` on Mac OS X, `ctrl+shift+p` on Linux/Windows)安装`sublimelinter`：Package Control: Install Package -> sublimelinter
	
	3. 使用快捷键(`cmd+shift+p` on Mac OS X, `ctrl+shift+p` on Linux/Windows)安装`sublimelinter-contrib-stylelintg`插件: Package Control: Install Package -> sublimelinter-contrib-stylelintg

## 使用 ##

项目中手动添加.stylelintrc配置文件，内容为：

```json
{
  "extends": "stylelint-config-sm"
}
```

## tips ##

如有特殊需求，可以在配置文件中添加 `rules` 选项，覆盖或者添加新规则。

```json
{
  "extends": "stylelint-config-sm",
  "rules": {
    ...
  }
}
```

