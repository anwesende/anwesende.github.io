(function(t){function e(e){for(var r,i,s=e[0],l=e[1],u=e[2],p=0,d=[];p<s.length;p++)i=s[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);c&&c(e);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0db2":function(t,e,n){"use strict";var r=n("db26"),a=n.n(r);e["default"]=a.a},"2dd4":function(t,e){},"329b":function(t,e,n){"use strict";var r=n("48dd"),a=n("5091"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"3b6d":function(t,e,n){"use strict";var r=n("2dd4"),a=n.n(r);e["default"]=a.a},"3d13":function(t,e,n){"use strict";var r=n("7fcf"),a=n("3b6d"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},4224:function(t,e,n){"use strict";var r=n("93dc"),a=n("99ff"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},4398:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("element踩坑小记一（el-row宽度溢出）https://blog.csdn.net/float_dream/article/details/104673699/")]),n("p"),n("p",[t._v("在使用珊格系统时，如果使用了有分隔的布局也就是将gutter设置为非零时，会使页面宽度溢出出现滚动条破坏了布局美观性\n\t")]),n("p",[t._v("原因是因为父容器没有设置足够的padding，所以会造成el-row宽度变长从而出现滚动条\n\t")]),n("p",[t._v("方法一：为父容器设置隐藏横向滚动条的样式\n\t")]),n("p",[t._v("overflow-x: hidden\n\t")]),n("p",[t._v("方法二：为父容器设置一定的padding，并且将box-sizing设置为border-box，padding的设置根据你需要设置的间隔来定\n\t")]),n("p",[t._v("padding: 0 10px;\n\t")]),n("p",[t._v("box-sizing: border-box;")])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"48dd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("curriculum vitae")])},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},5091:function(t,e,n){"use strict";var r=n("a8bb"),a=n.n(r);e["default"]=a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("headerpageleft"),n("headernav"),n("el-row",{attrs:{gutter:20}},[n("el-container",{staticStyle:{width:"100%","padding-top":"3.125rem","padding-bottom":"3.125rem"}},[n("el-col",{attrs:{span:15,offset:3}},[n("el-main",{staticStyle:{border:"solid 1px gray","border-radius":"10px"},style:{minHeight:t.Height+"px"}},[n(t.privatecurrent,{tag:"component"})],1)],1),n("el-col",{attrs:{span:4}},[n("blognews"),n("blogitems")],1)],1),n("el-footer",{staticStyle:{"text-align":"center"}},[t._v("Copyright © 2020 Anwesende Powered by Vue")])],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"background-color":"#87c3ff"},attrs:{gutter:20}},[n("el-col",{attrs:{span:20,offset:3}},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.activeIndex,mode:"horizontal","background-color":"#87c3ff","text-color":"#000000","active-text-color":"#0080ff"},on:{select:t.handleSelect}},[n("el-menu-item",{attrs:{index:"mainpage"}},[t._v("mainpage")]),n("el-menu-item",{attrs:{index:"blogmain"}},[t._v("博客")])],1)],1)],1)},s=[],l={data:function(){return{activeIndex:"1"}},methods:{handleSelect:function(t){this.$store.commit("changeCurrent",t)}}},u=l,c=n("2877"),p=Object(c["a"])(u,i,s,!1,null,null,null),d=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("main")]),n("el-button",{on:{click:t.readTestFile}},[t._v("test")])],1)},_=[],f=(n("a481"),{methods:{readTestFile:function(){var t=this.loadFile("./src/file/test.txt");console.log(this.unicodeToUtf8(t))},loadFile:function(t){var e=new XMLHttpRequest,n="file:"===document.location.protocol?0:200;return e.open("GET",t,!1),e.overrideMimeType("text/html;charset=utf-8"),e.send(null),e.status===n?e.responseText:null},unicodeToUtf8:function(t){return t=t.replace(/\\/g,"%"),unescape(t)}}}),b=f,g=Object(c["a"])(b,v,_,!1,null,null,null),m=g.exports,h=n("7534"),y=n("3d13"),x=n("aaee"),S=n("4224"),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mainpage"},[n("el-carousel",{attrs:{interval:4e3,type:"card",height:"150px"}},t._l(3,function(e){return n("el-carousel-item",{key:e},[n("h3",{staticClass:"medium"},[t._v(t._s(e))])])}),1)],1)},k=[],w=(n("b98b"),{}),j=Object(c["a"])(w,T,k,!1,null,null,null),C=j.exports,R=n("329b"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ul",t._l(t.privatebloglist,function(e){return n("li",{key:e},[n("el-button",{attrs:{type:"text"},on:{click:function(n){return t.handleSelect(e)}}},[t._v(t._s(e))])],1)}),0)])},z=[],O={data:function(){return{privatebloglist:this.$store.state.bloglist}},methods:{handleSelect:function(t){this.$store.commit("changeCurrent",t)}}},H=O,E=Object(c["a"])(H,q,z,!1,null,null,null),W=E.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("https://www.cnblogs.com/miracle77hp/articles/11163532.html\n\t")]),n("p",[t._v("git remote add origin url ///本地仓库与远程仓库关联\n\t")]),n("p",[t._v("git clone [url] ///拉取项目\n\t")]),n("p"),n("p",[t._v("git init ///当前目录创建git代码库\n\t")]),n("p",[t._v("git add 路径/指定文件 ///暂存区\n\t")]),n("p",[t._v('git commit -m "注释" ///暂存区转移到仓库\n\t')]),n("p",[t._v("git remote add origin + 远程仓库地址 //链接远程仓库，创建主分支\n\t")]),n("p",[t._v("git pull origin master // 把本地仓库的变化连接到远程仓库主分支\n\t")]),n("p",[t._v("git push -u origin master ///推送\n\t")]),n("p"),n("p",[t._v("git status ///查看变更文件\n\t")]),n("p",[t._v("git config --list ///配置文件\n\t")]),n("p",[t._v('git config --global user.name "用户名"///设置提交代码时的用户信息\n\t')]),n("p",[t._v('git config --global user.email "邮箱"///设置提交代码时的邮箱\n\t')]),n("p"),n("p"),n("p",[t._v("git clone [ssh url]///拉取ssh\n\t")]),n("p",[t._v("ssh-keygen -t rsa ///创建公钥")]),n("el-button",{on:{click:t.readTestFile}},[t._v("test")])],1)},A=[],G={methods:{readTestFile:function(){var t=this.loadFile("./src/file/test.txt");console.log(this.unicodeToUtf8(t))},loadFile:function(t){var e=new XMLHttpRequest,n="file:"===document.location.protocol?0:200;return e.open("GET",t,!1),e.overrideMimeType("text/html;charset=utf-8"),e.send(null),e.status===n?e.responseText:null},unicodeToUtf8:function(t){return t=t.replace(/\\/g,"%"),unescape(t)}}},P=G,J=Object(c["a"])(P,$,A,!1,null,null,null),M=J.exports,D=n("d668"),F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[t._v("\n\t\theader\n\t")]),n("el-main",[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-row",[n("el-col",{staticStyle:{"background-color":"coral"},attrs:{span:4}},[t._v("\n\t\t\t\t\t\t1\n\t\t\t\t\t")]),n("el-col",{staticStyle:{"background-color":"#42b983",border:"1px solid black"},attrs:{span:16}},[n("el-row",[n("el-col",{staticStyle:{"background-color":"red"}},[t._v("\n\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t")])],1),n("el-row",[n("el-col",{staticStyle:{"background-color":"antiquewhite"},attrs:{span:8}},[t._v("\n\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t")]),n("el-col",{staticStyle:{"background-color":"brown"},attrs:{span:8}},[t._v("\n\t\t\t\t\t\t\t\t4\n\t\t\t\t\t\t\t")]),n("el-col",{staticStyle:{"background-color":"mintcream"},attrs:{span:8}},[t._v("\n\t\t\t\t\t\t\t\t5\n\t\t\t\t\t\t\t")])],1)],1),n("el-col",{staticStyle:{"background-color":"#4a5cff"},attrs:{span:4}},[t._v("\n\t\t\t\t\t\t6\n\t\t\t\t\t")])],1)],1)],1)],1)],1)},L=[],U={name:"test1"},B=U,I=Object(c["a"])(B,F,L,!1,null,"8dec1a5a",null),N=I.exports,K=n("a3a0"),V={name:"app",components:{headernav:d,mainpage:m,rightaside:y["default"],blognews:x["default"],blogitems:S["default"],headerpageright:C,headerpageleft:h["default"],cv:R["default"],blogmain:W,github:M,csharpstring:D["default"],test:N,elementstydu:K["default"]},data:function(){return{Height:0,Width:0,privatecurrent:"test"}},methods:{autoRootFontSize:function(){document.documentElement.style.fontSize=Math.min(screen.width,document.documentElement.getBoundingClientRect().width)/720*8+"px"}},mounted:function(){var t=this;this.Height=document.documentElement.clientHeight-100,window.onresize=function(){t.Height=document.documentElement.clientHeight-100,t.autoRootFontSize()}},computed:{changeCurrent:function(){return this.$store.state.current}},watch:{changeCurrent:function(){this.privatecurrent=this.$store.state.current}}},X=V,Q=(n("034f"),Object(c["a"])(X,a,o,!1,null,null,null)),Y=Q.exports,Z=n("5c96"),tt=n.n(Z),et=n("2f62");r["default"].use(et["a"]);var nt=new et["a"].Store({strict:!1,state:{current:"",bloglist:["github","csharpstring","test","elementstydu"]},mutations:{changeCurrent:function(t,e){t.current=e}},actions:{changeCurrent:function(t,e){t.commit("changeCurrent",e)}}});n("0fae");r["default"].use(tt.a),r["default"].config.productionTip=!1,r["default"].prototype.$store=nt,new r["default"]({render:function(t){return t(Y)}}).$mount("#app")},6210:function(t,e){},"64a9":function(t,e,n){},"699f":function(t,e,n){"use strict";var r=n("f572"),a=n.n(r);e["default"]=a.a},"6ac5":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-header",{staticStyle:{border:"solid 1px gray","font-size":"1.875rem",color:"black","background-color":"#afd7ff","border-radius":"10px 10px 0px 0px"}},[t._v("公告")]),n("el-main",{staticStyle:{border:"solid 1px gray","border-radius":"0px 0px 10px 10px"}},[n("p",[t._v("1.")]),n("p",[t._v("2.")]),n("p",[t._v("3.")])])],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"73d8":function(t,e){},7534:function(t,e,n){"use strict";var r=n("803f"),a=n("b6de"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},"7fcf":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Aside")])])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"803f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"background-color":"#afd7ff","padding-top":"50px","padding-bottom":"50px"},attrs:{gutter:20}},[n("el-col",{attrs:{span:20,offset:3}},[n("p",[t._v("Anwesende")])])],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"93dc":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-header",{staticStyle:{border:"solid 1px gray","font-size":"1.875rem",color:"black","background-color":"#afd7ff","border-radius":"10px 10px 0px 0px"}},[t._v("分类")]),n("el-main",{staticStyle:{border:"solid 1px gray","border-radius":"0px 0px 10px 10px"}},[n("p",[t._v("1.")]),n("p",[t._v("2.")]),n("p",[t._v("3.")]),n("p",[t._v("4.")]),n("p",[t._v("5.")]),n("p",[t._v("6.")]),n("p",[t._v("7.")]),n("p",[t._v("8.")]),n("p",[t._v("9.")])])],1)},a=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},"99ff":function(t,e,n){"use strict";var r=n("fe87"),a=n.n(r);e["default"]=a.a},a3a0:function(t,e,n){"use strict";var r=n("4398"),a=n("699f"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},a8bb:function(t,e){},aaee:function(t,e,n){"use strict";var r=n("6ac5"),a=n("f29f"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},b6de:function(t,e,n){"use strict";var r=n("73d8"),a=n.n(r);e["default"]=a.a},b98b:function(t,e,n){"use strict";var r=n("e5c2"),a=n.n(r);a.a},c714:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v(" //字符串转json\n\t")]),n("p",[t._v(" public static void strJson()\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(' string jsonText = "{"shenzheng":"深圳","beijing":"北京","shanghai":[{"zj1":"zj11","zj2":"zj22"},"zjs"]}";\n\t')]),n("p",[t._v(" JObject jo = (JObject)JsonConvert.DeserializeObject(jsonText);//或者JObject jo = JObject.Parse(jsonText);\n\t")]),n("p",[t._v(' string zone = jo["shenzheng"].ToString();//输出 "深圳"\n\t')]),n("p",[t._v(' string zone_en = jo["shanghai"].ToString();//输出 "[{"zj1":"zj11","zj2":"zj22"},"zjs"]"\n\t')]),n("p",[t._v(' string zj1 = jo["shanghai"][1].ToString();//输出 "zjs"\n\t')]),n("p",[t._v(" Console.WriteLine(jo);\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" JSON字符串转DataTable\n\t")]),n("p",[t._v(" public static DataTable ToDataTableTwo(string json)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" DataTable dataTable = new DataTable(); //实例化\n\t")]),n("p",[t._v(" DataTable result;\n\t")]),n("p",[t._v(" try\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();\n\t")]),n("p",[t._v(" javaScriptSerializer.MaxJsonLength = Int32.MaxValue; //取得最大数值\n\t")]),n("p",[t._v(" ArrayList arrayList = javaScriptSerializer.Deserialize< ArrayList>(json);\n\t")]),n("p",[t._v(" if (arrayList.Count > 0)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" foreach (Dictionary< string, object> dictionary in arrayList)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" if (dictionary.Keys.Count< string>() == 0)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" result = dataTable;\n\t")]),n("p",[t._v(" return result;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" //Columns\n\t")]),n("p",[t._v(" if (dataTable.Columns.Count == 0)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" foreach (string current in dictionary.Keys)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" dataTable.Columns.Add(current, dictionary[current].GetType());\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" //Rows\n\t")]),n("p",[t._v(" DataRow dataRow = dataTable.NewRow();\n\t")]),n("p",[t._v(" foreach (string current in dictionary.Keys)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" dataRow[current] = dictionary[current];\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" dataTable.Rows.Add(dataRow); //循环添加行到DataTable中\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" catch\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" result = dataTable;\n\t")]),n("p",[t._v(" return result;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" DataTable转Json\n\t")]),n("p",[t._v(" string jsonGpsModel = JsonConvert.SerializeObject(DataTable);\n\t")]),n("p",[t._v(" http Post方法：\n\t")]),n("p",[t._v(" System.Net.HttpWebResponse response = CreateToHuaWeiPostHttp(url, token.Access_token, jsonGpsModel, null);\n\t")]),n("p",[t._v(" public static HttpWebResponse CreateToHuaWeiPostHttp(string url, string token, string paramStr, CookieCollection\n\t")]),n("p",[t._v(" cookies)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" HttpWebRequest request = null;\n\t")]),n("p",[t._v(" //发送HTTPS请求\n\t")]),n("p",[t._v(' if (url.StartsWith("https", StringComparison.OrdinalIgnoreCase))\n\t')]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" // SetCertificatePolicy();\n\t")]),n("p",[t._v(" request = WebRequest.Create(url) as HttpWebRequest;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" else\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" request = WebRequest.Create(url) as HttpWebRequest;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(' request.Method = "POST";\n\t')]),n("p",[t._v(' //request.ContentType = "application/x-www-form-urlencoded";\n\t')]),n("p",[t._v(' request.ContentType = "application/json";\n\t')]),n("p",[t._v(' request.Headers.Add("Authorization", "Bearer " + token);\n\t')]),n("p",[t._v(' request.Headers.Add("soapAction", "");\n\t')]),n("p",[t._v(" byte[] data = Encoding.UTF8.GetBytes(paramStr);\n\t")]),n("p",[t._v(" request.ContentLength = data.Length;\n\t")]),n("p",[t._v(" using (Stream stream = request.GetRequestStream())\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" stream.Write(data, 0, data.Length);\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" if (cookies != null)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" request.CookieContainer = new CookieContainer();\n\t")]),n("p",[t._v(" request.CookieContainer.Add(cookies);\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" //发送POST数据\n\t")]),n("p",[t._v(" return request.GetResponse() as HttpWebResponse;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" 获取令牌方法：\n\t")]),n("p",[t._v(' string accessToken = GetToken("key", "value");\n\t')]),n("p",[t._v(" Token token = JsonConvert.DeserializeObject< token >(accessToken);\n\t")]),n("p",[t._v(" private static string GetToken(string key, string secury)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(' string url = "https://openapi.huawei.com:443/oauth2/token";\n\t')]),n("p",[t._v(" System.Net.HttpWebResponse response = CreateTokenHttpResponse(url, key, secury, null);\n\t")]),n("p",[t._v(" string result = GetResponseString(response);\n\t")]),n("p",[t._v(" return result;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" 创建获取token请求\n\t")]),n("p",[t._v(" System.Net.HttpWebResponse response = CreateTokenHttpResponse(url, key, secury, null);\n\t")]),n("p",[t._v(" public static HttpWebResponse CreateTokenHttpResponse(string url, string key, string secury, CookieCollection\n\t")]),n("p",[t._v(" cookies)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" HttpWebRequest request = null;\n\t")]),n("p",[t._v(" //如果是发送HTTPS请求\n\t")]),n("p",[t._v(' if (url.StartsWith("https", StringComparison.OrdinalIgnoreCase))\n\t')]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" request = WebRequest.Create(url) as HttpWebRequest;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" else\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" request = WebRequest.Create(url) as HttpWebRequest;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(' request.Method = "POST";\n\t')]),n("p",[t._v(' request.ContentType = "application/x-www-form-urlencoded";\n\t')]),n("p",[t._v(' request.Headers.Add("Authorization", "Basic " + Convert.ToBase64String(System.Text.Encoding.UTF8.GetBytes(key +\n\t')]),n("p",[t._v(' ":" + secury)).Trim());\n\t')]),n("p",[t._v(' byte[] data = Encoding.UTF8.GetBytes("grant_type=client_credentials");\n\t')]),n("p",[t._v(" using (Stream stream = request.GetRequestStream())\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" stream.Write(data, 0, data.Length);\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" if (cookies != null)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" request.CookieContainer = new CookieContainer();\n\t")]),n("p",[t._v(" request.CookieContainer.Add(cookies);\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" return request.GetResponse() as HttpWebResponse;\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" public static string GetResponseString(HttpWebResponse webresponse)\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" using (Stream s = webresponse.GetResponseStream())\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" StreamReader reader = new StreamReader(s, Encoding.UTF8);\n\t")]),n("p",[t._v(" return reader.ReadToEnd();\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" }\n\t")]),n("p",[t._v(" 令牌\n\t")]),n("p",[t._v(" public class Token\n\t")]),n("p",[t._v(" {\n\t")]),n("p",[t._v(" public string scope;\n\t")]),n("p",[t._v(" public string token_type;\n\t")]),n("p",[t._v(" public string expires_in;\n\t")]),n("p",[t._v(" public string Access_token;\n\t")]),n("p",[t._v(" }")]),t._v("\n\t< ")])}];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return a})},d668:function(t,e,n){"use strict";var r=n("c714"),a=n("0db2"),o=n("2877"),i=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);e["default"]=i.exports},db26:function(t,e){},e5c2:function(t,e,n){},f29f:function(t,e,n){"use strict";var r=n("6210"),a=n.n(r);e["default"]=a.a},f572:function(t,e){},fe87:function(t,e){}});
//# sourceMappingURL=app.2871a0c3.js.map