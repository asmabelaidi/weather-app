(this["webpackJsonprecipe-app"]=this["webpackJsonprecipe-app"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),r=n.n(c),s=n(4),i=n.n(s),o=(n(10),n(3)),d=(n(11),"68de0485b291a7d1ec512dc70e964fc8"),u="https://api.openweathermap.org/data/2.5/";var l=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)({}),i=Object(o.a)(s,2),l=i[0],h=i[1];return Object(a.jsxs)("div",{className:"undefined"!=typeof l.main&&l.main.temp>16?"app warm":"app",children:[Object(a.jsx)("div",{className:"search-bar",children:Object(a.jsx)("input",{type:"text",placeholder:"Search...",onChange:function(e){return r(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(u,"weather?q=").concat(n,"&units=metric&APPID=").concat(d)).then((function(e){return e.json()})).then((function(e){h(e),r(""),console.log(e)}))}})}),"undefined"!=typeof l.main?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"location-box",children:[Object(a.jsxs)("div",{className:"location",children:[l.name," ",l.sys.country]}),Object(a.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],a=e.getDate(),c=e.getFullYear();return"".concat(t," ").concat(a," ").concat(n," ").concat(c)}(new Date)})]}),Object(a.jsxs)("div",{className:"weather-box",children:[Object(a.jsxs)("div",{className:"temp",children:[Math.round(l.main.temp),"\xb0c"]}),Object(a.jsx)("div",{className:"weather",children:l.weather[0].main})]})]}):""]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l,{})}),document.getElementById("root")),h()}},[[12,1,2]]]);
//# sourceMappingURL=main.0d987a7d.chunk.js.map