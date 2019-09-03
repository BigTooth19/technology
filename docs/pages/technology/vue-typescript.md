---
sidebar: auto
---
# typescript����
`TypeScript`�� `JavaScript` ��ǿ���Ͱ汾��Ȼ���ڱ�����ȥ�����ͺ������﷨�����ɴ���� `JavaScript` ���롣��������������������е���Ȼ�� `JavaScript`������ `TypeScript` �����������������֧�֣�Ҳ������������������⡣<br/>
`TypeScript` �� `JavaScript` �ĳ���������ζ����֧�����е� `JavaScript` �﷨�����ڴ�֮�϶� `JavaScript` �����һЩ��չ���� `class / interface / module` �ȡ�����������������Ŀ��Ķ��ԡ�<br/>
���ͬʱ��`TypeScript` Ҳ�� `JavaScript ES6` �ĳ�����Google �� Angular 2.0 Ҳ�������� `TypeScript` ���п���������ǳ��˵��������һ������δ�����ҽ�̤ʵ�ص����ԡ�<br/>

# vue-typescript����
������Ҫ����vue cli 3.x ��typescript����
vue cli3.x�汾����������ļ������Դ������֮��Ҫ�ڸ�Ŀ¼���ֶ�����һ��vue.config.js
## ��
### ��װ
- ʹ���������װvue/cli
```
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
[��װ���ܵ�ַ](https://cli.vuejs.org/zh/guide/installation.html)
- ����һ��vue��Ŀ(������ϵͳ�Դ�����ڣ���Ҫ��git bash)
```
vue create demo1
```
- ��ᱻ��ʾѡȡһ�� preset��ѡ���ֶ�ѡ�����ԡ�(����>2),
```
Vue CLI v3.9.2
? Please pick a preset:
  default (babel, eslint)
> Manually select features
```
- ��enter��������һ���������¼��л�ѡ����ո��ѡ��/ȡ������i����ѡ����a��ȫѡ
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
- Ȼ�������ʾһ��һ������װ���

- ��Ŀ������ɣ��޸�����
	- �޸�tsconfig.json
```
// tsconfig.json
{
  "compilerOptions": {
    // �� Vue �������֧�ֱ���һ��
    "target": "es5",
    // ����Զ� `this` �ϵ��������Խ��и��ϸ���ƶ�
    "strict": true,
    // ���ʹ�� webpack 2+ �� rollup���������� tree-shake:
    "module": "es2015",
    "moduleResolution": "node"
  }
}
```
	- tslint.json����
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
			"quotemark": [true, "single"], //���ŵ�ʹ�ù���
			"indent": [true, "tabs", 4], // ʹ��Tab����������ÿ��ǿ������4���ַ�
			"interface-name": false, // �ӿ����Ʊ�
			"ordered-imports": false, // import����˳��
			"object-literal-sort-keys": false, // 
			"no-consecutive-blank-lines": false, // 
			"trailing-comma": [true, { //��β�涺�ŵ�У��
				"multiline": {
					"objects": "ignore",
					"arrays": "never",
					"functions": "never",
					"typeLiterals": "ignore"
				},
				"esSpecCompliant": true //�Ƿ�����β�涺�ų�����ʣ�������
			}],
			"whitespace": false, //�ո��У��
			"member-access": false,//���Ա����ʾ�ɼ�������������ʾ����һ����ĳ�Ա�Ƿ�ɼ����������Ա����public | static ��
			"no-trailing-whitespace": false,  // β���ո���
			"no-empty": false, //������յĿ�
			"no-console": false, //����ʹ��console
			"arrow-parens": false, //��ͷ��������Ĳ�����Ҫ����
			"semicolon": [true, "always", "ignore-interfaces"], // �ֺŵ�ʹ�ù���
			"no-var-requires": false, // ������ʹ��var module = require("module"),�� import foo = require('foo')����
			"prefer-const": false  // �������������û�����ģ�
		}
	}

	```
ע������Ҫ���� strict: true (�������� noImplicitThis: true������ strict ģʽ��һ����) ��������������� this �����ͼ�飬��������ʼ�ձ����� any ���͡�
	- �ֶ�����vue.config.js
	[�������������](https://cli.vuejs.org/zh/config/#filenamehashing)
���磺
```
module.exports = {
    publicPath: '',
    productionSourceMap: false,
    filenameHashing: false,
		// ���ǰ��Ӧ�úͺ��API����һ�������£���ʱ�����Ҫ�ڿ��������½� API ������� API ������
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
��ֹ��ĳЩ import �İ�(package)����� bundle �У�����������ʱ(runtime)��ȥ���ⲿ��ȡ��Щ��չ����
    configureWebpack: {
				// �����ⲿ
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
[Vue TypeScript��ַ](https://cn.vuejs.org/v2/guide/typescript.html#%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E9%93%BE)

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
### �����������
�������ҽ�����core-js��vue-class-component��vue-property-decorator

- **core-js**
	1. 222
JavaScript��ģ�黯��׼�⡣����ECMAScript��2019���polyfills:promises, symbols, collections, iterators, typed arrays����������ܡ�ECMAScript proposals��һЩ��ƽ̨��WHATWG / W3C���ܺͽ��飬����URL��������ֻ������������ԣ�����ʹ����������Ⱦȫ�����ƿռ䡣

- **vue-class-component**

vue-class-component��vue�Ƴ���һ��֧��ʹ��class��ʽ������vue���ļ�����Ŀ�

ʾ����
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
		// ��ʼ������
		msg: number = 123
		// ������ֵ��ʼ������
		helloMsg: string = 'Hello, ' + this.propMessage
		// annotate refs type
		$refs!: {
			helloComponent: Hello
		}
		
		// additional declaration is needed
		// when you declare some properties in `Component` decorator
		count!: number
		increment!: () => void
		
		// ��������
		mounted () {
			this.greet()
		}
		// ��������
		get computedMsg () {
			return 'computed ' + this.msg
		}
		// ����
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
vue-property-decorator ���� vue-class-component ����ǿ�˸���Ľ�� Vue ���Ե�װ�������������� 7 ��װ����:
@Emit,@Inject,@Model,@Prop,@Provide,@Watch,@Component (�� vue-class-component �̳�)

vue�ٷ����ܣ�https://cn.vuejs.org/v2/guide/components-props.html

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
����Ĵ����൱�ڣ�
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
### ��vue-class-component��ʹ��vuex����Ҫ��װvuex-class
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
�磺
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
����
```
import { Component, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation } from 'vuex-class';

@Component({})
export default class Header extends Vue {
    @State isLogin!: boolean;
	@Mutation SET_LOGIN!: any;
	@Action setLogin!: any;

	mounted() {
		this.setLogin();  // ����action
		console.log(this.isLogin);   // true
	} 
}
```

> [vue + typescript ��Ŀ����ʽ](https://segmentfault.com/a/1190000011744210?utm_source=tuicool&utm_medium=referral#articleHeader16)

> [tslint](https://www.jianshu.com/p/2b409dfc8f75)

