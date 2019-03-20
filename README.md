# ionic4 项目

## 环境

```code
angular7
ionic4
cordova
```

## 启动

### 配置环境

```code
npm install -g ionic cordova
```
参考: [https://victorcheney.github.io/2019/02/22/%E5%88%9D%E5%A7%8B%E5%8C%96ionic%E9%A1%B9%E7%9B%AE/](https://victorcheney.github.io/2019/02/22/%E5%88%9D%E5%A7%8B%E5%8C%96ionic%E9%A1%B9%E7%9B%AE/)

### 安装依赖包
```code
npm install
```

### 添加Android platform

```code
ionic cordova platform add android
```

android:

```code
ionic cordova emulate android -lc 启动安卓模拟器并查看项目
ionic cordova run android -lc  真机调试
```

浏览器:

```code
ionic serve
```

[发布打包](https://victorcheney.github.io/2019/02/26/ionic%E5%8F%91%E5%B8%83release%E7%89%88%E6%9C%AC%E6%96%87%E6%A1%A3/)
