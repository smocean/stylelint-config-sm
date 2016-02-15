# stylelint-config-sm

* 神马前端stylelint配置

* 样式规范请参考[css编码规范](http://gitlab.alibaba-inc.com/shenma-frontend/documents/blob/master/FE%E6%96%B0%E4%BA%BA%E5%BF%85%E8%AF%BB/css%E7%BC%96%E7%A0%81%E8%A7%84%E8%8C%83.md)


## 安装node检测包

在全局中安装如下node.js依赖包：

```console
$ npm install stylelint postcss -g

```
```console
$ npm install stylelint-config-sm －g
```

## 安装编辑器检测插件
* sublime text 3

	1. 安装sublime text 3
	2. 使用快捷键(`cmd+shift+p` on Mac OS X, `ctrl+shift+p` on Linux/Windows)安装`sublimelinter`：Package Control: Install Package -> sublimelinter
	
	3. 使用快捷键(`cmd+shift+p` on Mac OS X, `ctrl+shift+p` on Linux/Windows)安装`sublimelinter-contrib-stylelintg`插件: Package Control: Install Package -> sublimelinter-contrib-stylelintg

## 使用

项目中手动添加.stylelintrc配置文件，内容为：

```json
{
  "extends": "stylelint-config-sm"
}
```


### 扩展配置

如有特殊需求，可以在配置文件中添加`rules`选项，覆盖或者添加新规则。

```json
{
  "extends": "stylelint-config-sm",
  "rules": {
    "indentation": [2, "tab"],
    "number-leading-zero": 0
  }
}
```

