webpackJsonp([1],{"/spZ":function(t,e){},"4rJg":function(t,e){},GoXT:function(t,e,n){"use strict";var i=n("UY5G"),a=n.n(i),r=n("ao2+");var o=function(t){n("rFkS")},l=n("VU/8")(a.a,r.a,!1,o,null,null);e.default=l.exports},H4OR:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("VU/8")(null,null,!1,null,null,null).exports,r=n("VU/8")(null,null,!1,null,null,null).exports,o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("p",[this._v("main blog")])])}]};var l={methods:{readTestFile:function(){var t=this.loadFile("./src/file/test.txt");console.log(this.unicodeToUtf8(t))},loadFile:function(t){var e=new XMLHttpRequest,n="file:"===document.location.protocol?0:200;return e.open("GET",t,!1),e.overrideMimeType("text/html;charset=utf-8"),e.send(null),e.status===n?e.responseText:null},unicodeToUtf8:function(t){return t=t.replace(/\\/g,"%"),unescape(t)}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("https://www.cnblogs.com/miracle77hp/articles/11163532.html\n\t")]),t._v(" "),n("p",[t._v("git remote add origin url ///本地仓库与远程仓库关联\n\t")]),t._v(" "),n("p",[t._v("git clone [url] ///拉取项目\n\t")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("git init ///当前目录创建git代码库\n\t")]),t._v(" "),n("p",[t._v("git add 路径/指定文件 ///暂存区\n\t")]),t._v(" "),n("p",[t._v('git commit -m "注释" ///暂存区转移到仓库\n\t')]),t._v(" "),n("p",[t._v("git remote add origin + 远程仓库地址 //链接远程仓库，创建主分支\n\t")]),t._v(" "),n("p",[t._v("git pull origin master // 把本地仓库的变化连接到远程仓库主分支\n\t")]),t._v(" "),n("p",[t._v("git push -u origin master ///推送\n\t")]),t._v(" "),n("p"),t._v(" "),n("p",[t._v("git status ///查看变更文件\n\t")]),t._v(" "),n("p",[t._v("git config --list ///配置文件\n\t")]),t._v(" "),n("p",[t._v('git config --global user.name "用户名"///设置提交代码时的用户信息\n\t')]),t._v(" "),n("p",[t._v('git config --global user.email "邮箱"///设置提交代码时的邮箱\n\t')]),t._v(" "),n("p"),t._v(" "),n("p"),t._v(" "),n("p",[t._v("git clone [ssh url]///拉取ssh\n\t")]),t._v(" "),n("p",[t._v("ssh-keygen -t rsa ///创建公钥")]),t._v(" "),n("el-button",{on:{click:t.readTestFile}},[t._v("test")])],1)},staticRenderFns:[]};var c={components:{main_blog:n("VU/8")({},o,!1,function(t){n("pQXT")},null,null).exports,git:n("VU/8")(l,s,!1,function(t){n("4rJg")},null,null).exports},data:function(){return{privatebloglist:this.$store.state.bloglist,privateNavpage:"main_blog"}},methods:{handleSelect:function(t){this.$store.commit("changeNavpage",t),console.log(t)}},computed:{changeNavpage:function(){return this.$store.state.Navpage}},watch:{changeNavpage:function(){this.privateNavpage=this.$store.state.Navpage}}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e(this.privateNavpage,{tag:"component"})],1)},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(t){n("ygJN")},null,null).exports,v=n("GoXT"),p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"background-color":"#87c3ff"},attrs:{gutter:20}},[n("el-col",{attrs:{span:20,offset:3}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#87c3ff","text-color":"#000000","active-text-color":"#0080ff"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"main_blog"}},[t._v("首页")]),t._v(" "),n("el-menu-item",{attrs:{index:"git"}},[t._v("博客")]),t._v(" "),n("el-submenu",{attrs:{index:"study",disabled:""}},[n("template",{slot:"title"},[t._v("导航B")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-2"}},[t._v("选项2")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-3"}},[t._v("选项3")]),t._v(" "),n("el-submenu",{attrs:{index:"2-4"}},[n("template",{slot:"title"},[t._v("选项4")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-4-1"}},[t._v("选项1")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-4-2"}},[t._v("选项2")]),t._v(" "),n("el-menu-item",{attrs:{index:"2-4-3"}},[t._v("选项3")])],2)],2)],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")({data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t){this.$store.commit("changeNavpage",t)}}},p,!1,function(t){n("aHSs")},null,null).exports,m={name:"App",components:{header_left:a,header_right:r,main_left:d,main_right:v.default,Nav:h},data:function(){return{Height:0,Width:0}},methods:{},mounted:function(){var t=this;this.Height=.8*document.documentElement.clientHeight,window.onresize=function(){t.Height=.8*document.documentElement.clientHeight,t.autoRootFontSize()}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Nav"),this._v(" "),e("el-row",{attrs:{gutter:20}},[e("el-container",{staticStyle:{width:"100%","padding-top":"50px","padding-bottom":"50px"}},[e("el-col",{attrs:{span:15,offset:3}},[e("el-main",{staticStyle:{border:"solid 1px gray","border-radius":"10px"},style:{minHeight:this.Height+"px"}},[e("main_left")],1)],1),this._v(" "),e("el-col",{attrs:{span:4}},[e("main_right")],1)],1),this._v(" "),e("footer"),this._v(" "),e("el-footer",{staticStyle:{"text-align":"center"}},[this._v("Copyright © 2018 Anwesende Powered by Vue")])],1)],1)},staticRenderFns:[]};var g=n("VU/8")(m,f,!1,function(t){n("H4OR")},null,null).exports,_=n("zL8q"),b=n.n(_),x=n("NYxO");i.default.use(x.a);var y=new x.a.Store({strict:!1,state:{Navpage:"",bloglist:["github","csharpstring","test","elementstydu"]},mutations:{changeNavpage:function(t,e){t.Navpage=e}},actions:{changeNavpage:function(t,e){t.commit("changeNavpage",e)}}}),w=(n("tvR6"),n("/ocq")),k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var E=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},k,!1,function(t){n("/spZ")},"data-v-d8ec41bc",null).exports;i.default.use(w.a);var T=new w.a({routes:[{path:"/",name:"HelloWorld",component:E}]});n("ZpAt");i.default.use(b.a),i.default.config.productionTip=!1,i.default.prototype.$store=y,new i.default({el:"#app",router:T,components:{App:g},template:"<App/>"})},UY5G:function(t,e){},ZpAt:function(t,e){!function(){var t='@charset "utf-8";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;-webkit-overflow-scrolling:touch}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:transparent}body,html{font-family:"Microsoft YaHei",sans-serif,Tahoma,Arial}article,aside,blockquote,body,button,code,dd,details,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,input,legend,li,menu,nav,ol,p,pre,section,td,textarea,th,ul{margin:0;padding:0;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}input,input[type=button],input[type=reset],input[type=submit]{resize:none;border:none;-webkit-appearance:none;border-radius:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:500}q:after,q:before{content:\'\'}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}a,ins{text-decoration:none}a:active,a:hover,a:link,a:visited{background:0 0;-webkit-tap-highlight-color:transparent;-webkit-tap-highlight-color:transparent;outline:0;text-decoration:none}',e=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(e),e.styleSheet)e.styleSheet.disabled||(e.styleSheet.cssText=t);else try{e.innerHTML=t}catch(n){e.innerText=t}}(),function(t,e){var n,i=t.document,a=i.documentElement,r=i.querySelector('meta[name="viewport"]'),o=i.querySelector('meta[name="flexible"]'),l=0,s=0,c=e.flexible||(e.flexible={});if(r){console.warn("将根据已有的meta标签来设置缩放比例");var u=r.getAttribute("content").match(/initial\-scale=([\d\.]+)/);u&&(s=parseFloat(u[1]),l=parseInt(1/s))}else if(o){var d=o.getAttribute("content");if(d){var v=d.match(/initial\-dpr=([\d\.]+)/),p=d.match(/maximum\-dpr=([\d\.]+)/);v&&(l=parseFloat(v[1]),s=parseFloat((1/l).toFixed(2))),p&&(l=parseFloat(p[1]),s=parseFloat((1/l).toFixed(2)))}}if(!l&&!s){t.navigator.appVersion.match(/android/gi);var h=t.navigator.appVersion.match(/iphone/gi),m=t.devicePixelRatio;s=1/(l=h?m>=3&&(!l||l>=3)?3:m>=2&&(!l||l>=2)?2:1:1)}if(a.setAttribute("data-dpr",l),!r)if((r=i.createElement("meta")).setAttribute("name","viewport"),r.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),a.firstElementChild)a.firstElementChild.appendChild(r);else{var f=i.createElement("div");f.appendChild(r),i.write(f.innerHTML)}function g(){var e=a.getBoundingClientRect().width;e/l>540&&(e*=l);var n=e/10;a.style.fontSize=n+"px",c.rem=t.rem=n}t.addEventListener("resize",function(){clearTimeout(n),n=setTimeout(g,300)},!1),t.addEventListener("pageshow",function(t){t.persisted&&(clearTimeout(n),n=setTimeout(g,300))},!1),"complete"===i.readyState?i.body.style.fontSize=12*l+"px":i.addEventListener("DOMContentLoaded",function(t){i.body.style.fontSize=12*l+"px"},!1),g(),c.dpr=t.dpr=l,c.refreshRem=g,c.rem2px=function(t){var e=parseFloat(t)*this.rem;return"string"==typeof t&&t.match(/rem$/)&&(e+="px"),e},c.px2rem=function(t){var e=parseFloat(t)/this.rem;return"string"==typeof t&&t.match(/px$/)&&(e+="rem"),e}}(window,window.lib||(window.lib={}))},aHSs:function(t,e){},"ao2+":function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-header",{staticStyle:{height:"30px",border:"solid 1px gray",color:"black","background-color":"#afd7ff","border-radius":"10px 10px 0px 0px"}},[t._v("xxxx")]),t._v(" "),n("el-main",{staticStyle:{border:"solid 1px gray","border-radius":"0px 0px 10px 10px"}},[n("p",[t._v("1.")]),t._v(" "),n("p",[t._v("2.")]),t._v(" "),n("p",[t._v("3.")]),t._v(" "),n("p",[t._v("4.")]),t._v(" "),n("p",[t._v("5.")]),t._v(" "),n("p",[t._v("6.")]),t._v(" "),n("p",[t._v("7.")]),t._v(" "),n("p",[t._v("8.")]),t._v(" "),n("p",[t._v("9.")])])],1)},staticRenderFns:[]};e.a=i},pQXT:function(t,e){},rFkS:function(t,e){},tvR6:function(t,e){},ygJN:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e5532ae31a42168bed50.js.map