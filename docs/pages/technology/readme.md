---
sidebar: auto
---
# 日常技术总结记录

## Http
- **Http协议中的状态码**<br>
	<font color="red">301</font> 永久重定向<br>
	301比较常用的场景是使用域名跳转。<br>
	比如：我们访问 http://www.baidu.com 会跳转到 https://www.baidu.com，发送请求之后，就会返回301状态码，然后返回一个location，提示新的地址，浏览器就会拿着这个新的地址去访问。<br>

	<font color="red">302</font> 临时重定向<br>
	比如：未登陆的用户访问用户中心重定向到登录页面。
	访问404页面会重新定向到首页
	
	<font color="red">404</font> 服务器无法根据客户端的请求找到资源<br>
	<font color="red">405</font> 客户端请求中的方法被禁止<br>
	<font color="red">500</font> 服务器内部错误，无法完成请求<br>
	<font color="red">502</font> 作为网关或者代理工作的服务器尝试执行请求时，从远程服务器接收到了一个无效的响应<br>
- 

### 循环中遇到的问题
- 循环中调用方法，是先执行完调用方法后，再执行下一次循环
如下例子
```
let obj = {
	a: {
		a1: 1
	},
	b: {
		b1: 2
	},
	c: {
		c1: 3
	}
}
var n = 0;  // 记录进入方法次数
function eachFn(data) {
	n++;
	console.log('n:',n,'obj:',JSON.stringify(data));
	for(let key in data) {
		let val = data[key];
		if(typeof val === 'object') {
			eachFn(val);
		}
	}
}
eachFn(obj);
// n: 1 obj: {"a":{"a1":1},"b":{"b1":2},"c":{"c1":3}}
// n: 2 obj: {"a1":1}
// n: 3 obj: {"b1":2}
// n: 4 obj: {"c1":3}
```
进入for-in循环val值为对象 => 执行eachFn(val)方法，执行完成 => 进入下一次循环