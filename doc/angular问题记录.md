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

### 利用cheerio爬取数据时 报 `Module not found: Error: Can't resolve 'stream' in ... ` 错误

https://www.jianshu.com/p/ddf574337c47

cheerio 最新为 1.0.0-rc2版本，降到0.22.0版本即可解决上述问题

### 动态加载背景图 background-image

引入安全模块,DomSanitizer有助于防止跨站点脚本安全漏洞（XSS），通过清除值以便在不同的DOM上下文中安全使用。

```code
import { DomSanitizer } from '@angular/platform-browser';
```

html

```code
 <div class="detail-bg" [style.background-image]="image">
  </div>
```

ts文件

```code
 this.image = this.sanitization.bypassSecurityTrustStyle(`url(${this.detailInfo.cover})`)
```

### async\await

[https://segmentfault.com/a/1190000011526612?utm_source=tag-newest](https://segmentfault.com/a/1190000011526612?utm_source=tag-newest)

[https://www.jianshu.com/p/2afb088abd08](https://www.jianshu.com/p/2afb088abd08)

```code
async function sleep() {
    console.log(1);
    await new Promise(resolve => {
        setTimeout(() => {
            console.log(2);
            resolve();
        }, 1000)
    })
    console.log(3);
}

sleep();

// 1
// > Promise {<pending>}
// 2
// 3

```

### 请求字符串非json格式数据

get请求默认为返回json格式数据，如果请求的是 string 类型，接口返回成功，但是会报以下错误

```code
ERROR Error: Uncaught (in promise): HttpErrorResponse: {"headers":{"normalizedNames":{},"lazyUpdate":null},"status":200,"statusText":"OK","url":"http://localhost:8100/api","ok":false,"name":"HttpErrorResponse","message":"Http failure during parsing for http://localhost:8100/api"
```

解决方法：

设置 `responseType` 参数为 `text`

```code
 this.http.get(filename, {responseType: 'text'})
```

注：在之前的版本 如果使用的是 `HttpModule` 不存在这种情况 `import { Http } from '@angular/http'`

[https://www.jianshu.com/p/f0f81a63cbcb](https://www.jianshu.com/p/f0f81a63cbcb)