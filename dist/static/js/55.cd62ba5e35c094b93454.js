webpackJsonp([55,73],{49:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{answer01:"",options:["1-10000","10001-20000","20001-30000","30001-40000","以上都不是"],answer02:"",downTime:600,showTime:""}},mounted:function(){this.answer01=this.options[0],this.answer02=this.options[0];var e=this;this.showTime="10分0秒";var n=setInterval(function(){e.downTime--,0===e.downTime&&clearInterval(n);var s=parseInt(e.downTime/60),t=e.downTime%60;e.showTime=s+"分"+t+"秒"},1e3)},beforeDestroy:function(){clearInterval(timecount)}}},195:function(e,n,s){var t=s(1)(s(49),s(326),null,null);e.exports=t.exports},326:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,s=e._self._c||n;return s("div",{staticClass:"container bgF"},[s("topComponent",{attrs:{title:"身份验证"}}),e._v(" "),s("div",{staticClass:"reportAnswers"},[s("p",{staticClass:"timeTip"},[e._v("请在"),s("span",[e._v(e._s(e.showTime))]),e._v("内提交答案")]),e._v(" "),s("ul",{staticClass:"ansList",attrs:{id:"ansList"}},[s("li",[s("p",[s("span",[e._v("Q1")]),e._v("2013年01月至2016年05月期间，您的所有贷款中，最近办理的一笔贷款额度为多少？"+e._s(e.answer01))]),e._v(" "),e._l(e.options,function(n){return s("label",{class:{checked:e.answer01==n}},[s("span",[e._v(e._s(n))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.answer01,expression:"answer01"}],attrs:{type:"radio"},domProps:{value:n,checked:e._q(e.answer01,n)},on:{change:function(s){e.answer01=n}}})])})],2),e._v(" "),s("li",[s("p",[s("span",[e._v("Q2")]),e._v("2013年01月至2016年05月期间，您的所有贷款中，最近办理的一笔贷款额度为多少？"+e._s(e.answer02))]),e._v(" "),e._l(e.options,function(n){return s("label",{class:{checked:e.answer02==n}},[s("span",[e._v(e._s(n))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.answer02,expression:"answer02"}],attrs:{type:"radio"},domProps:{value:n,checked:e._q(e.answer02,n)},on:{change:function(s){e.answer02=n}}})])})],2)])])],1)},staticRenderFns:[]}}});