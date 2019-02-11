# markdown-node
 使用node搭建服务器实现的markdown文本转换成html代码接口
 
 # 如何使用
 #### 1.下载代码
 #### 2.安装node环境 到node官网上安装node.exe 并安装
 #### 3.进入到项目目录下 安装项目依赖 执行命令行 npm install  这一步骤可能会安装比较久的时间
 #### 4.安装完毕之后 接着运行  npm run webpack:server 这一步是打包项目
 #### 5.执行 node dist/server.js 运行项目 默认监听端口号 3000

# 如何使用接口

#### 接口地址为 http://localhost:3000/api/transform-markdown 
#### 请求方式 post
#### 参数 json 形式  {"markdown": "{这里是markdown格式的字符串}"}
