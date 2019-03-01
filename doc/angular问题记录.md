# angular问题记录

## No provider for ConnectionBackend错误

解决：在根模块引入 `HttpModule` 模块 然后在 `imports` 中引入

参考: https://blog.csdn.net/yyx3214/article/details/80459733

## 设置proxy

[https://www.meiwen.com.cn/subject/kybrzftx.html](https://www.meiwen.com.cn/subject/kybrzftx.html)

1、根目录下新建 `proxy.config.json` 文件

```code
{
  "/api": {
    "target": "https://m.kankanwu.com/",
    "pathRewrite": {
      "^/api": ""
    },
    "changeOrigin": true
  }
}
```

**注意**：target 路径后的 `/`

2、在 `angular.json` 文件中进行配置

```code
"serve": {
  "builder": "@angular-devkit/build-angular:dev-server",
  "options": {
    "browserTarget": "app:build",
    "proxyConfig": "proxy.config.json" // 配置
  },
  "configurations": {
    "production": {
      "browserTarget": "app:build:production"
    },
    "ci": {
      "progress": false
    }
  }
},
```

3、重启服务即可

## 利用cheerio爬取数据时 报 `Module not found: Error: Can't resolve 'stream' in ... ` 错误

https://www.jianshu.com/p/ddf574337c47

cheerio 最新为 1.0.0-rc2版本，降到0.22.0版本即可解决上述问题