(this.webpackJsonplivingdex=this.webpackJsonplivingdex||[]).push([[0],{11:function(e,t,n){e.exports={layoutHeader:"LayoutHeader_layoutHeader__3X1tP",layoutHeaderTop:"LayoutHeader_layoutHeaderTop__3ygrb",layoutHeaderTitle:"LayoutHeader_layoutHeaderTitle__10aII",layoutHeaderRightMenu:"LayoutHeader_layoutHeaderRightMenu__2aQbs",active:"LayoutHeader_active__2A29m",layoutHeaderBottom:"LayoutHeader_layoutHeaderBottom__1VMWe",layoutHeaderSubMenuTitle:"LayoutHeader_layoutHeaderSubMenuTitle__X6vnu"}},12:function(e,t,n){e.exports={"box-group":"BoxesPage_box-group__2qvAr","box-group-content":"BoxesPage_box-group-content__cmXdh",box:"BoxesPage_box__3SWQq","box-header":"BoxesPage_box-header__3Ultd","box-title":"BoxesPage_box-title__3ji1O","box-grid":"BoxesPage_box-grid__LBmRE","box-cell":"BoxesPage_box-cell__KpmHB","box-img":"BoxesPage_box-img__MykXM","has-gmax":"BoxesPage_has-gmax__1Cq7o"}},23:function(e,t,n){e.exports={layout:"Layout_layout__3PvPc",layoutBody:"Layout_layoutBody__aAcW8",layoutBodyInner:"Layout_layoutBodyInner__2lEVU"}},28:function(e,t,n){e.exports={pokedexList:"PokedexPage_pokedexList__3jQ9k",pokedexListItem:"PokedexPage_pokedexListItem__3MDzB"}},40:function(e,t,n){},41:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(18),i=n.n(s),o=(n(40),n(41),n(32)),c=n(17),u=n(23),l=n.n(u),h=n(11),b=n.n(h),d=n.p+"static/media/box-icon.c2afa28f.svg",p=n(14),f=n(1);function j(e){return Object(f.jsxs)("div",{className:b.a.layoutHeader,children:[Object(f.jsxs)("div",{className:b.a.layoutHeaderTop+" bgGradientLeft",children:[Object(f.jsxs)(p.b,{to:"/",className:b.a.layoutHeaderTitle,children:[Object(f.jsx)("img",{alt:"icon",src:d}),Object(f.jsx)("h1",{children:e.title})]}),Object(f.jsx)("div",{className:b.a.layoutHeaderRightMenu,children:Object(f.jsxs)("nav",{children:[Object(f.jsxs)(p.c,{to:"/",activeClassName:b.a.active,isActive:function(e,t){return!!t&&"/"===t.pathname},children:[Object(f.jsx)("i",{className:"icon-box-add"}),Object(f.jsx)("span",{children:"Boxes"})]}),Object(f.jsxs)(p.c,{to:"/pokedex",activeClassName:b.a.active,children:[Object(f.jsx)("i",{className:"icon-books"}),Object(f.jsx)("span",{children:"Pok\xe9dex"})]}),Object(f.jsxs)("a",{href:"https://github.com/itsjavi/livingdex",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("i",{className:"icon-github",title:"Github"}),Object(f.jsx)("span",{children:"Github"})]}),Object(f.jsx)("a",{href:"https://blog.itsjavi.com/",target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("small",{children:["Created by ",Object(f.jsx)("b",{children:"@itsjavi"})]})})]})})]}),Object(f.jsx)("div",{className:b.a.layoutHeaderBottom+" bgGradientDownLight",children:Object(f.jsx)("div",{className:b.a.layoutHeaderSubMenuTitle,children:e.subtitle})})]})}function x(e){return Object(f.jsxs)("div",{className:l.a.layout,children:[Object(f.jsx)(j,{title:e.title,subtitle:e.subtitle}),Object(f.jsx)("div",{className:l.a.layoutBody,children:Object(f.jsx)("div",{className:l.a.layoutBodyInner,children:e.children})})]})}var g=n(28),m=n.n(g),v="./assets/images/home/pokemon/regular/";function O(e){return Object(f.jsx)("img",{className:e.className,src:"/livingdex/"+e.src,alt:e.alt})}var y=n(2),_=n.n(y),k=n(5),w=n(19),B=n(20),H=n(13),N=n(29),P="/livingdex/assets/data/json",L=Object(N.a)("baseUrl"),M=Object(N.a)("generation"),I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;Object(w.a)(this,e),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object(H.a)(this,M)[M]=t,Object(H.a)(this,L)[L]=n}return Object(B.a)(e,[{key:"generation",get:function(){return Object(H.a)(this,M)[M]},set:function(e){Object(H.a)(this,M)[M]=e}},{key:"baseUrl",get:function(){return Object(H.a)(this,L)[L]},set:function(e){Object(H.a)(this,L)[L]=e}},{key:"_getJson",value:function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(H.a)(this,L)[L]+"/"+t+".json").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPokemonList",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/livingdex-pokemon")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemon",value:function(){var e=Object(k.a)(_.a.mark((function e(t){var n,a,r=this,s=arguments;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],a=this._getJson("gen/".concat(this.generation,"/pokemon/").concat(t)),n&&a.then((function(e){return Promise.all([e,r.getLearnset(t)])})).then((function(e){e[0].learnset=e[1]})),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLearnset",value:function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/learnsets/").concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoves",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/moves")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMove",value:function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getMoves().then((function(e){return e[t]})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getItems",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/items")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getItems().then((function(e){return e[t]})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAbilities",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/abilities")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getGames",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("games"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAbility",value:function(){var e=Object(k.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getAbilities().then((function(e){return e[t]})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypes",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("types"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEggGroups",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("egg-groups"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNatures",value:function(){var e=Object(k.a)(_.a.mark((function e(){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("natures"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}(),S=function(){function e(){Object(w.a)(this,e),this._gen=8,this._search="",this.showForms=!0,this.showCosmeticForms=!0,this.separateBoxPikachu=!1,this.separateBoxForms=!1,this.onlyHomeStorable=!1}return Object(B.a)(e,[{key:"gen",get:function(){return this._gen},set:function(e){this._gen=Math.min(8,Math.max(1,parseInt(e+""))||8)}},{key:"search",get:function(){return this._search},set:function(e){this._search=null===e?"":e}}]),e}(),J=(new S,S),T=new I;var E=function(e){var t=Object(a.useState)([]),n=Object(c.a)(t,2),r=n[0],s=n[1],i=Object(a.useState)(!0),o=Object(c.a)(i,2),u=o[0],l=o[1];function h(t){if(e.search.length>2){var n=new RegExp(e.search,"gi");if(!t.name.match(n)&&!t.slug.match(n))return!0}return!(!e.onlyHomeStorable||t.isHomeStorable)||(!(!e.onlyHomeStorable||!t.isGmax)||(!(e.showForms||!t.isForm)||!(e.showCosmeticForms||!t.isCosmetic)))}return Object(a.useEffect)((function(){function t(){return(t=Object(k.a)(_.a.mark((function t(){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),T.generation=e.gen,t.next=4,T.getPokemonList().then((function(e){var t=[],n=0;for(var a in e){var r=e[a];h(r)||(n++,t.push({id:r.id,dexNum:r.num,tabIndex:n,file:r.imgHome+".png",slug:r.slug,name:r.title}))}return t}));case 4:n=t.sent,s(n),l(!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),{pokemon:r,loading:u,options:e}},A=n(4);var F=function(){var e=new URLSearchParams(Object(A.f)().search),t=new J;return t.gen=e.get("gen"),t.search=e.get("q"),t.onlyHomeStorable=!e.has("all"),t.showForms=!e.has("noforms")||e.has("all"),t.showCosmeticForms=!e.has("nocosmetic")||e.has("all"),t.separateBoxPikachu=e.get("sbpika"),t.separateBoxForms=e.get("sbforms"),t};var G=function(){var e=Object(a.useState)(F()),t=Object(c.a)(e,2),n=t[0],r=(t[1],E(n)),s=r.pokemon,i=r.loading,u=[],l=Object(f.jsx)("span",{children:"Living Dex"}),h="Loading...";if(!1===i){var b,d=Object(o.a)(s);try{for(d.s();!(b=d.n()).done;){var p=b.value;u.push(Object(f.jsx)("div",{title:p.name,tabIndex:p.num,className:m.a.pokedexListItem,children:Object(f.jsx)(O,{src:v+p.file,alt:p.name})},p.id))}}catch(j){d.e(j)}finally{d.f()}h="National Pok\xe9dex ("+s.length+" Pok\xe9mon)"}return Object(f.jsx)("div",{className:"app themePurple bgGradientDown",children:Object(f.jsx)(x,{title:l,subtitle:h,children:Object(f.jsx)("div",{className:m.a.pokedexList,children:u})})})},C=n(12),D=n.n(C);function R(e){var t=new Map;e.forEach((function(e,n){var a=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,a=-1,r=0,s=0,i=0,o="\n";a<e;){if(s+1>n)s=0,i++,o+="\n";else{if(++a===e){o+=" * \n\n";break}o+=" - ",s++}i+1>t&&(r++,i=0,s=0,o+="\n\n")}return{box:r,row:i,col:s,debug:o}}(n,5,6);t.has(a.box)||t.set(a.box,new Map);var r=t.get(a.box);r.has(a.row)||r.set(a.row,new Map),r.get(a.row).set(a.col,e)}));var n=[];return t.forEach((function(e,t){var a=[];e.forEach((function(e,t){e.forEach((function(e,t){a.push(function(e){return Object(f.jsx)("div",{title:e.name,tabIndex:e.tabIndex,className:D.a["box-cell"],children:Object(f.jsxs)("figure",{children:[Object(f.jsx)(O,{className:D.a["box-img"],src:v+e.file,alt:e.name}),Object(f.jsx)("figcaption",{children:e.name})]})},e.id)}(e))}))})),n.push(Object(f.jsxs)("div",{className:D.a.box,children:[Object(f.jsx)("div",{className:D.a["box-header"],children:Object(f.jsx)("div",{className:D.a["box-title"],children:"Box "+(t+1)})}),Object(f.jsx)("div",{className:D.a["box-grid"],children:a})]},t))})),n}var U=function(){var e=E(F()),t=e.pokemon,n=e.loading,a=null,r=Object(f.jsx)("span",{children:"Living Dex"}),s="Loading...";return!1===n&&(a=R(t),s="Box Organization ("+t.length+" Storable Pok\xe9mon)"),Object(f.jsx)("div",{className:"app themeTeal bgGradientDown",children:Object(f.jsx)(x,{title:r,subtitle:s,children:Object(f.jsx)("div",{className:D.a["box-group"],children:Object(f.jsx)("div",{className:D.a["box-group-content"],children:a})})})})};var W=function(){return Object(f.jsx)(p.a,{basename:"/",children:Object(f.jsxs)(A.c,{children:[Object(f.jsx)(A.a,{path:"/pokedex",children:Object(f.jsx)(G,{})}),Object(f.jsx)(A.a,{path:"/",children:Object(f.jsx)(U,{})})]})})},q=n(21),X=Object(q.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),Q=X.actions,z=(Q.increment,Q.decrement,Q.incrementByAmount,X.reducer),V=Object(q.a)({reducer:{counter:z}}),K=n(35);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(K.a,{store:V,children:Object(f.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.31c86eff.chunk.js.map