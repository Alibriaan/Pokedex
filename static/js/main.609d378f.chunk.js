(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,a,t){e.exports=t(122)},109:function(e,a,t){},122:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(11),l=t.n(r);t(109),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=t(82),i=t(58),s=t(24),m=t(32),p=t(170),u=t(171),d=t(123),h=t(46),k=t(188),E=t(96),f=t(163),g=t(12),y=t(89),b=t.n(y),x=t(92),C=t.n(x),v=t(173),P=t(169),N=t(60),w=t(189),j=t(174),B=t(175),O=t(94),S=t.n(O),D=t(187),_=t(176),T=t(177),G=t(186),R=t(164),A=t(167),F=t(165),I=t(168),H=t(166),W=t(88),L=t.n(W),z=t(62),U=t.n(z),M=t(87),V=t.n(M),J=t(85),K=t.n(J),q=t(86),$=t.n(q),Q=t(185),X=t(22),Y=t(37),Z=t.n(Y),ee=t(59),ae=t(83),te=t(6),ne=function e(){var a=this;Object(ae.a)(this,e),this.pokemons=[],this.pokemonsRepeat=[],this.poksPag=[],this.typesCheckbox=[],this.loadCount=20,this.SearchText="",this.activePage=1,this.handlePageChange=function(e){var t=[];a.fade=!1,a.pokemons=[],a.activePage=e,t=a.SearchText.length>0||a.typesCheckbox.length>0?a.poksPag.slice(a.loadCount*(e-1),a.loadCount*e):a.pokemonsRepeat.slice(a.loadCount*(e-1),a.loadCount*e),setTimeout(function(){a.pokemons=t,a.fade=!0},200)},this.Get807=Object(ee.a)(Z.a.mark(function e(){var t,n,o,r,l;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=1;case 1:if(!(t<=807)){e.next=15;break}return e.next=4,fetch("https://pokeapi.co/api/v2/pokemon/"+t);case 4:return n=e.sent,e.next=7,n.json();case 7:o=e.sent,r=void 0,l=o.name.indexOf("-"),r=-1!==l?o.name.slice(0,l):o.name,a.pokemonsRepeat.push({name:r,id:o.id,types:o.types,sprites:{front_default:o.sprites.front_default}});case 12:t++,e.next=1;break;case 15:case"end":return e.stop()}},e)})),this.PageBefore807=function(){var e=Object(ee.a)(Z.a.mark(function e(t){var n,o,r,l,c,i;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.fade=!1,a.pokemons=[],n=[],a.activePage=t,o=(a.activePage-1)*a.loadCount+1;case 5:if(!(o<=a.activePage*a.loadCount)){e.next=23;break}if(!(o>807)){e.next=10;break}return e.abrupt("break",23);case 10:return e.next=12,fetch("https://pokeapi.co/api/v2/pokemon/"+o);case 12:return r=e.sent,e.next=15,r.json();case 15:l=e.sent,c=void 0,i=l.name.indexOf("-"),c=-1!==i?l.name.slice(0,i):l.name,n.push({name:c,id:l.id,types:l.types,sprites:{front_default:l.sprites.front_default}});case 20:o++,e.next=5;break;case 23:a.pokemons=n,setTimeout(function(){a.fade=!0},100);case 25:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),this.CurrentPokemonPage=function(e){fetch("https://pokeapi.co/api/v2/pokemon-species/"+e+"/").then(function(e){return e.json()}).then(function(e){a.species=e}),fetch("https://pokeapi.co/api/v2/pokemon/"+e).then(function(e){return e.json()}).then(function(e){a.pokemon=e})},this.PokemonGet=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;a.fade=!1;for(var t=document.querySelectorAll('input[type="checkbox"]'),n=0;n<t.length;n++)t[n].checked=!0,t[n].click();a.SearchText="",a.pokemons=[],a.loadCount=e,a.activePage=1,setTimeout(function(){a.pokemons=a.pokemonsRepeat.slice(0,e),a.fade=!0},200)},this.SearchPokemons=function(e){a.fade=!1,a.SearchText=e.target.value,a.pokemons=[],a.activePage=1,a.poksPag=[],setTimeout(function(){""===a.SearchText&&0===a.typesCheckbox.length?a.poksPag=a.pokemonsRepeat.slice(0,a.loadCount):(a.poksPag=a.pokemonsRepeat.filter(function(e){return e.name.match(a.SearchText+".*")}),0!==a.typesCheckbox.length&&(a.poksPag=a.poksPag.filter(function(e){var t=!1;if(e.types.map(function(e){-1===a.typesCheckbox.indexOf(e.type.name)||(t=!0)}),!0===t)return e}))),a.pokemons=a.poksPag.slice(0,a.loadCount),a.fade=!0},200)},this.CheckBoxPokemon=function(e){if(a.pokemons=[],a.poksPag=[],a.activePage=1,a.fade=!1,e.target.checked)a.typesCheckbox.push(e.target.value);else{var t=a.typesCheckbox.indexOf(e.target.value);t>-1&&a.typesCheckbox.splice(t,1)}""===a.SearchText&&0===a.typesCheckbox.length?a.poksPag=a.pokemonsRepeat.slice(0,a.loadCount):(a.poksPag=a.pokemonsRepeat,0!==a.SearchText.length&&(a.poksPag=a.poksPag.filter(function(e){return e.name.match(a.SearchText+".*")})),0!==a.typesCheckbox.length&&(a.poksPag=a.poksPag.filter(function(e){var t=!1;if(e.types.map(function(e){-1===a.typesCheckbox.indexOf(e.type.name)||(t=!0)}),!0===t)return e}))),setTimeout(function(){a.pokemons=a.poksPag.slice(0,a.loadCount),a.fade=!0},200)},this.fade=!1,function(){var e=Object(ee.a)(Z.a.mark(function e(){var t,n,o,r,l,c;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],n=1;case 2:if(!(n<=20)){e.next=16;break}return e.next=5,fetch("https://pokeapi.co/api/v2/pokemon/"+n);case 5:return o=e.sent,e.next=8,o.json();case 8:r=e.sent,l=void 0,c=r.name.indexOf("-"),l=-1!==c?r.name.slice(0,c):r.name,t.push({name:l,id:r.id,types:r.types,sprites:{front_default:r.sprites.front_default}});case 13:n++,e.next=2;break;case 16:a.pokemons=t,a.fade=!0;case 18:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),this.Get807()};Object(te.h)(ne,{fade:te.m,poksPag:te.m,species:te.m,PageBefore807:te.d,activePage:te.m,handlePageChange:te.d,formChecked:te.m,loadCount:te.m,pokemons:te.m,pokemonsRepeat:te.m,pokemon:te.m,typesCheckbox:te.m,SearchText:te.m,PokemonGet:te.d,SearchPokemons:te.d,CurrentPokemon:te.d,NextPage:te.d,CurrentPokemonPage:te.d,CheckBoxPokemon:te.d});var oe=new ne,re=Object(n.createContext)(oe),le=Object(E.a)({palette:{primary:N.a}}),ce=Object(f.a)(function(e){return{root:{flexGrow:1},tool:{display:"flex",justifyContent:"space-between"},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1},button:Object(s.a)({display:"none"},e.breakpoints.up("md"),{display:"block"}),search:Object(s.a)({display:"flex",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(g.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(g.b)(e.palette.common.white,.25)},width:"55%"},e.breakpoints.up("md"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),tagsroot:{display:"flex",justifyContent:"center"},list:{width:250},fullList:{width:"auto"},sideMenuText:{display:"flex",justifyContent:"center",backgroundColor:N.a},mobileButton:Object(s.a)({display:"block"},e.breakpoints.up("md"),{display:"none"})}}),ie=Object(X.a)(function(e){var a,t=ce(),r=Object(n.useContext)(re),l=o.a.useState({left:!1}),E=Object(i.a)(l,2),f=E[0],g=E[1],y=function(e,a){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&g(Object(c.a)({},f,Object(s.a)({},e,a)))}};return o.a.createElement(P.a,{theme:le},o.a.createElement(Q.a,{component:"header",className:t.stick},o.a.createElement("div",{className:t.root},o.a.createElement(p.a,{position:"static"},o.a.createElement(u.a,{className:t.tool},o.a.createElement(d.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:y("left",!0)},o.a.createElement(b.a,null)),o.a.createElement(G.a,{open:f.left,onClose:y("left",!1)},(a="left",o.a.createElement("div",{role:"presentation",onClick:y(a,!1),onKeyDown:y(a,!1)},o.a.createElement(R.a,{className:t.list},o.a.createElement(F.a,{className:t.sideMenuText},o.a.createElement(H.a,{primary:"Pokedex"}))),o.a.createElement(A.a,null),o.a.createElement(R.a,null,o.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"#000"},onClick:function(){r.fade=!1,r.pokemon=void 0,r.species=void 0,setTimeout(r.fade=!0,100)}},o.a.createElement(F.a,{button:!0},o.a.createElement(I.a,null,o.a.createElement(K.a,null)),o.a.createElement(H.a,{primary:"Home"}))),o.a.createElement(m.b,{to:"/about",style:{textDecoration:"none",color:"#000"}},o.a.createElement(F.a,{button:!0},o.a.createElement(I.a,null,o.a.createElement($.a,null)),o.a.createElement(H.a,{primary:"About"}))),o.a.createElement("a",{href:"https://github.com/Alibriaan/Pokedex",style:{textDecoration:"none",color:"#000"}},o.a.createElement(F.a,{button:!0},o.a.createElement(I.a,null,o.a.createElement(V.a,null)),o.a.createElement(H.a,{primary:"Github"}))),o.a.createElement("a",{href:"https://telegram.me/Alibrian",style:{textDecoration:"none",color:"#000"}},o.a.createElement(F.a,{button:!0},o.a.createElement(I.a,null,o.a.createElement(L.a,null)),o.a.createElement(H.a,{primary:"Contacts"})))),o.a.createElement(R.a,{className:t.mobileButton},o.a.createElement(A.a,null),o.a.createElement(F.a,{button:!0,onClick:function(){return r.PokemonGet(10)}},o.a.createElement(I.a,null,o.a.createElement(U.a,null)),o.a.createElement(H.a,{primary:"10 Pokemons"})),o.a.createElement(F.a,{button:!0,onClick:function(){return r.PokemonGet(20)}},o.a.createElement(I.a,null,o.a.createElement(U.a,null)),o.a.createElement(H.a,{primary:"20 Pokemons"})),o.a.createElement(F.a,{button:!0,onClick:function(){return r.PokemonGet(50)}},o.a.createElement(I.a,null,o.a.createElement(U.a,null)),o.a.createElement(H.a,{primary:"50 Pokemons"})))))),o.a.createElement(h.a,{className:t.title,variant:"h6",noWrap:!0},o.a.createElement(m.b,{to:"/",style:{textDecoration:"none",color:"white"},onClick:function(){r.fade=!1,r.pokemon=void 0,r.species=void 0,setTimeout(r.fade=!0,100)}},"Pokedex")),o.a.createElement("div",{className:t.button,style:{display:!0===e.disable?"none":""}},o.a.createElement(v.a,{color:"inherit",onClick:function(){return r.PokemonGet(10)}},"10 Pokemons"),o.a.createElement(v.a,{color:"inherit",onClick:function(){return r.PokemonGet(20)}},"20 Pokemons"),o.a.createElement(v.a,{color:"inherit",onClick:function(){return r.PokemonGet(50)}},"50 Pokemons")),o.a.createElement("div",{className:t.search,style:{display:!0===e.disable?"none":""}},o.a.createElement("div",{className:t.searchIcon},o.a.createElement(C.a,null)),o.a.createElement(k.a,{disabled:e.disable,value:r.SearchText,onChange:r.SearchPokemons,id:"search",placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}))))),o.a.createElement(w.a,{className:t.exproot,style:{display:!0===e.disable?"none":""}},o.a.createElement(j.a,{expandIcon:o.a.createElement(S.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o.a.createElement(h.a,{className:t.heading},"Types tags")),o.a.createElement(B.a,null,o.a.createElement(P.a,{theme:le},o.a.createElement(_.a,{row:!0,className:t.tagsroot},o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"normal",id:"normal",onClick:r.CheckBoxPokemon,color:"primary"}),label:"normal"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"fighting",id:"fighting",onClick:r.CheckBoxPokemon,color:"primary"}),label:"fighting"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"flying",id:"flying",onClick:r.CheckBoxPokemon,color:"primary"}),label:"flying"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"poison",id:"poison",onClick:r.CheckBoxPokemon,color:"primary"}),label:"poison"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"ground",id:"ground",onClick:r.CheckBoxPokemon,color:"primary"}),label:"ground"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"rock",id:"rock ",onClick:r.CheckBoxPokemon,color:"primary"}),label:"rock"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"bug",id:"bug",onClick:r.CheckBoxPokemon,color:"primary"}),label:"bug"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"ghost",id:"ghost",onClick:r.CheckBoxPokemon,color:"primary"}),label:"ghost"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"steel",id:"steel",onClick:r.CheckBoxPokemon,color:"primary"}),label:"steel"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"fire",id:"fire",onClick:r.CheckBoxPokemon,color:"primary"}),label:"fire"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"water",id:"water",onClick:r.CheckBoxPokemon,color:"primary"}),label:"water"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"grass",id:"grass",onClick:r.CheckBoxPokemon,color:"primary"}),label:"grass"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"electric",id:"electric",onClick:r.CheckBoxPokemon,color:"primary"}),label:"electric"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"psychic",id:"psychic",onClick:r.CheckBoxPokemon,color:"primary"}),label:"psychic"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"ice",id:"ice",onClick:r.CheckBoxPokemon,color:"primary"}),label:"ice"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"dragon",id:"dragon",onClick:r.CheckBoxPokemon,color:"primary"}),label:"dragon"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"dark",id:"dark",onClick:r.CheckBoxPokemon,color:"primary"}),label:"dark"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"fairy",id:"fairy",onClick:r.CheckBoxPokemon,color:"primary"}),label:"fairy"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"unknown",id:"unknown",onClick:r.CheckBoxPokemon,color:"primary"}),label:"unknown"}),o.a.createElement(T.a,{control:o.a.createElement(D.a,{value:"shadow",id:"shadow",onClick:r.CheckBoxPokemon,color:"primary"}),label:"shadow"})))))))}),se=t(178),me=t(179),pe=t(180),ue=t(181),de={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},he=Object(f.a)({number:{display:"flex",justifyContent:"center",fontSize:14},pos:{marginBottom:12},types:{display:"flex",justifyContent:"space-around"},name:{flexGrow:1,display:"flex",justifyContent:"center",textAlign:"center"},avatar:{display:"flex",justifyContent:"center"},avatarSize:{width:120,height:120},typesName:{display:"block",padding:"3px",width:"50px",textAlign:"center ",boxShadow:" 0px 0px 10px 0.5px rgba(0,0,0,0.2)"},card:{display:"block",margin:" 8px 6px 10px 8px",width:"160px",Height:340}}),ke=Object(X.a)(function(e){var a=he(),t=Object(n.useContext)(re);return o.a.createElement(se.a,{className:a.card},o.a.createElement(m.b,{to:e.lin,style:{textDecoration:"none",color:"black"},onClick:function(){t.CurrentPokemonPage(e.number),t.PokemonGet(t.loadCount)}},o.a.createElement(me.a,null,o.a.createElement(pe.a,null,o.a.createElement(h.a,{className:a.number,color:"textSecondary",gutterBottom:!0},e.number),o.a.createElement(h.a,{variant:"h5",component:"h3",className:a.name},e.name),o.a.createElement(Q.a,{className:a.avatar},o.a.createElement(ue.a,{alt:"Remy Sharp",src:e.ava,className:a.avatarSize})),o.a.createElement(h.a,{className:a.types,color:"textSecondary"},e.types.map(function(e){return o.a.createElement("div",{style:{backgroundColor:"#"+("fighting"===e.type.name?"FFFFFF":de[e.type.name]),color:"fighting"===e.type.name?"DimGray":"White"},className:a.typesName},o.a.createElement("h5",null,e.type.name))}))))))}),Ee=t(182),fe=t(172),ge=t(95),ye=t.n(ge),be=Object(f.a)(function(e){return{root:{marginTop:"10px",backgroundColor:"Gainsboro",minHeight:"100vh",display:"flex",justifyContent:"center"},butt:{width:"100%",maxHeight:"80%",flexGrow:1,display:"flex",justifyContent:"center"}}}),xe=Object(X.a)(function(e){var a=Object(n.useContext)(re),t=be();return o.a.createElement(fe.a,{in:a.fade},o.a.createElement(Q.a,{component:"main"},o.a.createElement(Ee.a,{container:!0,className:t.root},o.a.createElement(Ee.a,null,o.a.createElement(Ee.a,{container:!0,justify:"center"},a.pokemons.map(function(e){return o.a.createElement(ke,{color:e.type,pok:e,lin:"/pokemon/"+e.id,number:e.id,name:e.name,types:e.types,ava:e.sprites.front_default})}),o.a.createElement(Ee.a,{container:!0,justify:"center"},o.a.createElement(Q.a,{className:t.butt,mt:2,mb:4},o.a.createElement(ye.a,{className:t.pagination,hideDisabled:!0,pageRangeDisplayed:5,activePage:a.activePage,itemsCountPerPage:a.loadCount,totalItemsCount:a.SearchText.length>0||a.typesCheckbox.length>0?a.poksPag.length:807,onChange:a.pokemonsRepeat.length<807?a.PageBefore807:a.handlePageChange}))))))))}),Ce=Object(f.a)(function(e){return{footer:{backgroundColor:"#f44336",color:"white"}}}),ve=function(){var e=Ce();return o.a.createElement(Q.a,{component:"footer",className:e.footer},o.a.createElement("h1",null,"Pokedex by Dimas"),o.a.createElement("h3",null,"\u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \u0441\u0432\u044f\u0442\u043e\u0439 \u0432\u043e\u0434\u043e\u0439 "),o.a.createElement("h2",null,"\u041a\u043e\u043d\u0435\u0446"))},Pe=function(){return o.a.createElement("div",null,o.a.createElement(ie,{disable:!1}),o.a.createElement(xe,null),o.a.createElement(ve,null))},Ne=Object(f.a)({rootError:{display:"flex",height:"100vh",justifyContent:"center"},cardError:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},Error:{display:"flex",justifyContent:"center"}}),we=function(e){var a=Ne();return o.a.createElement(Q.a,{mt:2,mb:2,className:a.rootError},o.a.createElement(se.a,{className:a.cardError},o.a.createElement(pe.a,null,o.a.createElement(h.a,{className:a.Error,variant:"h3"},"ERROR"),o.a.createElement(h.a,{className:a.Error,variant:"h5"},e.error_type))))},je=t(184),Be=t(183),Oe=Object(f.a)(function(e){return{root:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},card:{width:"90vw",maxWidth:"1600px",display:"flex",justifyContent:"center"},content:{flexGrow:1,padding:0,paddingBottom:"0px"},number:{display:"flex",justifyContent:"center"},name:{flexGrow:1,textAlign:"center",display:"flex",justifyContent:"center"},avatar:{display:"flex",justifyContent:"center"},avatarSize:Object(s.a)({width:150,height:150,display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.up("md"),{width:300,height:300}),types:{display:"flex",justifyContent:"center"},media:{display:"flex",justifyContent:"center"},rootError:{display:"flex",height:"100vh"},typesName:{display:"block",padding:"3px",width:"100px",textAlign:"center ",boxShadow:" 0px 0px 10px 0.5px rgba(0,0,0,0.2)"},story:{textAlign:"center"},skils:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},statsBarRoot:{display:"flex",justifyContent:"space-around",alignItems:"center"},statsBarName:{display:"flex",flexDirection:"column",justifyContent:"space-around"},paper:{padding:"2.5px 0px 2.5px 0px"},bar:{display:"flex",justifyContent:"space-between"},cardFooter:{height:104}}}),Se={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},De=Object(X.a)(function(e){var a=Object(n.useContext)(re),t=Oe(),r=Object(n.useState)(!0),l=Object(i.a)(r,1)[0],c=function(e){return e.types.length>1?"linear-gradient( to right , #"+("fighting"===e.types[0].type.name?"C0C0C0":Se[e.types[0].type.name])+" 50% ,  #"+("fighting"===e.types[1].type.name?"C0C0C0":Se[e.types[1].type.name])+" 50%)":"#"+("fighting"===e.types[0].type.name?"C0C0C0":Se[e.types[0].type.name])};if(void 0!==a.pokemon)return isNaN(+a.pokemon)?void 0!==a.pokemon&&void 0!==a.species&&o.a.createElement(Q.a,{className:t.main},o.a.createElement(ie,{disable:!0}),o.a.createElement(Be.a,{in:l,timeout:{enter:400}},o.a.createElement(Q.a,{component:"main",className:t.root,mt:2,mb:2,mr:2,ml:2},o.a.createElement(se.a,{className:t.card},o.a.createElement(pe.a,{className:t.content},o.a.createElement(Q.a,{pt:1,pb:1,style:{background:c(a.pokemon),color:"White"}},o.a.createElement(h.a,{className:t.number,variant:"h4"},"\u2116",a.pokemon.id),o.a.createElement(h.a,{variant:"h3",className:t.name},a.pokemon.name)),o.a.createElement(h.a,{className:t.avatar},o.a.createElement(je.a,{className:t.avatarSize,image:a.pokemon.sprites.front_default,title:a.pokemon.name})),o.a.createElement(h.a,{className:t.types,variant:"h5"},a.pokemon.types.map(function(e){return o.a.createElement(Q.a,{ml:1,mr:1,style:{backgroundColor:"#"+Se[e.type.name],color:(a=e.type.name,"fighting"===a?"DimGray":"white")},className:t.typesName},e.type.name);var a})),o.a.createElement(h.a,{variant:"h5"},o.a.createElement(Q.a,{mt:3,mb:3,ml:2,mr:2},o.a.createElement("span",{className:"count"},function(){var e=a.species.generation.name.indexOf("-"),t=a.species.generation.name[0].toUpperCase()+a.species.generation.name.slice(1,e);return t+"-"+a.species.generation.name.slice(e+1).toUpperCase()}()))),o.a.createElement(Q.a,{mt:3,mb:1,ml:2,mr:6},o.a.createElement(h.a,{variant:"h4"},o.a.createElement("span",{className:"count"},a.species.genera[2].genus),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",{className:"count"},function(){var e=!1,t="Hello";return a.species.flavor_text_entries.filter(function(a){return!1===e&&"en"===a.language.name&&(t=a.flavor_text,e=!0,!0)}),t}())))),o.a.createElement(Q.a,{pt:1,pb:1,mt:1,mb:1,style:{background:c(a.pokemon),color:"White"}},o.a.createElement(h.a,{className:t.number,variant:"h4"},"Stats")),o.a.createElement(Q.a,{className:t.skils,pt:6,pb:6},o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"HP:")," ",o.a.createElement("span",{className:"count"},a.pokemon.stats[5].base_stat)),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Attack:")," ",o.a.createElement("span",{className:"count"},a.pokemon.stats[4].base_stat))),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Speed:")," ",o.a.createElement("span",{className:"count"},a.pokemon.stats[0].base_stat))),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Defense:")," ",o.a.createElement("span",{className:"count"},a.pokemon.stats[3].base_stat))),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Sp Atk:")," ",o.a.createElement("span",{className:"count"},a.pokemon.stats[2].base_stat))),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Sp Def:")," ",o.a.createElement("span",{className:"count"},a.pokemon.stats[1].base_stat)))),o.a.createElement(Q.a,{pt:1,pb:1,mt:1,mb:6,style:{background:c(a.pokemon),color:"White"}},o.a.createElement(h.a,{className:t.number,variant:"h4"},"Informations")),o.a.createElement(Q.a,{mt:3,mb:3,ml:2,mr:6},o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"Base Happiness:")," ",o.a.createElement("span",{className:"count"},a.species.base_happiness)),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"Egg groups:")," ",o.a.createElement("span",{className:"count"},a.species.egg_groups.map(function(e){return e.name+" "}))),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"Height:")," ",o.a.createElement("span",{className:"count"},a.pokemon.height)),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"Weigth:")," ",o.a.createElement("span",{className:"count"},a.pokemon.weight)),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"Gender rate:")," ",o.a.createElement("span",{className:"count"},a.species.gender_rate)),o.a.createElement(h.a,{variant:"h6"},o.a.createElement("span",null,"Capture rate:")," ",o.a.createElement("span",{className:"count"},a.species.capture_rate))))))),o.a.createElement(ve,null)):o.a.createElement(we,{error_type:a.pokemon});fetch("https://pokeapi.co/api/v2/pokemon/"+e.match.params.id).then(function(t){return t.json().then(function(n){if(!t.ok)return Promise.reject({status:t.status,data:n});a.CurrentPokemonPage(e.match.params.id)}).catch(function(e){console.log("error:",e),a.pokemon=t.status})})}),_e=t(33),Te=Object(f.a)(function(e){return{card:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxwidth:"100vh",maxheight:"100vw",minwidth:"40vh",minHeight:"40vw"},grid:{minHeight:"100vh"},img:{Height:"20%",width:"20%"},typogra:{textAlign:"center",fontWeight:"40vh"}}}),Ge=Object(X.a)(function(e){var a=Te();return Object(n.useContext)(re).PokemonGet(20),o.a.createElement(Q.a,{className:a.main},o.a.createElement(ie,{disable:!0}),o.a.createElement(Q.a,{component:"main"},o.a.createElement(Ee.a,{container:!0,justify:"center",alignItems:"center",className:a.grid},o.a.createElement(Q.a,{className:a.box,mt:1,mb:1,ml:1,mr:1},o.a.createElement(se.a,{className:a.card},o.a.createElement("img",{src:"longico-23-512.png",className:a.img,alt:"Pokedex"}),o.a.createElement(pe.a,null,o.a.createElement(h.a,{variant:"body2",color:"textSecondary",component:"p",className:a.typogra},"\u042d\u0442\u043e\u0442 \u043f\u043e\u043a\u0435\u0434\u0435\u043a\u0441 \u0441\u043e\u0437\u0434\u0430\u043d \u043c\u043d\u043e\u0439 (\u0421\u043e\u0431\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u043c \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u043c \u0410\u043d\u0430\u0442\u043e\u043b\u0438\u0435\u0432\u0438\u0447\u0435\u043c)")),o.a.createElement(pe.a,null,o.a.createElement(h.a,{paragraph:!0,className:a.typogra},"\u0414\u043b\u044f \u043d\u0438\u043d\u0442\u0435\u043d\u0434\u043e:"),o.a.createElement(h.a,{paragraph:!0,className:a.typogra},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043d\u0435 \u0431\u0435\u0439\u0442\u0435 \u044f \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b \u0437\u0430\u0434\u0430\u043d\u0438\u0435")))))),o.a.createElement(ve,null))});l.a.render(o.a.createElement(m.a,null,o.a.createElement(_e.c,null,o.a.createElement(_e.a,{path:"/",exact:!0,component:Pe}),o.a.createElement(_e.a,{path:"/about",component:Ge}),o.a.createElement(_e.a,{path:"/pokemon",exact:!0,render:function(){return o.a.createElement(we,{error_type:"POKEMON NOT SELECTED"})}}),o.a.createElement(_e.a,{path:"/:labuda",exact:!0,render:function(){return o.a.createElement(we,{error_type:"INVAILD URL"})}}),o.a.createElement(_e.a,{path:"/pokemon/:id",exact:!0,component:De}),o.a.createElement(_e.a,{path:"/:labuda/:labuda2/",render:function(){return o.a.createElement(we,{error_type:"INVAILD URL"})}}),o.a.createElement(_e.a,{path:"/:labuda/:labuda2/:labuda3",exact:!0,render:function(){return o.a.createElement(we,{error_type:"INVAILD URL"})}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[104,1,2]]]);
//# sourceMappingURL=main.609d378f.chunk.js.map