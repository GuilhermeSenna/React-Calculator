(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(4),i=a.n(c),o=(a(14),a(2)),u=a(1),p=function(e){var t=e.dispatch,a=e.digit;return n.a.createElement("button",{onClick:function(){t({type:d.ADD_DIGIT,payload:{digit:a}})}},a)},l=function(e){var t=e.dispatch,a=e.operation;return n.a.createElement("button",{onClick:function(){t({type:d.CHOOSE_OPERATION,payload:{operation:a}})}},a)},d=(a(16),{ADD_DIGIT:"add-digit",CHOOSE_OPERATION:"choose-operation",DELETE_DIGIT:"delete-digit",EVALUATE:"evaluate"});var s=function(){var e=function(e){var t=e.currentOperand,a=e.previousOperand,r=e.operation,n=parseFloat(a),c=parseFloat(t);if(isNaN(n)||isNaN(c))return"";var i="";switch(r){case"+":i=n+c;break;case"-":i=n-c;break;case"*":i=n*c;break;case"/":i=n/c;break;default:return""}return i.toString()},t=new Intl.NumberFormat("en-us",{maximumFractionDigits:0}),a=function(e){if(null!=e){var a=e.split("."),r=Object(o.a)(a,2),n=r[0],c=r[1];return null==c?t.format(n):"".concat(t.format(n),".").concat(c)}},c=Object(r.useReducer)(function(t,a){var r=a.type,n=a.payload;switch(r){case d.ADD_DIGIT:return t.overwrite?Object(u.a)({},t,{currentOperand:n.digit,overwrite:!1}):"0"===n.digit&&"0"===t.currentOperand?t:"."===n.digit&&t.currentOperand.includes(".")?t:Object(u.a)({},t,{currentOperand:"".concat(t.currentOperand||"").concat(n.digit)});case d.CHOOSE_OPERATION:return null==t.currentOperand&&null==t.previousOperand?t:null==t.currentOperand?Object(u.a)({},t,{operation:n.operation}):null==t.previousOperand?Object(u.a)({},t,{operation:n.operation,previousOperand:t.currentOperand,currentOperand:null}):Object(u.a)({},t,{previousOperand:e(t),operation:n.operation,currentOperand:null});case d.DELETE_DIGIT:return t.overwrite?Object(u.a)({},t,{overwrite:!1,currentOperand:null}):null==t.currentOperand?t:1===t.currentOperand.length?Object(u.a)({},t,{currentOperand:null}):{currentOperand:t.currentOperand.slice(0,-1)};case d.EVALUATE:return null==t.operation||null==t.currentOperand||null==t.previousOperand?t:Object(u.a)({},t,{overwrite:!0,previousOperand:null,operation:null,currentOperand:e(t)});default:return{operation:null,previousOperand:null,currentOperand:e(0)}}},{}),i=Object(o.a)(c,2),s=i[0],O=s.currentOperand,E=s.previousOperand,m=s.operation,v=i[1];return Object(r.useEffect)(function(){v({type:""})},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"calculator-grid"},n.a.createElement("div",{className:"output"},n.a.createElement("div",{className:"previous-operand"},a(E)," ",m),n.a.createElement("div",{className:"current-operand"},a(O))),n.a.createElement("button",{className:"span-two",onClick:function(){v({type:""})}},"AC"),n.a.createElement("button",{onClick:function(){v({type:d.DELETE_DIGIT})}},"DEL"),n.a.createElement(l,{operation:"/",dispatch:v}),n.a.createElement(p,{digit:"1",dispatch:v}),n.a.createElement(p,{digit:"2",dispatch:v}),n.a.createElement(p,{digit:"3",dispatch:v}),n.a.createElement(l,{operation:"*",dispatch:v}),n.a.createElement(p,{digit:"4",dispatch:v}),n.a.createElement(p,{digit:"5",dispatch:v}),n.a.createElement(p,{digit:"6",dispatch:v}),n.a.createElement(l,{operation:"+",dispatch:v}),n.a.createElement(p,{digit:"7",dispatch:v}),n.a.createElement(p,{digit:"8",dispatch:v}),n.a.createElement(p,{digit:"9",dispatch:v}),n.a.createElement(l,{operation:"-",dispatch:v}),n.a.createElement(p,{digit:".",dispatch:v}),n.a.createElement(p,{digit:"0",dispatch:v}),n.a.createElement("button",{className:"span-two",onClick:function(){v({type:d.EVALUATE})}},"=")))};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s,null)))},5:function(e,t,a){e.exports=a(18)}},[[5,2,1]]]);
//# sourceMappingURL=main.81172cb9.chunk.js.map