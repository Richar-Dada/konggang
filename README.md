# konggang

- 一个汽车过户预约系统的客户端,采用前后分离的模式实现,主要包含预约和用户管理两大模块,预约通过Resetful接口进行数据的传递,用户模块采用jwt实现用户权限控制
- 项目使用vue-cli+vux搭建vux组件丰富,可以适应不同的场景,用起来非常舒服
- 项目适配使用flexible方案,结合vux使用需要rootValue设为37.5,1px不转换为rem,
使用时,如果是750px设计稿,将量到的尺寸除2,直接书写px即可.
``` css
.test{
  width: 150px;
  height: 64px;
  font-size: 28px; /* px */ 根据不同dpr自动生成不同的小大
  border: 1px solid #ddd; /* no */ 如此注释则不会转化为rem
}
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
