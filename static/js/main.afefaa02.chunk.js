(this.webpackJsonplivingdex=this.webpackJsonplivingdex||[]).push([[0],{11:function(e,t,n){e.exports={layoutHeader:"LayoutHeader_layoutHeader__3X1tP",layoutHeaderTop:"LayoutHeader_layoutHeaderTop__3ygrb",layoutHeaderTitle:"LayoutHeader_layoutHeaderTitle__10aII",layoutHeaderRightMenu:"LayoutHeader_layoutHeaderRightMenu__2aQbs",active:"LayoutHeader_active__2A29m",layoutHeaderBottom:"LayoutHeader_layoutHeaderBottom__1VMWe",layoutHeaderSubMenuTitle:"LayoutHeader_layoutHeaderSubMenuTitle__X6vnu"}},12:function(e,t,n){e.exports={"box-group":"BoxesPage_box-group__2qvAr","box-group-content":"BoxesPage_box-group-content__cmXdh",box:"BoxesPage_box__3SWQq","box-header":"BoxesPage_box-header__3Ultd","box-title":"BoxesPage_box-title__3ji1O","box-grid":"BoxesPage_box-grid__LBmRE","box-cell":"BoxesPage_box-cell__KpmHB","box-img":"BoxesPage_box-img__MykXM","has-gmax":"BoxesPage_has-gmax__1Cq7o"}},20:function(e,t,n){e.exports={layout:"Layout_layout__3PvPc",layoutBody:"Layout_layoutBody__aAcW8",layoutBodyInner:"Layout_layoutBodyInner__2lEVU"}},25:function(e,t,n){e.exports={pokedexList:"PokedexPage_pokedexList__3jQ9k",pokedexListItem:"PokedexPage_pokedexListItem__3MDzB"}},40:function(e,t,n){},41:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(17),o=n.n(s),c=(n(40),n(41),n(29)),i=n(20),u=n.n(i),l=n(11),h=n.n(l),b=n.p+"static/media/box-icon.c2afa28f.svg",d=n(13),p=n(1);function f(e){return Object(p.jsxs)("div",{className:h.a.layoutHeader,children:[Object(p.jsxs)("div",{className:h.a.layoutHeaderTop+" bgGradientLeft",children:[Object(p.jsxs)(d.b,{to:"/",className:h.a.layoutHeaderTitle,children:[Object(p.jsx)("img",{alt:"icon",src:b}),Object(p.jsx)("h1",{children:e.title})]}),Object(p.jsx)("div",{className:h.a.layoutHeaderRightMenu,children:Object(p.jsxs)("nav",{children:[Object(p.jsxs)(d.c,{to:"/",activeClassName:h.a.active,isActive:function(e,t){return!!t&&"/"===t.pathname},children:[Object(p.jsx)("i",{className:"icon-box-add"})," Boxes"]}),Object(p.jsxs)(d.c,{to:"/pokedex",activeClassName:h.a.active,children:[Object(p.jsx)("i",{className:"icon-books"})," Pok\xe9dex"]}),Object(p.jsxs)("a",{href:"https://github.com/itsjavi/livingdex",target:"_blank",rel:"noreferrer",children:[Object(p.jsx)("i",{className:"icon-github",title:"Github"})," Github"]}),Object(p.jsx)("a",{href:"https://blog.itsjavi.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsxs)("small",{children:["Created by ",Object(p.jsx)("b",{children:"@itsjavi"})]})})]})})]}),Object(p.jsx)("div",{className:h.a.layoutHeaderBottom+" bgGradientDownLight",children:Object(p.jsx)("div",{className:h.a.layoutHeaderSubMenuTitle,children:e.subtitle})})]})}function j(e){return Object(p.jsxs)("div",{className:u.a.layout,children:[Object(p.jsx)(f,{title:e.title,subtitle:e.subtitle}),Object(p.jsx)("div",{className:u.a.layoutBody,children:Object(p.jsx)("div",{className:u.a.layoutBodyInner,children:e.children})})]})}var x=n(25),m=n.n(x),g="./assets/images/home/pokemon/regular/";function v(e){return Object(p.jsx)("img",{className:e.className,src:"/livingdex/"+e.src,alt:e.alt})}var y=n(2),O=n.n(y),_=n(5),k=n(35),w=n(30),H=n(31),B=n(14),N=n(26),P="/livingdex/assets/data/json",L=Object(N.a)("baseUrl"),M=Object(N.a)("generation"),I=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:P;Object(w.a)(this,e),Object.defineProperty(this,L,{writable:!0,value:void 0}),Object.defineProperty(this,M,{writable:!0,value:void 0}),Object(B.a)(this,M)[M]=t,Object(B.a)(this,L)[L]=n}return Object(H.a)(e,[{key:"generation",get:function(){return Object(B.a)(this,M)[M]},set:function(e){Object(B.a)(this,M)[M]=e}},{key:"baseUrl",get:function(){return Object(B.a)(this,L)[L]},set:function(e){Object(B.a)(this,L)[L]=e}},{key:"_getJson",value:function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch(Object(B.a)(this,L)[L]+"/"+t+".json").then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPokemonList",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/livingdex-pokemon")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getPokemon",value:function(){var e=Object(_.a)(O.a.mark((function e(t){var n,a,r=this,s=arguments;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]&&s[1],a=this._getJson("gen/".concat(this.generation,"/pokemon/").concat(t)),n&&a.then((function(e){return Promise.all([e,r.getLearnset(t)])})).then((function(e){e[0].learnset=e[1]})),e.abrupt("return",a);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLearnset",value:function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/learnsets/").concat(t)));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getMoves",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/moves")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMove",value:function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getMoves().then((function(e){return e[t]})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getItems",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/items")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getItem",value:function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getItems().then((function(e){return e[t]})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getAbilities",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("gen/".concat(this.generation,"/abilities")));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getGames",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("games"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAbility",value:function(){var e=Object(_.a)(O.a.mark((function e(t){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.getAbilities().then((function(e){return e[t]})));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getTypes",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("types"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getEggGroups",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("egg-groups"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getNatures",value:function(){var e=Object(_.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this._getJson("natures"));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),e}();var S=function(e){var t=Object(a.useState)([]),n=Object(k.a)(t,2),r=n[0],s=n[1],o=Object(a.useCallback)((function(){var t=new I;function n(t){if(null!==e.search&&e.search.length>2){var n=new RegExp(e.search,"gi");if(!t.name.match(n)&&!t.slug.match(n))return!0}return!(!e.onlyHomeStorable||t.isHomeStorable)||(!(!e.onlyHomeStorable||!t.isGmax)||(!(e.showForms||!t.isForm)||!(e.showCosmeticForms||!t.isCosmetic)))}t.generation=Math.min(8,Math.max(1,parseInt(e.gen+""))||8),function(){var e=Object(_.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getPokemonList().then((function(e){var t=[],a=0;for(var r in e){var s=e[r];n(s)||(a++,t.push({id:s.id,dexNum:s.num,tabIndex:a,file:s.imgHome+".png",slug:s.slug,name:s.title}))}return t}));case 2:a=e.sent,s(a);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e]);return Object(a.useEffect)((function(){o()}),[o]),r},J=n(4);var F=function(){var e=new URLSearchParams(Object(J.f)().search),t={gen:e.get("gen"),search:e.get("q"),showForms:!1,showCosmeticForms:!1,onlyHomeStorable:!0};e.has("all")&&(t.showForms=!0,t.showCosmeticForms=!0,t.onlyHomeStorable=!0);var n,a=S(t),r=Object(p.jsxs)("span",{children:["Living Dex / ",Object(p.jsx)("b",{children:"Pok\xe9dex"})]}),s="National Pok\xe9dex ("+a.length+" Pok\xe9mon)",o=[],i=Object(c.a)(a);try{for(i.s();!(n=i.n()).done;){var u=n.value;o.push(Object(p.jsx)("div",{title:u.name,tabIndex:u.num,className:m.a.pokedexListItem,children:Object(p.jsx)(v,{src:g+u.file,alt:u.name})},u.num))}}catch(l){i.e(l)}finally{i.f()}return Object(p.jsx)("div",{className:"app themePurple bgGradientDown",children:Object(p.jsx)(j,{title:r,subtitle:s,children:Object(p.jsx)("div",{className:m.a.pokedexList,children:o})})})},C=n(12),T=n.n(C);function E(e){var t=new Map;e.forEach((function(e,n){var a=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6,a=-1,r=0,s=0,o=0,c="\n";a<e;){if(s+1>n)s=0,o++,c+="\n";else{if(++a===e){c+=" * \n\n";break}c+=" - ",s++}o+1>t&&(r++,o=0,s=0,c+="\n\n")}return{box:r,row:o,col:s,debug:c}}(n,5,6);t.has(a.box)||t.set(a.box,new Map);var r=t.get(a.box);r.has(a.row)||r.set(a.row,new Map),r.get(a.row).set(a.col,e)}));var n=[];return t.forEach((function(e,t){var a=[];e.forEach((function(e,t){e.forEach((function(e,t){a.push(function(e){return Object(p.jsx)("div",{title:e.name,tabIndex:e.tabIndex,className:T.a["box-cell"],children:Object(p.jsxs)("figure",{children:[Object(p.jsx)(v,{className:T.a["box-img"],src:g+e.file,alt:e.name}),Object(p.jsx)("figcaption",{children:e.name})]})},e.id)}(e))}))})),n.push(Object(p.jsxs)("div",{className:T.a.box,children:[Object(p.jsx)("div",{className:T.a["box-header"],children:Object(p.jsx)("div",{className:T.a["box-title"],children:"Box "+(t+1)})}),Object(p.jsx)("div",{className:T.a["box-grid"],children:a})]},t))})),n}var A=function(){var e=new URLSearchParams(Object(J.f)().search),t={gen:e.get("gen"),search:e.get("q"),separateBoxPikachu:e.has("sep-pika"),separateBoxForms:e.has("sep-forms"),showForms:!0,showCosmeticForms:!0,onlyHomeStorable:!0};e.has("noforms")&&(t.showForms=!1),e.has("nocosmetic")&&(t.showCosmeticForms=!1);var n=S(t),a=E(n),r=Object(p.jsxs)("span",{children:["Living Dex / ",Object(p.jsx)("b",{children:"Boxes"})]}),s="Box Organization ("+n.length+" Storable Pok\xe9mon)";return Object(p.jsx)("div",{className:"app themeTeal bgGradientDown",children:Object(p.jsx)(j,{title:r,subtitle:s,children:Object(p.jsx)("div",{className:T.a["box-group"],children:Object(p.jsx)("div",{className:T.a["box-group-content"],children:a})})})})};var G=function(){return Object(p.jsx)(d.a,{basename:"/livingdex",children:Object(p.jsxs)(J.c,{children:[Object(p.jsx)(J.a,{path:"/pokedex",children:Object(p.jsx)(F,{})}),Object(p.jsx)(J.a,{path:"/",children:Object(p.jsx)(A,{})})]})})},R=n(18),D=Object(R.b)({name:"counter",initialState:{value:0},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}}}),U=D.actions,q=(U.increment,U.decrement,U.incrementByAmount,D.reducer),W=Object(R.a)({reducer:{counter:q}}),X=n(34);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(X.a,{store:W,children:Object(p.jsx)(G,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[53,1,2]]]);
//# sourceMappingURL=main.afefaa02.chunk.js.map