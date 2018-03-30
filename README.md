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

## 回顾
- konggang是预约系统的前端部分,后台是gamer的booking分支,booking分支除了有api,还有一个后台管理系统,组合起来成为一个完整的项目

### 技术点
- 客户端是使用jwt来实现用户的权限限制的,后台系统则通过cookie-session的配合完成
- cookie设置为0,会把cookie的信息清除
- 数据库where条件有中文,需要使用``来限定它是一个字符串
- 中文传输应该使用Base64加密

### egg使用体会
- 文档丰富,基本涉及日常开发的各个场景
- 目录机构清晰,开发者轻松实现分层开发
- 配置简单,上手容易
- 服务稳到,部署上线一个多月没异常