(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748565dd"],{"56d6f":function(t,a,e){"use strict";e.r(a);var c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app-container"},[e("el-card",{staticClass:"cc-mar-b-10"},[t._v("\n    使用图表需要安装: v-charts echarts\n    "),e("el-link",{attrs:{href:"https://v-charts.js.org/#/",type:"primary"}},[t._v("v-charts 文档")])],1),t._v(" "),e("el-row",{attrs:{gutter:10}},[e("el-col",{attrs:{sm:24,lg:12}},[e("el-card",{staticClass:"cc-mar-b-10"},[e("ve-radar",{attrs:{data:t.getChartData(7),colors:t.vchartColor}})],1)],1),t._v(" "),e("el-col",{attrs:{sm:24,lg:12}},[e("el-card",{staticClass:"cc-mar-b-10"},[e("ve-radar",{attrs:{data:t.getChartData(7),settings:t.chartStackSettings,colors:t.vchartColor}})],1)],1)],1)],1)},r=[],s=e("ed08"),o={components:{},data:function(){return this.vchartColor=["#95a2ff","#fa8080","#ffc076","#fae768","#87e885","#3cb9fc","#73abf5","#cb9bff","#434348","#90ed7d","#f7a35c","#8085e9​​​​​​​"],this.chartSettings={metrics:["访问用户","下单用户"],dimension:["日期"]},this.chartShowLineSettings={showLine:["下单用户"]},this.chartStackSettings={stack:{"用户":["访问用户","下单用户"]}},this.chartShowNumtExtend={series:{label:{show:!0,position:"top"}}},{chartData:{columns:["日期","访问用户","下单用户","下单率"],rows:[{"日期":"1/1","访问用户":1393,"下单用户":1093,"下单率":.32},{"日期":"1/2","访问用户":3530,"下单用户":3230,"下单率":.26},{"日期":"1/3","访问用户":2923,"下单用户":2623,"下单率":.76},{"日期":"1/4","访问用户":1723,"下单用户":1423,"下单率":.49},{"日期":"1/5","访问用户":3792,"下单用户":3492,"下单率":.323},{"日期":"1/6","访问用户":4593,"下单用户":4293,"下单率":.78}]}}},computed:{},mounted:function(){},methods:{getChartData:function(t){for(var a=[],e=["日期","访问用户","下单用户","下单率","流失用户","潜在用户"],c=0;c<t;c++)a.push({"日期":"1/"+(1+c),"访问用户":Object(s["f"])(1e3,6e3),"下单用户":Object(s["f"])(1e3,6e3),"下单率":Object(s["f"])(1,30),"流失用户":Object(s["f"])(28,220),"潜在用户":Object(s["f"])(59,580)});return{rows:a,columns:e}}}},n=o,i=e("2877"),h=Object(i["a"])(n,c,r,!1,null,"5ce87918",null);a["default"]=h.exports}}]);