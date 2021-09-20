# webpack-hmr-whistle
webpack-dev-server 本地化起一个服务。提供给live地址，通过whistle代理到本地开发，并监听端口。最终达到线上能进行热更新操作。适合于应用大部分场景。  

注意：node版本 >=12  webpack-dev-server >= 4

## init
1.yarn 或 npm install  
2.yarn start 或 npm run start  

## live线上环境：https://zsz-danzi.github.io/webpack-hmr-whistle/dist/index.html

## whistle配置:2种方式：

当 webSocketServer: 'ws'时，如下  
`devServer: {
    port: 4300,
    hot: true,
    allowedHosts: 'all',
}`  
whistle配置为  
`^https://zsz-danzi.github.io/webpack-hmr-whistle/dist/bundle.js$  http://127.0.0.1:4300/bundle.js  
^https://zsz-danzi.github.io/webpack-hmr-whistle/dist/dist/css/index.css$ http://127.0.0.1:4300/dist/css/index.css  
zsz-danzi.github.io:4300 http://127.0.0.1:4300`


当 webSocketServer: 'sockjs'时，如下  
`devServer: {
    port: 4300,
    hot: true,
    allowedHosts: 'all',
    client: {
        webSocketTransport: 'sockjs',
        webSocketURL: 'ws://127.0.0.1:4300/ws'
    },
    webSocketServer: 'sockjs',
}`  
whistle配置为  
`^https://zsz-danzi.github.io/webpack-hmr-whistle/dist/bundle.js$  http://127.0.0.1:4300/bundle.js  
^https://zsz-danzi.github.io/webpack-hmr-whistle/dist/dist/css/index.css$ http://127.0.0.1:4300/dist/css/index.css`

