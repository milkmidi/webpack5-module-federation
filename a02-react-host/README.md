### 這樣的用法反而比較不好
因為
```js
 cacheGroups: {
        vendors: {
          name: 'vendors',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
```
就不這樣寫，
會先載入 remote 的 verndors React, 
然後又載入自己的 vendors ，會載兩次。
把 remoteEntry 寫在 html script 反正更好