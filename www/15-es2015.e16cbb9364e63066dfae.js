(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8cDG":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class o{}var t=u("pMnS"),i=u("oBZk"),b=u("ZZ/e"),c=u("SVse"),a=u("9XN1");class r{constructor(l){this.pokestore=l}getPokedex(){this.pokedex=this.pokestore.getPokedex()}ngOnInit(){this.getPokedex()}ionViewWillEnter(){this.getPokedex()}checkEmpty(){return 0===this.pokedex.length}onRemove(l){this.pokestore.removeFromPokedex(l),this.getPokedex()}onReset(){this.pokestore.clearStorage(),this.getPokedex()}ngOnChanges(){this.getPokedex()}}var p=e.ob({encapsulation:0,styles:[["div[_ngcontent-%COMP%], ion-card-content[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;height:90%}ion-toolbar[_ngcontent-%COMP%]{padding-bottom:10px}#avatar[_ngcontent-%COMP%]{height:auto;width:96px}#name[_ngcontent-%COMP%]{text-transform:capitalize;font-weight:700;font-size:1rem}#logo[_ngcontent-%COMP%]{margin-top:10px;height:8vh}#pokeball[_ngcontent-%COMP%]{height:auto;width:100px}"]],data:{}});function s(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"ion-img",[["id","pokeball"],["src","../../assets/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png"]],null,null,null,i.G,i.l)),e.pb(2,49152,null,0,b.A,[e.h,e.k,e.x],{src:[0,"src"]},null)],(function(l,n){l(n,2,0,"../../assets/pokeball-people-pokemon-nintendo-video-game-gaming-gartoon-ball-512.png")}),null)}function g(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,20,"ion-col",[],null,null,null,i.B,i.g)),e.pb(1,49152,null,0,b.q,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,18,"ion-card",[],null,null,null,i.A,i.c)),e.pb(3,49152,null,0,b.j,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,9,"ion-item",[],null,null,null,i.H,i.m)),e.pb(5,49152,null,0,b.E,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-icon",[["name","close-circle-outline"],["slot","start"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onRemove(l.context.$implicit.id)&&e),e}),i.F,i.k)),e.pb(7,49152,null,0,b.z,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(8,0,null,0,2,"ion-label",[["id","name"]],null,null,null,i.I,i.n)),e.pb(9,49152,null,0,b.K,[e.h,e.k,e.x],null,null),(l()(),e.Gb(10,0,["",""])),(l()(),e.qb(11,0,null,0,2,"ion-button",[["fill","outline"],["slot","end"]],null,null,null,i.w,i.b)),e.pb(12,49152,null,0,b.h,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(l()(),e.Gb(13,0,["",""])),(l()(),e.qb(14,0,null,0,6,"ion-card-content",[],null,null,null,i.x,i.d)),e.pb(15,49152,null,0,b.k,[e.h,e.k,e.x],null,null),(l()(),e.qb(16,0,null,0,1,"ion-img",[["id","avatar"]],null,null,null,i.G,i.l)),e.pb(17,49152,null,0,b.A,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(18,0,null,0,2,"ion-label",[],null,null,null,i.I,i.n)),e.pb(19,49152,null,0,b.K,[e.h,e.k,e.x],null,null),(l()(),e.Gb(20,0,["Exp.: ",""]))],(function(l,n){l(n,7,0,"close-circle-outline"),l(n,12,0,"outline"),l(n,17,0,n.context.$implicit.image)}),(function(l,n){l(n,10,0,n.context.$implicit.name),l(n,13,0,n.context.$implicit.id),l(n,20,0,n.context.$implicit.base_experience)}))}function k(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,5,"ion-grid",[],null,null,null,i.D,i.i)),e.pb(1,49152,null,0,b.x,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,3,"ion-row",[],null,null,null,i.J,i.o)),e.pb(3,49152,null,0,b.gb,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,g)),e.pb(5,278528,null,0,c.h,[e.L,e.I,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.pokedex)}),null)}function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,2,"ion-button",[["color","danger"],["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onReset()&&e),e}),i.w,i.b)),e.pb(1,49152,null,0,b.h,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"]},null),(l()(),e.Gb(-1,0,["Reset Pokedex"]))],(function(l,n){l(n,1,0,"danger","full","round")}),null)}function x(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,7,"ion-header",[],null,null,null,i.E,i.j)),e.pb(1,49152,null,0,b.y,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,5,"ion-toolbar",[["color","primary"]],null,null,null,i.P,i.u)),e.pb(3,49152,null,0,b.zb,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(4,0,null,0,3,"ion-title",[],null,null,null,i.O,i.t)),e.pb(5,49152,null,0,b.xb,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-img",[["id","logo"],["src","../../assets/Pok\xe9dex_logo.png"]],null,null,null,i.G,i.l)),e.pb(7,49152,null,0,b.A,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(8,0,null,null,7,"ion-content",[["class","ion-padding"]],null,null,null,i.C,i.h)),e.pb(9,49152,null,0,b.r,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,s)),e.pb(11,16384,null,0,c.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,k)),e.pb(13,16384,null,0,c.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(16777216,null,0,1,null,h)),e.pb(15,16384,null,0,c.i,[e.L,e.I],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"primary"),l(n,7,0,"../../assets/Pok\xe9dex_logo.png"),l(n,11,0,u.checkEmpty()),l(n,13,0,!u.checkEmpty()),l(n,15,0,!u.checkEmpty())}),null)}function d(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-tab2",[],null,null,null,x,p)),e.pb(1,638976,null,0,r,[a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.mb("app-tab2",r,d,{},{},[]),f=u("s7LF"),q=u("iInd");u.d(n,"Tab2PageModuleNgFactory",(function(){return I}));var I=e.nb(o,[],(function(l){return e.yb([e.zb(512,e.j,e.Y,[[8,[t.a,m]],[3,e.j],e.v]),e.zb(4608,c.k,c.j,[e.s,[2,c.s]]),e.zb(4608,b.a,b.a,[e.x,e.g]),e.zb(4608,b.Db,b.Db,[b.a,e.j,e.p]),e.zb(4608,b.Gb,b.Gb,[b.a,e.j,e.p]),e.zb(4608,f.g,f.g,[]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,b.Bb,b.Bb,[]),e.zb(1073742336,f.f,f.f,[]),e.zb(1073742336,f.a,f.a,[]),e.zb(1073742336,q.n,q.n,[[2,q.s],[2,q.m]]),e.zb(1073742336,o,o,[]),e.zb(1024,q.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);