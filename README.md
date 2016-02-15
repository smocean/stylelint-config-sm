# stylelint-config-sm

> 神马前端stylelint配置


## 安装

在全局中安装如下node.js依赖包：

```console
$ npm install stylelint postcss -g

```
```console
$ npm install stylelint-config-sm －g
```

## 安装sublime text 3检测插件
* 安装sublime text 3
* 使用快捷键(`cmd+shift+p` on Mac OS X, `ctrl+shift+p` on Linux/Windows)安装sublimelinter：Package Control: Install Package -> sublimelinter

* 使用快捷键(`cmd+shift+p` on Mac OS X, `ctrl+shift+p` on Linux/Windows)安装sublimelinter-contrib-stylelint插件: Package Control: Install Package -> sublimelinter-contrib-stylelintg

## 使用

项目中.stylelintrc配置文件为：

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

