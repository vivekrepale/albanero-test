!function(e){function t(t){for(var n,s,i=t[0],c=t[1],l=t[2],m=0,u=[];m<i.length;m++)s=i[m],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&u.push(r[s][0]),r[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);for(d&&d(t);u.length;)u.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={0:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;o.push([302,1]),a()}({205:function(e,t,a){var n={"./af":41,"./af.js":41,"./ar":42,"./ar-dz":43,"./ar-dz.js":43,"./ar-kw":44,"./ar-kw.js":44,"./ar-ly":45,"./ar-ly.js":45,"./ar-ma":46,"./ar-ma.js":46,"./ar-sa":47,"./ar-sa.js":47,"./ar-tn":48,"./ar-tn.js":48,"./ar.js":42,"./az":49,"./az.js":49,"./be":50,"./be.js":50,"./bg":51,"./bg.js":51,"./bm":52,"./bm.js":52,"./bn":53,"./bn-bd":54,"./bn-bd.js":54,"./bn.js":53,"./bo":55,"./bo.js":55,"./br":56,"./br.js":56,"./bs":57,"./bs.js":57,"./ca":58,"./ca.js":58,"./cs":59,"./cs.js":59,"./cv":60,"./cv.js":60,"./cy":61,"./cy.js":61,"./da":62,"./da.js":62,"./de":63,"./de-at":64,"./de-at.js":64,"./de-ch":65,"./de-ch.js":65,"./de.js":63,"./dv":66,"./dv.js":66,"./el":67,"./el.js":67,"./en-au":68,"./en-au.js":68,"./en-ca":69,"./en-ca.js":69,"./en-gb":70,"./en-gb.js":70,"./en-ie":71,"./en-ie.js":71,"./en-il":72,"./en-il.js":72,"./en-in":73,"./en-in.js":73,"./en-nz":74,"./en-nz.js":74,"./en-sg":75,"./en-sg.js":75,"./eo":76,"./eo.js":76,"./es":77,"./es-do":78,"./es-do.js":78,"./es-mx":79,"./es-mx.js":79,"./es-us":80,"./es-us.js":80,"./es.js":77,"./et":81,"./et.js":81,"./eu":82,"./eu.js":82,"./fa":83,"./fa.js":83,"./fi":84,"./fi.js":84,"./fil":85,"./fil.js":85,"./fo":86,"./fo.js":86,"./fr":87,"./fr-ca":88,"./fr-ca.js":88,"./fr-ch":89,"./fr-ch.js":89,"./fr.js":87,"./fy":90,"./fy.js":90,"./ga":91,"./ga.js":91,"./gd":92,"./gd.js":92,"./gl":93,"./gl.js":93,"./gom-deva":94,"./gom-deva.js":94,"./gom-latn":95,"./gom-latn.js":95,"./gu":96,"./gu.js":96,"./he":97,"./he.js":97,"./hi":98,"./hi.js":98,"./hr":99,"./hr.js":99,"./hu":100,"./hu.js":100,"./hy-am":101,"./hy-am.js":101,"./id":102,"./id.js":102,"./is":103,"./is.js":103,"./it":104,"./it-ch":105,"./it-ch.js":105,"./it.js":104,"./ja":106,"./ja.js":106,"./jv":107,"./jv.js":107,"./ka":108,"./ka.js":108,"./kk":109,"./kk.js":109,"./km":110,"./km.js":110,"./kn":111,"./kn.js":111,"./ko":112,"./ko.js":112,"./ku":113,"./ku.js":113,"./ky":114,"./ky.js":114,"./lb":115,"./lb.js":115,"./lo":116,"./lo.js":116,"./lt":117,"./lt.js":117,"./lv":118,"./lv.js":118,"./me":119,"./me.js":119,"./mi":120,"./mi.js":120,"./mk":121,"./mk.js":121,"./ml":122,"./ml.js":122,"./mn":123,"./mn.js":123,"./mr":124,"./mr.js":124,"./ms":125,"./ms-my":126,"./ms-my.js":126,"./ms.js":125,"./mt":127,"./mt.js":127,"./my":128,"./my.js":128,"./nb":129,"./nb.js":129,"./ne":130,"./ne.js":130,"./nl":131,"./nl-be":132,"./nl-be.js":132,"./nl.js":131,"./nn":133,"./nn.js":133,"./oc-lnc":134,"./oc-lnc.js":134,"./pa-in":135,"./pa-in.js":135,"./pl":136,"./pl.js":136,"./pt":137,"./pt-br":138,"./pt-br.js":138,"./pt.js":137,"./ro":139,"./ro.js":139,"./ru":140,"./ru.js":140,"./sd":141,"./sd.js":141,"./se":142,"./se.js":142,"./si":143,"./si.js":143,"./sk":144,"./sk.js":144,"./sl":145,"./sl.js":145,"./sq":146,"./sq.js":146,"./sr":147,"./sr-cyrl":148,"./sr-cyrl.js":148,"./sr.js":147,"./ss":149,"./ss.js":149,"./sv":150,"./sv.js":150,"./sw":151,"./sw.js":151,"./ta":152,"./ta.js":152,"./te":153,"./te.js":153,"./tet":154,"./tet.js":154,"./tg":155,"./tg.js":155,"./th":156,"./th.js":156,"./tk":157,"./tk.js":157,"./tl-ph":158,"./tl-ph.js":158,"./tlh":159,"./tlh.js":159,"./tr":160,"./tr.js":160,"./tzl":161,"./tzl.js":161,"./tzm":162,"./tzm-latn":163,"./tzm-latn.js":163,"./tzm.js":162,"./ug-cn":164,"./ug-cn.js":164,"./uk":165,"./uk.js":165,"./ur":166,"./ur.js":166,"./uz":167,"./uz-latn":168,"./uz-latn.js":168,"./uz.js":167,"./vi":169,"./vi.js":169,"./x-pseudo":170,"./x-pseudo.js":170,"./yo":171,"./yo.js":171,"./zh-cn":172,"./zh-cn.js":172,"./zh-hk":173,"./zh-hk.js":173,"./zh-mo":174,"./zh-mo.js":174,"./zh-tw":175,"./zh-tw.js":175};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=205},299:function(e,t,a){var n=a(300),r=a(301);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.i,r,""]]);var o={insert:"head",singleton:!1};n(r,o);e.exports=r.locals||{}},301:function(e,t,a){"use strict";a.r(t);var n=a(194),r=a.n(n)()(!1);r.push([e.i,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap);"]),r.push([e.i,'*,*::before,*::after{margin:0;padding:0;box-sizing:inherit}html{font-size:62.5%}@media only screen and (max-width: 55em){html{padding:0}}body{box-sizing:border-box;font-family:"Quicksand",san-serif;font-size:16px;font-weight:300;background-color:#343a40}.button{border:none;background-color:#fff;padding:1rem 2rem;font-family:"Quicksand",san-serif;font-weight:600;cursor:pointer;border-radius:4px}.button:hover{transform:translateY(-1px)}.button:focus{outline:none}.layout-container{display:grid;grid-template-columns:1fr;align-content:center}.layout-container__header{display:grid;grid-template-columns:1fr}.layout-container__header__title{justify-self:center;color:#e6e6e6;padding:3rem 2rem;padding-top:6rem}.layout-container__header__button--next{background-color:#e6e6e6;position:absolute;right:0;margin:1rem}.layout-container__header__button--prev{background-color:#e6e6e6;position:absolute;left:0;margin:1rem}.home-container{display:grid;justify-items:center}.home-container__top{display:grid;align-content:center;grid-gap:4rem;justify-content:center;padding:3rem 0;width:50rem}@media only screen and (max-width: 45em){.home-container__top{padding:3rem 2rem;width:100vw}}.home-container__top__custom-rows-contianer{display:grid;grid-gap:2rem}.home-container__top__button{justify-self:end;background-color:#28a745;color:#fff}.home-container__bottom{display:grid;grid-gap:4rem;padding:3rem 8rem;width:100vw}@media only screen and (max-width: 45em){.home-container__bottom{padding:3rem 2rem;width:100vw}}.home-container__bottom__button{background-color:#ffc31a;justify-self:start}.home-container__bottom__cards-container{display:grid;grid-template-columns:repeat(auto-fit, 28rem);grid-gap:4rem;justify-content:center}.home-container hr{width:100%}.custom-row-container{display:grid;grid-template-columns:1fr max-content;grid-auto-flow:column;justify-content:center;justify-items:center;grid-gap:2rem;align-content:center;margin-bottom:1rem}.custom-row-container__inputs{display:grid;grid-template-columns:repeat(2, 1fr);grid-gap:2rem;justify-content:center}@media only screen and (max-width: 45em){.custom-row-container__inputs{grid-template-columns:1fr}}.custom-row-container__inputs__input{width:25rem;padding:1rem;border:none;border-radius:4px;font-family:"Quicksand",san-serif;font-weight:500}.custom-row-container__inputs__input:focus{outline:none}.custom-row-container__button{padding:0.5rem 0.8rem;align-self:center;background-color:#dc3545;color:#fff}.card-container{display:grid;width:28rem;background-color:#e6e6e6;color:#383838;border-radius:4px;padding:1rem;align-content:start}.card-container__text{font-size:20px;font-weight:500}.card-container__top{display:grid;grid-template-columns:minmax(min-content, 2fr) 1fr;grid-gap:1rem;word-break:normal}.card-container__top__name{word-wrap:break-word;font-size:22px;font-weight:800;max-width:16rem;hyphens:auto}.card-container__top__id{font-size:16px;justify-self:end;color:#17a2b8}.card-container__value{font-size:20px;word-wrap:break-word;max-width:26rem;hyphens:auto}.graph-container{width:100vw;height:80vh;display:grid;grid-template-columns:1fr;justify-items:center;padding:1rem}@media only screen and (max-width: 24em){.graph-container{padding:0}}.graph-container canvas{max-width:55vw;max-height:60vh;background-color:#e6e6e6;border-radius:4px}@media only screen and (max-width: 75em){.graph-container canvas{max-width:70vw;max-height:80vh}}@media only screen and (max-width: 45em){.graph-container canvas{max-width:90vw;max-height:100vh}}@media only screen and (max-width: 32em){.graph-container canvas{max-width:100vw;max-height:100vh}}\n',""]),t.default=r},302:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(23),s=a.n(o),i=a(36),c=a(13),l=a(2),d=a(192);const m=["1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],u=[.2,1,3,5,7,11,10,11,9,5,6,8,11,13,17,15,20,21,32,45,30,24,42,43];var p=()=>{const e={labels:m,datasets:[{label:"Revenue generated (in millions)",data:u,backgroundColor:"rgba(255, 1, 55, 0)",borderWidth:2,borderColor:"#383838",lineTesion:.5,pointBackgroundColor:"#00ff00",pointBorderWidth:0,responsive:!0,maintainAspectRatio:!0}]};return r.a.createElement("div",{className:"graph-container"},r.a.createElement(d.Line,{data:e,height:15,width:25,redraw:!0,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,stepSize:5}}]},title:{display:!0,text:"Revenue generated",fontSize:14,fontColor:"#343a40",fontFamily:"'Quicksand'"}}}))};var h=Object(c.b)()(({dispatch:e,id:t,name:a,value:o})=>{const[s,i]=Object(n.useState)(a),[c,l]=Object(n.useState)(o);return Object(n.useEffect)(()=>{e({type:"handleNameChange",id:t,name:s})},[s]),Object(n.useEffect)(()=>{e({type:"handleValueChange",id:t,value:c})},[c]),r.a.createElement("form",{onSubmit:a=>{a.preventDefault(),e({type:"deleteSelectedRow",id:t})},className:"custom-row-container"},r.a.createElement("div",{className:"custom-row-container__inputs"},r.a.createElement("input",{className:"custom-row-container__inputs__input",type:"text",onChange:e=>i(e.target.value),placeholder:"Name"}),r.a.createElement("input",{className:"custom-row-container__inputs__input",type:"text",onChange:e=>l(e.target.value),placeholder:"Value"})),r.a.createElement("input",{className:"custom-row-container__button button",type:"submit",value:"x"}))});var j=e=>r.a.createElement("div",{className:"card-container"},r.a.createElement("div",{className:"card-container__top"},r.a.createElement("h1",{className:"card-container__text card-container__top__name"},e.name),r.a.createElement("h1",{className:"card-container__text card-container__top__id"},e.id)),r.a.createElement("h1",{className:"card-container__text card-container__value"},e.value));var g=Object(c.b)(e=>({customRowsArray:e.home.customRowsArray,tp:e.home.tp,displayCards:e.home.displayCards}))(({dispatch:e,customRowsArray:t,tp:a,displayCards:n})=>r.a.createElement("div",{className:"home-container"},r.a.createElement("div",{className:"home-container__top"},r.a.createElement("div",{className:"home-container__top__custom-rows-contianer"},t.map((e,t)=>r.a.createElement("div",{key:t},r.a.createElement(h,{id:e.id,name:e.name,value:e.value}),r.a.createElement("hr",null)))),r.a.createElement("button",{className:"home-container__top__button button",onClick:()=>{e({type:"addCustomRow"})}},"Add row")),r.a.createElement("hr",null),r.a.createElement("div",{className:"home-container__bottom"},r.a.createElement("button",{className:"home-container__bottom__button button",onClick:()=>e({type:"toggleDisplayCards"})},"Create cards"),r.a.createElement("div",{className:"home-container__bottom__cards-container"},n?t.map((e,t)=>r.a.createElement(j,{name:e.name,value:e.value,id:e.id,key:t})):""))));var f=Object(l.e)(e=>{const t=e.history,a=e.location.pathname;return r.a.createElement("div",{className:"layout-container"},r.a.createElement("div",{className:"layout-container__header"},r.a.createElement("h1",{className:"layout-container__header__title"},"Albanero assignment"),"/"===a?r.a.createElement("button",{className:"layout-container__header__button--next button",onClick:()=>t.push("/graph")},"next"):r.a.createElement("button",{className:"layout-container__header__button--prev button",onClick:()=>t.push("/")},"prev")),r.a.createElement(l.a,{path:"/",exact:!0},r.a.createElement(g,null)),r.a.createElement(l.a,{path:"/graph"},r.a.createElement(p,null)))}),_=a(11),b=a(193);const y=()=>Math.floor(1e7+8e7*Math.random()),v=e=>{const t=e.filter(()=>!0);return t.push({name:"",value:"",id:y()}),t},w=(e,t)=>{console.log(e,t);const a=[];return e.map(e=>{e.id!=t&&(console.log(e),a.push(e))}),console.log(a),a},x=(e,t,a)=>{let n={value:0,index:0};const r=[];return e.map((e,a)=>{e.id===t?(n.value=e.value,n.index=a):r.push(e)}),r.splice(n.index,0,{name:a,value:n.value,id:t}),r},k=(e,t,a)=>{let n={name:0,index:0};const r=[];return e.map((e,a)=>{e.id===t?(n.name=e.name,n.index=a):r.push(e)}),r.splice(n.index,0,{name:n.name,value:a,id:t}),r},E={customRowsArray:[{name:"",value:"",id:y()}],tp:45,displayCards:!1};var z=(e=E,t)=>{const{type:a,name:n,value:r,id:o}=t;switch(a){case"addCustomRow":return{...e,customRowsArray:v(e.customRowsArray)};case"deleteSelectedRow":return{...e,customRowsArray:w(e.customRowsArray,o)};case"handleNameChange":return{...e,customRowsArray:x(e.customRowsArray,o,n)};case"handleValueChange":return{...e,customRowsArray:k(e.customRowsArray,o,r)};case"toggleDisplayCards":return{...e,displayCards:!e.displayCards};case"changeTp":return{...e,tp:y()};default:return e}};const N=Object(_.combineReducers)({home:z});var C=Object(_.createStore)(N,{},Object(b.composeWithDevTools)());a(299);s.a.render(r.a.createElement(c.a,{store:C},r.a.createElement(i.a,null,r.a.createElement(f,null))),document.getElementById("app"))}});