---
sidebar: auto
---
# typescript介绍
`TypeScript`是 `JavaScript` 的强类型版本。然后在编译期去掉类型和特有语法，生成纯粹的 `JavaScript` 代码。由于最终在浏览器中运行的仍然是 `JavaScript`，所以 `TypeScript` 并不依赖于浏览器的支持，也并不会带来兼容性问题。<br/>
`TypeScript` 是 `JavaScript` 的超集，这意味着他支持所有的 `JavaScript` 语法。并在此之上对 `JavaScript` 添加了一些扩展，如 `class / interface / module` 等。这样会大大提升代码的可阅读性。<br/>
与此同时，`TypeScript` 也是 `JavaScript ES6` 的超集，Google 的 Angular 2.0 也宣布采用 `TypeScript` 进行开发。这更是充分说明了这是一门面向未来并且脚踏实地的语言。<br/>

# vue-typescript入门
这里主要讲下vue cli 3.x 的typescript集成
vue cli3.x版本精简了许多文件，所以创建完成之后，要在根目录下手动创建一个vue.config.js
## 起步
### 安装
- 使用以下命令安装vue/cli
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
[安装介绍地址](https://cli.vuejs.org/zh/guide/installation.html)
- 创建一个vue项目(建议用系统自带命令窗口，不要用git bash)
```
vue create demo1
```
- 你会被提示选取一个 preset，选择“手动选择特性”(输入>2),
```
Vue CLI v3.9.2
? Please pick a preset:
  default (babel, eslint)
> Manually select features
```
- 按enter键进入下一步，按上下键切换选项，按空格键选中/取消，按i键反选，按a键全选
```
? Check the features needed for your project:
 (*) Babel
 (*) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
>(*) Linter / Formatter
 ( ) Unit Testing
 ( ) E2E Testing
```
- 然后根据提示一步一步到安装完成

- 项目创建完成，修改配置
	- 修改tsconfig.json
```
// tsconfig.json
{
  "compilerOptions": {
    // 与 Vue 的浏览器支持保持一致
    "target": "es5",
    // 这可以对 `this` 上的数据属性进行更严格的推断
    "strict": true,
    // 如果使用 webpack 2+ 或 rollup，可以利用 tree-shake:
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```
	- tslint.json配置
	```
	{
		"defaultSeverity": "warning",
		"extends": [
			"tslint:recommended"
		],
		"linterOptions": {
			"exclude": [
			"node_modules/**"
			]
		},
		"rules": {
			"quotemark": [true, "single"], //引号的使用规则
			"indent": [true, "tabs", 4], // 使用Tab进行缩进，每次强制缩进4个字符
			"interface-name": false, // 接口名称宝
			"ordered-imports": false, // import引入顺序
			"object-literal-sort-keys": false, // 
			"no-consecutive-blank-lines": false, // 
			"trailing-comma": [true, { //对尾随逗号的校验
				"multiline": {
					"objects": "ignore",
					"arrays": "never",
					"functions": "never",
					"typeLiterals": "ignore"
				},
				"esSpecCompliant": true //是否允许尾随逗号出现在剩余变量中
			}],
			"whitespace": false, //空格的校验
			"member-access": false,//类成员的显示可见性声明，即显示定义一个类的成员是否可见，即对类成员定义public | static 等
			"no-trailing-whitespace": false,  // 尾部空格检测
			"no-empty": false, //不允许空的块
			"no-console": false, //不能使用console
			"arrow-parens": false, //箭头函数定义的参数需要括号
			"semicolon": [true, "always", "ignore-interfaces"], // 分号的使用规则
			"no-var-requires": false, // 不允许使用var module = require("module"),用 import foo = require('foo')导入
			"prefer-const": false  // 如果变量声明后没被更改，
		}
	}

	```
注意你需要引入 strict: true (或者至少 noImplicitThis: true，这是 strict 模式的一部分) 以利用组件方法中 this 的类型检查，否则它会始终被看作 any 类型。
	- 手动创建vue.config.js
	[具体配置项参照](https://cli.vuejs.org/zh/config/#filenamehashing)
例如：
```
module.exports = {
    publicPath: '',
    productionSourceMap: false,
    filenameHashing: false,
		// 如果前端应用和后端API不在一个域名下，这时候就需要在开发环境下将 API 请求代理到 API 服务器
    devServer: {
        port: 8080,
        open: true,
        proxy: 'http://xxx.com'
    },
    chainWebpack: config => {
        config.plugins.delete('preload')
        config.plugins.delete('prefetch')
    },
		// 
防止将某些 import 的包(package)打包到 bundle 中，而是在运行时(runtime)再去从外部获取这些扩展依赖
    configureWebpack: {
				// 引入外部
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'vuex': 'Vuex',
            'element-ui': 'Element',
            'axios': 'axios',
            'moment': 'moment'
        }
    }
}
```
[Vue TypeScript地址](https://cn.vuejs.org/v2/guide/typescript.html#%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E9%93%BE)

- package.json
```
"dependencies": {
    "core-js": "^2.6.5",
    "vue": "^2.6.10",
    "vue-class-component": "^7.0.2",
    "vue-property-decorator": "^8.1.0",
    "vue-router": "^3.0.3",
    "vuex": "^3.0.1"
}
```
### 相关依赖介绍
这里给大家介绍下core-js、vue-class-component、vue-property-decorator

- **core-js**
	1. 222
JavaScript的模块化标准库。包括ECMAScript到2019年的polyfills:promises, symbols, collections, iterators, typed arrays许多其他功能、ECMAScript proposals、一些跨平台的WHATWG / W3C功能和建议，比如URL。您可以只加载所需的特性，或者使用它而不污染全局名称空间。

- **vue-class-component**

vue-class-component是vue推出的一个支持使用class方式来开发vue单文件组件的库

示例：
```
<template>
  <div>
    <input v-model="msg">
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <button @click="greet">Greet</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
	import Hello from './components/Hello.vue'
	import World from './components/World'
	import { mapState, mapMutations } from 'vuex'
	
	// We declare the props separately
	// to make props types inferable.
	const AppProps = Vue.extend({
		props: {
			propMessage: String
		}
	})

	@Component({
		components: {
			Hello,
			World
		},
		// Vuex's component binding helper can use here
		computed: mapState([
			'count'
		]),
		methods: mapMutations([
			'increment'
		])
	})
	export default class App extends AppProps {
		// 初始化数据
		msg: number = 123
		// 用属性值初始化数据
		helloMsg: string = 'Hello, ' + this.propMessage
		// annotate refs type
		$refs!: {
			helloComponent: Hello
		}
		
		// additional declaration is needed
		// when you declare some properties in `Component` decorator
		count!: number
		increment!: () => void
		
		// 生命周期
		mounted () {
			this.greet()
		}
		// 计算属性
		get computedMsg () {
			return 'computed ' + this.msg
		}
		// 方法
		greet () {
			alert('greeting: ' + this.msg)
			this.$refs.helloComponent.sayHello()
		}
		// direct dispatch example
		incrementIfOdd () {
			this.$store.dispatch('incrementIfOdd')
		}
	}
</script>
```

- **vue-property-decorator**
vue-property-decorator 是在 vue-class-component 上增强了更多的结合 Vue 特性的装饰器，新增了这 7 个装饰器:
@Emit,@Inject,@Model,@Prop,@Provide,@Watch,@Component (从 vue-class-component 继承)

vue官方介绍：https://cn.vuejs.org/v2/guide/components-props.html

```
import { Component, Emit, Inject, Model, Prop, Provide, Vue, Watch } from 'vue-property-decorator'

@Component
export class MyComponent extends Vue {
  
  @Prop()
  propA: number = 1

  @Prop({ default: 'default value' })
  propB: string

  @Prop([String, Boolean])
  propC: string | boolean

  @Prop({ type: null })
  propD: any

  @Watch('child')
  onChildChanged(val: string, oldVal: string) { }
}
```
上面的代码相当于：
```
export default {
  props: {
    checked: Boolean,
    propA: Number,
    propB: {
      type: String,
      default: 'default value'
    },
    propC: [String, Boolean],
    propD: { type: null }
  }
  methods: {
    onChildChanged(val, oldVal) { }
  },
  watch: {
    'child': {
      handler: 'onChildChanged',
      immediate: false,
      deep: false
    }
  }
}
```
### 在vue-class-component中使用vuex，需要安装vuex-class
```
import Vue from 'vue'
import Component from 'vue-class-component'
import {
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'vuex-class'
 
const someModule = namespace('path/to/module')
 
@Component
export class MyComp extends Vue {
  @State('foo') stateFoo
  @State(state => state.bar) stateBar
  @Getter('foo') getterFoo
  @Action('foo') actionFoo
  @Mutation('foo') mutationFoo
  @someModule.Getter('foo') moduleGetterFoo
 
  // If the argument is omitted, use the property name
  // for each state/getter/action/mutation type
  @State foo
  @Getter bar
  @Action baz
  @Mutation qux
 
  created () {
    this.stateFoo // -> store.state.foo
    this.stateBar // -> store.state.bar
    this.getterFoo // -> store.getters.foo
    this.actionFoo({ value: true }) // -> store.dispatch('foo', { value: true })
    this.mutationFoo({ value: true }) // -> store.commit('foo', { value: true })
    this.moduleGetterFoo // -> store.getters['path/to/module/foo']
  }
}
```
如：
store.ts
```
import Vue from 'vue';
import Vuex from 'vuex';
import service from './utils/request';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLogin: false
    },
    mutations: {
        SET_LOGIN: (state: any, opts) => {
            state.isLogin = opts.login;
        }
    },
    actions: {
        async setLogin({commit}) {
            let login: boolean = false;
            await service({
                type: 'get',
                url: '/api/',
                success: (res: boolean) => {
                    commit('SET_LOGIN', {login: res});
                }
            });
            
        }
    }
});

export default store;
```
引用
```
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component({})
export default class Header extends Vue {
    @State isLogin!: boolean;
	@Mutation SET_LOGIN!: any;
	@Action setLogin!: any;

	mounted() {
		this.setLogin();  // 调用action
		console.log(this.isLogin);   // true
	} 
}
```

> [vue + typescript 项目起手式](https://segmentfault.com/a/1190000011744210?utm_source=tuicool&utm_medium=referral#articleHeader16)

> [tslint](https://www.jianshu.com/p/2b409dfc8f75)

