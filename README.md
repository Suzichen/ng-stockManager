# 基于AdminLte的股票管理系统

## 分支说明

 **master**分支为主分支，包含了服务端，在服务端实现数据的基本增删查改。运行方法：
```shell
/* 服务端 */
cd serve 
node build/stock_server
/* 根目录新建命令行窗口，启动客户端 */
npm run start
```
默认端口：3000，3001

**mock-data**分支不含服务器，数据为本地模拟数据，不能修改。运行方法：直接`ng serve -o`,默认端口4200.

## 在线预览

[在线预览地址][1]

## 技术栈

本项目客户端技术栈：

 - [Angular][2] v5.0.3
 - [Angular-cli][3] v1.5.3
 - [AdminLTE][4] v2.4.2
 - bootstrap v3.3.7
 
本项目服务端技术栈：

 - Nodejs v8.9.1
 - express v4.16
 - ws v3.3.2

  [1]: http://www.suchen820.com/www/stock
  [2]: https://github.com/angular/angular
  [3]: https://github.com/angular/angular-cli
  [4]: https://github.com/almasaeed2010/AdminLTE