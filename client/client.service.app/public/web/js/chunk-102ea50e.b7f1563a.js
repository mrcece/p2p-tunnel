(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-102ea50e"],{2606:function(e,t,c){"use strict";c("675d")},"2f23":function(e,t,c){var n=c("24fb");t=n(!1),t.push([e.i,".socks5-wrap[data-v-3063b7c2]{padding:2rem}.alert[data-v-3063b7c2]{margin-bottom:1rem}.form[data-v-3063b7c2]{border:1px solid #eee;padding:2rem;border-radius:.4rem}@media screen and (max-width:768px){.el-col[data-v-3063b7c2]{margin-top:.6rem}}",""]),e.exports=t},3476:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),o=function(e){return Object(n["pushScopeId"])("data-v-3063b7c2"),e=e(),Object(n["popScopeId"])(),e},a={class:"socks5-wrap"},r={class:"title t-c"},l={class:"form"},u={class:"w-100"},i={class:"w-100"},s={class:"w-100 t-c",style:{"line-height":"1.8rem"}},d=o((function(){return Object(n["createElementVNode"])("p",null,"自动设置代理有可能失败，可以手动配置系统代理“使用设置脚本”",-1)})),b=Object(n["createTextVNode"])("预置pac规则文件地址 "),f=Object(n["createTextVNode"])("自定义pac规则文件地址 "),m={class:"w-100 t-c"},O=Object(n["createTextVNode"])("确 定"),j=Object(n["createTextVNode"])("客户端配置"),p=Object(n["createTextVNode"])("服务端配置"),V={class:"w-100"};function N(e,t,c,o,N,x){var C=Object(n["resolveComponent"])("el-alert"),h=Object(n["resolveComponent"])("el-input"),w=Object(n["resolveComponent"])("el-form-item"),g=Object(n["resolveComponent"])("el-col"),v=Object(n["resolveComponent"])("el-option"),_=Object(n["resolveComponent"])("el-select"),k=Object(n["resolveComponent"])("el-row"),E=Object(n["resolveComponent"])("el-checkbox"),P=Object(n["resolveComponent"])("el-tooltip"),S=Object(n["resolveComponent"])("el-button"),I=Object(n["resolveComponent"])("ConfigureModal"),L=Object(n["resolveComponent"])("el-form");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("h3",r,Object(n["toDisplayString"])(e.$route.meta.name),1),Object(n["createVNode"])(C,{class:"alert",type:"warning","show-icon":"",closable:!1,title:"socks5代理，如果服务端开启，则也可以代理到服务端",description:"适用于ftp双通道"}),Object(n["createElementVNode"])("div",l,[Object(n["createVNode"])(L,{ref:"formDom",model:o.state.form,rules:o.state.rules,"label-width":"80px"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(k,{gutter:10},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{label:"监听端口",prop:"ListenPort"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h,{modelValue:o.state.form.ListenPort,"onUpdate:modelValue":t[0]||(t[0]=function(e){return o.state.form.ListenPort=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{label:"buffersize",prop:"BufferSize"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(h,{modelValue:o.state.form.BufferSize,"onUpdate:modelValue":t[1]||(t[1]=function(e){return o.state.form.BufferSize=e})},null,8,["modelValue"])]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:24,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{label:"目标端",prop:"TargetName"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(_,{modelValue:o.state.form.TargetName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return o.state.form.TargetName=e}),placeholder:"选择目标"},{default:Object(n["withCtx"])((function(){return[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.targets,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])(v,{key:t,label:e.label,value:e.Name},null,8,["label","value"])})),128))]})),_:1},8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(w,{label:"","label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(k,{gutter:10},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{"label-width":"0",prop:"ListenEnable"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"不勾选表示关闭socks5监听",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{modelValue:o.state.form.ListenEnable,"onUpdate:modelValue":t[3]||(t[3]=function(e){return o.state.form.ListenEnable=e}),label:"开启监听"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{"label-width":"0",prop:"ConnectEnable"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"作为目标端时，是否允许被访问",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{modelValue:o.state.form.ConnectEnable,"onUpdate:modelValue":t[4]||(t[4]=function(e){return o.state.form.ConnectEnable=e}),label:"允许访问"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{"label-width":"0",prop:"IsPac"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"勾选则设置系统代理，不勾选则需要自己设置",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{modelValue:o.state.form.IsPac,"onUpdate:modelValue":t[5]||(t[5]=function(e){return o.state.form.IsPac=e}),label:"设置系统代理"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1}),Object(n["createVNode"])(g,{xs:12,sm:6,md:6,lg:6,xl:6},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(w,{"label-width":"0",prop:"IsCustomPac"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(P,{class:"box-item",effect:"dark",content:"自定义pac还是使用预制的pac规则",placement:"top-start"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(E,{modelValue:o.state.form.IsCustomPac,"onUpdate:modelValue":t[6]||(t[6]=function(e){return o.state.form.IsCustomPac=e}),label:"自定义pac"},null,8,["modelValue"])]})),_:1})]})),_:1})]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(w,{"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",s,[d,Object(n["createElementVNode"])("p",null,[b,Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(o.state.localtion)+"/socks.pac",1)]),Object(n["createElementVNode"])("p",null,[f,Object(n["createElementVNode"])("strong",null,Object(n["toDisplayString"])(o.state.localtion)+"/socks-custom.pac",1)])])]})),_:1}),Object(n["createVNode"])(w,{"label-width":"0"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",m,[Object(n["createVNode"])(S,{type:"primary",loading:o.state.loading,onClick:o.handleSubmit,class:"m-r-1"},{default:Object(n["withCtx"])((function(){return[O]})),_:1},8,["loading","onClick"]),Object(n["createVNode"])(I,{className:"Socks5ClientConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,null,{default:Object(n["withCtx"])((function(){return[j]})),_:1})]})),_:1}),Object(n["createVNode"])(I,{className:"Socks5ServerConfigure"},{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(S,null,{default:Object(n["withCtx"])((function(){return[p]})),_:1})]})),_:1})])]})),_:1}),Object(n["createVNode"])(w,{"label-width":"0",class:"hidden-xs-only",style:{"margin-bottom":"0"}},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("div",V,[Object(n["createVNode"])(h,{modelValue:o.state.pac,"onUpdate:modelValue":t[7]||(t[7]=function(e){return o.state.pac=e}),rows:16,type:"textarea",placeholder:"写pac内容",resize:"none"},null,8,["modelValue"])])]})),_:1})]})),_:1},8,["model","rules"])])])}c("99af"),c("d81d"),c("a9e3"),c("e9c4");var x=c("a1e9"),C=c("97af"),h=function(){return Object(C["b"])("socks5/get")},w=function(e){return Object(C["b"])("socks5/set",e)},g=function(){return Object(C["b"])("socks5/getpac")},v=function(e){return Object(C["b"])("socks5/setpac",e)},_=c("5c40"),k=c("3ef4"),E=c("3fd2"),P=c("8286"),S=c("49f5"),I={components:{ConfigureModal:S["a"]},setup:function(){var e=Object(E["a"])(),t=Object(P["a"])(),c=function(){h().then((function(e){r.form.ListenEnable=e.ListenEnable,r.form.ListenPort=e.ListenPort,r.form.BufferSize=e.BufferSize,r.form.ConnectEnable=e.ConnectEnable,r.form.IsCustomPac=e.IsCustomPac,r.form.IsPac=e.IsPac,r.form.TargetName=e.TargetName}))},n=function(){g().then((function(e){r.pac=e}))},o=function(){v({IsCustom:r.form.IsCustomPac,Pac:r.pac}).then((function(){}))};Object(_["rb"])((function(){c(),n()}));var a=Object(x["c"])((function(){return[{Name:"",label:"服务器"}].concat(e.clients.map((function(e){return{Name:e.Name,label:e.Name}})))})),r=Object(x["p"])({loading:!1,pac:"",localtion:window.location.origin,form:{ListenEnable:!1,ListenPort:5412,ConnectEnable:!1,IsPac:!1,IsCustomPac:!1,BufferSize:8192,TargetName:""},rules:{ListenPort:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:65535,message:"数字 1-65535",trigger:"blur",transform:function(e){return Number(e)}}],BufferSize:[{required:!0,message:"必填",trigger:"blur"},{type:"number",min:1,max:1048576,message:"数字 1-1048576",trigger:"blur",transform:function(e){return Number(e)}}]}}),l=Object(x["r"])(null),u=function(){l.value.validate((function(e){if(!e)return!1;r.loading=!0;var t=JSON.parse(JSON.stringify(r.form));t.ListenPort=Number(t.ListenPort),t.BufferSize=Number(t.BufferSize),console.log(t),w(t).then((function(){r.loading=!1,t.IsPac&&o(),k["a"].success("操作成功！")})).catch((function(e){r.loading=!1}))}))};return{targets:a,shareData:t,state:r,formDom:l,handleSubmit:u}}},L=(c("2606"),c("6b0d")),y=c.n(L);const B=y()(I,[["render",N],["__scopeId","data-v-3063b7c2"]]);t["default"]=B},"675d":function(e,t,c){var n=c("2f23");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var o=c("499e").default;o("325a6ee8",n,!0,{sourceMap:!1,shadowMode:!1})}}]);