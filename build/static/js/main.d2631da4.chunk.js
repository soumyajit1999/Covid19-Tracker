(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(99),a(24)),i=a.n(s),l=a(35),u=a(16),m=(a(101),a(237)),f=a(238),d=a(239),v=a(231),p=a(235),h=a(87),E=a(236);a(102);var b=function(e){var t=e.title,a=e.cases,n=e.total,c=e.active,o=e.isRed,s=Object(h.a)(e,["title","cases","total","active","isRed"]);return console.log(t,c),r.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(c&&"infoBox--selected"," ").concat(o&&"infoBox--red")},r.a.createElement(p.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},t),r.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),r.a.createElement(E.a,{className:"infoBox__total",color:"textSecondary"},n," Total")))},y=a(242),g=a(243),j=(a(106),a(86)),O=a(14),x=a.n(O),w=a(240),C=a(241),N={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},_=function(e){var t=Object(j.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},k=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"};var S=function(e){var t=e.countries,a=e.casesType,n=e.center,c=e.zoom;return r.a.createElement("div",{className:"map"},r.a.createElement(y.a,{center:n,zoom:c},r.a.createElement(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return r.a.createElement(w.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:N[t].hex,fillColor:N[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*N[t].multiplier},r.a.createElement(C.a,null,r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),r.a.createElement("div",{className:"info-name"},e.country),r.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(107);var R=function(e){var t=e.countries;return r.a.createElement("div",{className:"table"},t.map((function(e){var t=e.country,a=e.cases;return r.a.createElement("tr",null,r.a.createElement("td",null,t),r.a.createElement("td",null,r.a.createElement("strong",null,x()(a).format("0,0"))))})))},B=a(85),I={legend:{display:!1},elements:{points:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}},D=function(e,t){var a,n=[];for(var r in e.cases){if(a){var c={x:r,y:e[t][r]-a};n.push(c)}a=e[t][r]}return n};var T=function(e){var t=e.casesType,a=void 0===t?"cases":t,c=Object(n.useState)({}),o=Object(u.a)(c,2),s=o[0],m=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=D(e,a);m(t),console.log(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a]),r.a.createElement("div",null,(null===s||void 0===s?void 0:s.length)>0&&r.a.createElement(B.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:s}]},options:I}))};a(204);var M=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],E=s[1],y=Object(n.useState)({}),g=Object(u.a)(y,2),j=g[0],O=g[1],w=Object(n.useState)([]),C=Object(u.a)(w,2),N=C[0],B=C[1],I=Object(n.useState)({lat:34.80746,lng:-40.4796}),D=Object(u.a)(I,2),M=D[0],z=D[1],A=Object(n.useState)(3),W=Object(u.a)(A,2),L=W[0],J=W[1],Y=Object(n.useState)([]),q=Object(u.a)(Y,2),F=q[0],K=q[1],V=Object(n.useState)("cases"),$=Object(u.a)(V,2),G=$[0],H=$[1];Object(n.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=_(e);B(a),K(e),c(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var P=function(){var e=Object(l.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(a),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){E(a),O(e),z([e.countryInfo.lat,e.countryInfo.long]),J(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement("div",{className:"app__header"},r.a.createElement("h1",null,"COVID-19 TRACKER"),r.a.createElement(m.a,{className:"app__dropdown"},r.a.createElement(f.a,{variant:"outlined",onChange:P,value:h},r.a.createElement(d.a,{value:"worldwide"},"Worldwide"),a.map((function(e){return r.a.createElement(d.a,{value:e.value},e.name)}))))),r.a.createElement("div",{className:"app__stats"},r.a.createElement(b,{onClick:function(e){return H("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===G,cases:k(j.todayCases),total:x()(j.cases).format("0.0a")}),r.a.createElement(b,{onClick:function(e){return H("recovered")},title:"Recovered",active:"recovered"===G,cases:k(j.todayRecovered),total:x()(j.recovered).format("0.0a")}),r.a.createElement(b,{onClick:function(e){return H("deaths")},title:"Deaths",isRed:!0,active:"deaths"===G,cases:k(j.todayDeaths),total:x()(j.deaths).format("0.0a")})),r.a.createElement(S,{countries:F,casesType:G,center:M,zoom:L})),r.a.createElement(v.a,{className:"app__right"},r.a.createElement(p.a,null,r.a.createElement("div",{className:"app__information"},r.a.createElement("h3",null,"Live Cases by Country"),r.a.createElement(R,{countries:N}),r.a.createElement("h3",null,"Worldwide new ",G),r.a.createElement(T,{casesType:G})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.d2631da4.chunk.js.map