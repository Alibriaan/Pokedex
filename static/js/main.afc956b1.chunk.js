(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,t,a){e.exports=a(134)},121:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r);a(121),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(6),s=a(18),i=a(92),m=a(44),p=a(9),u=a(175),h=a(176),d=a(135),E=a(49),f=a(192),k=a(168),y=a(13),b=a(69),g=a.n(b),x=a(70),C=a.n(x),v=a(177),j=a(104),N=a(174),w=a(61),P=a(48),O=a.n(P),B=a(71),S=a(93),D=function e(){var t=this;Object(S.a)(this,e),this.pokemons=new Array,this.pokemonsRepeat=new Array,this.typesCheckbox=new Array,this.species=null,this.loadCountPrimary=20,this.loadCount=20,this.pagenum=1,this.SearchText="",this.activePage=1,this.handlePageChange=function(e){t.pokemons=[],t.activePage=e,setTimeout(function(){t.pokemons=t.pokemonsRepeat.slice(t.loadCount*(e-1),t.loadCount*e),console.log("stabotal")},250)},this.Get807=Object(B.a)(O.a.mark(function e(){var a,n,o;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:console.log("vizov 807"),a=1;case 2:if(!(a<=807)){e.next=13;break}return e.next=5,fetch("https://pokeapi.co/api/v2/pokemon/"+a);case 5:return n=e.sent,e.next=8,n.json();case 8:o=e.sent,t.pokemonsRepeat.push({name:o.name,id:o.id,types:o.types,sprites:{front_default:o.sprites.front_default}});case 10:a++,e.next=2;break;case 13:case"end":return e.stop()}},e)})),this.PageBefore807=function(){var e=Object(B.a)(O.a.mark(function e(a){var n,o,r,l;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.pokemons=[],n=[],t.activePage=a,console.log("before 807"),o=(t.activePage-1)*t.loadCount+1;case 5:if(!(o<=t.activePage*t.loadCount)){e.next=20;break}if(!(o>807)){e.next=10;break}return e.abrupt("break",20);case 10:return e.next=12,fetch("https://pokeapi.co/api/v2/pokemon/"+o);case 12:return r=e.sent,e.next=15,r.json();case 15:l=e.sent,n.push({name:l.name,id:l.id,types:l.types,sprites:{front_default:l.sprites.front_default}});case 17:o++,e.next=5;break;case 20:t.pokemons=n;case 21:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.NextPage=function(){t.loadCount+=t.loadCountPrimary,t.pokemons=t.pokemonsRepeat.slice(0,t.loadCount)},this.CurrentPokemonPage=function(e){fetch("https://pokeapi.co/api/v2/pokemon-species/"+e+"/").then(function(e){return e.json()}).then(function(e){t.species=e}),fetch("https://pokeapi.co/api/v2/pokemon/"+e).then(function(e){return e.json()}).then(function(e){t.pokemon=e})},this.PokemonGet=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;t.pokemons=[],t.loadCount=e,t.pokemons=t.pokemonsRepeat.slice(0,e),t.loadCountPrimary=e,t.activePage=1},this.SearchPokemons=function(e){t.SearchText=e.target.value,t.pokemons=[],setTimeout(function(){""===t.SearchText&&0===t.typesCheckbox.length?t.pokemons=t.pokemonsRepeat.slice(0,t.loadCount):(t.pokemons=t.pokemonsRepeat.filter(function(e){return e.name.match(t.SearchText+".*")}),0!=t.typesCheckbox.length&&(t.pokemons=t.pokemons.filter(function(e){var a=!1;if(e.types.map(function(e){-1==t.typesCheckbox.indexOf(e.type.name)||(a=!0)}),!0===a)return e})))},100)},this.CheckBoxPokemon=function(e){if(e.target.checked)t.typesCheckbox.push(e.target.value);else{var a=t.typesCheckbox.indexOf(e.target.value);a>-1&&t.typesCheckbox.splice(a,1)}""===t.SearchText&&0===t.typesCheckbox.length?t.pokemons=t.pokemonsRepeat.slice(0,t.loadCount):(t.pokemons=t.pokemonsRepeat,0!=t.SearchText.length&&(t.pokemons=t.pokemonsRepeat.filter(function(e){return e.name.match(t.SearchText+".*")})),0!=t.typesCheckbox.length&&(t.pokemons=t.pokemons.filter(function(e){var a=!1;if(e.types.map(function(e){-1==t.typesCheckbox.indexOf(e.type.name)||(a=!0)}),!0===a)return e})))},console.log("constructor)");new Array;for(var a=1;a<=20;a++)fetch("https://pokeapi.co/api/v2/pokemon/"+a).then(function(e){return e.json()}).then(function(e){t.pokemons.push({name:e.name,id:e.id,types:e.types,sprites:{front_default:e.sprites.front_default}}),t.pokemons=t.pokemons.slice().sort(function(e,t){return e.id>t.id})});this.Get807()};Object(c.h)(D,{species:c.m,PageBefore807:c.d,activePage:c.m,handlePageChange:c.d,formChecked:c.m,loadCount:c.m,loadCountPrimary:c.m,pagenum:c.m,pokemons:c.m,pokemonsRepeat:c.m,pokemon:c.m,typesCheckbox:c.m,SearchText:c.m,PokemonGet:c.d,SearchPokemons:c.d,CurrentPokemon:c.d,NextPage:c.d,CurrentPokemonPage:c.d,CheckBoxPokemon:c.d});var _,A=new D,R=Object(n.createContext)(A),G=a(193),I=a(178),T=a(179),F=a(102),H=a.n(F),W=a(191),L=a(180),z=a(181),U=a(190),M=a(169),V=a(172),J=a(170),K=a(173),$=a(171),q=a(98),Q=a.n(q),X=a(97),Y=a.n(X),Z=a(95),ee=a.n(Z),te=a(96),ae=a.n(te),ne=a(189),oe=a(24),re=Object(j.a)({palette:{primary:w.a}}),le=Object(k.a)(function(e){return{root:{flexGrow:1},tool:{display:"flex",justifyContent:"space-between"},menuButton:{marginRight:e.spacing(1)},title:{flexGrow:1},button:Object(p.a)({display:"none"},e.breakpoints.up("md"),{display:"block"}),search:Object(p.a)({display:"flex",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(y.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(y.b)(e.palette.common.white,.25)},width:"55%"},e.breakpoints.up("md"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),tagsroot:{display:"flex",justifyContent:"center"},list:{width:250},fullList:{width:"auto"},sideMenuText:{display:"flex",justifyContent:"center",backgroundColor:w.a},stick:{postion:"fixed",top:0}}}),ce=Object(s.a)(function(e){var t,a,r=le(),l=Object(n.useContext)(R),c=function(){if(e.disable)return"none"},s=o.a.useState({left:!1}),k=Object(m.a)(s,2),y=k[0],b=k[1],x=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&b(Object(i.a)({},y,Object(p.a)({},e,t)))}};return o.a.createElement(N.a,{theme:re},o.a.createElement(ne.a,{className:r.stick},o.a.createElement("div",{className:r.root},o.a.createElement(u.a,{position:"static"},o.a.createElement(h.a,{className:r.tool},o.a.createElement(d.a,{edge:"start",className:r.menuButton,color:"inherit","aria-label":"open drawer",onClick:x("left",!0)},o.a.createElement(g.a,null)),o.a.createElement(U.a,{open:y.left,onClose:x("left",!1)},(a="left",o.a.createElement("div",{role:"presentation",onClick:x(a,!1),onKeyDown:x(a,!1)},o.a.createElement(M.a,{className:r.list},o.a.createElement(J.a,{className:r.sideMenuText},o.a.createElement($.a,{primary:"Pokedex"}))),o.a.createElement(V.a,null),o.a.createElement(M.a,null,o.a.createElement(oe.b,{to:"/",style:{textDecoration:"none",color:"#000"}},o.a.createElement(J.a,{button:!0},o.a.createElement(K.a,null,o.a.createElement(ee.a,null)),o.a.createElement($.a,{primary:"Home"}))),o.a.createElement(oe.b,{to:"/about",style:{textDecoration:"none",color:"#000"}},o.a.createElement(J.a,{button:!0},o.a.createElement(K.a,null,o.a.createElement(ae.a,null)),o.a.createElement($.a,{primary:"About"}))),o.a.createElement("a",{href:"https://github.com/Alibriaan/Pokedex",style:{textDecoration:"none",color:"#000"}},o.a.createElement(J.a,{button:!0},o.a.createElement(K.a,null,o.a.createElement(Y.a,null)),o.a.createElement($.a,{primary:"Github"}))),o.a.createElement("a",{href:"https://telegram.me/Alibrian",style:{textDecoration:"none",color:"#000"}},o.a.createElement(J.a,{button:!0},o.a.createElement(K.a,null,o.a.createElement(Q.a,null)),o.a.createElement($.a,{primary:"Contacts"}))))))),o.a.createElement(E.a,{className:r.title,variant:"h6",noWrap:!0},o.a.createElement(oe.b,{to:"/",style:{textDecoration:"none",color:"white"}},"Pokedex")),o.a.createElement("div",{className:r.button,style:{display:c()}},o.a.createElement(v.a,{color:"inherit",onClick:function(){return setTimeout(l.PokemonGet(10),1e3)}},"10 Pokemons"),o.a.createElement(v.a,{color:"inherit",onClick:function(){return setTimeout(l.PokemonGet(20),1e3)}},"20 Pokemons"),o.a.createElement(v.a,{color:"inherit",onClick:function(){return setTimeout(l.PokemonGet(50),1500)}},"50 Pokemons")),o.a.createElement("div",{className:r.search,style:{display:c()}},o.a.createElement("div",{className:r.searchIcon},o.a.createElement(C.a,null)),o.a.createElement(f.a,(t={disabled:e.disable,value:l.SearchText,onChange:l.SearchPokemons},Object(p.a)(t,"value",l.SearchText),Object(p.a)(t,"placeholder","Search\u2026"),Object(p.a)(t,"classes",{root:r.inputRoot,input:r.inputInput}),Object(p.a)(t,"inputProps",{"aria-label":"search"}),t)))))),o.a.createElement(G.a,{className:r.exproot,style:{display:c()}},o.a.createElement(I.a,{expandIcon:o.a.createElement(H.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},o.a.createElement(E.a,{className:r.heading},"\u0422\u0435\u0433\u0438 \u0442\u0438\u043f\u043e\u0432 \u043f\u043e\u043a\u0435\u043c\u043e\u043d\u043e\u0432")),o.a.createElement(T.a,null,o.a.createElement(N.a,{theme:re},o.a.createElement(L.a,{row:!0,className:r.tagsroot},o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"normal",onClick:l.CheckBoxPokemon,color:"primary"}),label:"normal"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"fighting",onClick:l.CheckBoxPokemon,color:"primary"}),label:"fighting"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"flying",onClick:l.CheckBoxPokemon,color:"primary"}),label:"flying"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"poison",onClick:l.CheckBoxPokemon,color:"primary"}),label:"poison"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"ground",onClick:l.CheckBoxPokemon,color:"primary"}),label:"ground"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"rock",onClick:l.CheckBoxPokemon,color:"primary"}),label:"rock"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"bug",onClick:l.CheckBoxPokemon,color:"primary"}),label:"bug"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"ghost",onClick:l.CheckBoxPokemon,color:"primary"}),label:"ghost"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"steel",onClick:l.CheckBoxPokemon,color:"primary"}),label:"steel"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"fire",onClick:l.CheckBoxPokemon,color:"primary"}),label:"fire"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"water",onClick:l.CheckBoxPokemon,color:"primary"}),label:"water"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"grass",onClick:l.CheckBoxPokemon,color:"primary"}),label:"grass"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"electric",onClick:l.CheckBoxPokemon,color:"primary"}),label:"electric"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"psychic",onClick:l.CheckBoxPokemon,color:"primary"}),label:"psychic"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"ice",onClick:l.CheckBoxPokemon,color:"primary"}),label:"ice"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"dragon",onClick:l.CheckBoxPokemon,color:"primary"}),label:"dragon"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"dark",onClick:l.CheckBoxPokemon,color:"primary"}),label:"dark"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"fairy",onClick:l.CheckBoxPokemon,color:"primary"}),label:"fairy"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"unknown",onClick:l.CheckBoxPokemon,color:"primary"}),label:"unknown"}),o.a.createElement(z.a,{control:o.a.createElement(W.a,{value:"shadow",onClick:l.CheckBoxPokemon,color:"primary"}),label:"shadow"})))))))}),se=a(182),ie=a(183),me=a(184),pe=a(185),ue={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},he=Object(k.a)((_={number:{display:"flex",justifyContent:"center",fontSize:14},pos:{marginBottom:12},types:{display:"flex",justifyContent:"space-around"},name:{flexGrow:1,display:"flex",justifyContent:"center",textAlign:"center"},avatar:{display:"flex",justifyContent:"center"},avatarSize:{width:120,height:120}},Object(p.a)(_,"types",{flexGrow:1,display:"flex",justifyContent:"space-around"}),Object(p.a)(_,"typesName",{display:"block",padding:"3px",width:"50px",textAlign:"center ",boxShadow:" 0px 0px 10px 0.5px rgba(0,0,0,0.2)"}),Object(p.a)(_,"card",{display:"block",margin:" 8px 6px 10px 8px",Width:260,Height:340}),_)),de=Object(s.a)(function(e){var t=he(),a=Object(n.useContext)(R);return o.a.createElement(se.a,{className:t.card},o.a.createElement(oe.b,{to:e.lin,style:{textDecoration:"none",color:"black"},onClick:function(){return a.CurrentPokemonPage(e.number)}},o.a.createElement(ie.a,null,o.a.createElement(me.a,null,o.a.createElement(E.a,{className:t.number,color:"textSecondary",gutterBottom:!0},e.number),o.a.createElement(E.a,{variant:"h5",component:"h3",className:t.name},e.name),o.a.createElement(ne.a,{className:t.avatar},o.a.createElement(pe.a,{alt:"Remy Sharp",src:e.ava,className:t.avatarSize})),o.a.createElement(E.a,{className:t.types,color:"textSecondary"},e.types.map(function(e){return o.a.createElement("div",{style:{backgroundColor:"#"+ue[e.type.name],color:(a=e.type.name,"fighting"===a?"DimGray":"white")},className:t.typesName},o.a.createElement("h5",null,e.type.name));var a}))))))}),Ee=a(186),fe=a(103),ke=a.n(fe),ye=Object(k.a)(function(e){return{root:{marginTop:"10px",backgroundColor:"Gainsboro",minHeight:"100vh",display:"flex",justifyContent:"center"},butt:{width:"100%",maxHeight:"80%",flexGrow:1,display:"flex",justifyContent:"center\t"}}}),be=Object(s.a)(function(e){var t=Object(n.useContext)(R),a=ye();return o.a.createElement(Ee.a,{container:!0,className:a.root},o.a.createElement(Ee.a,null,o.a.createElement(Ee.a,{container:!0,justify:"center"},t.pokemons.map(function(e){return o.a.createElement(de,{color:e.type,pok:e,lin:"/pokemon/"+e.id,number:e.id,name:e.name,types:e.types,ava:e.sprites.front_default})}),o.a.createElement(Ee.a,{container:!0,justify:"center"},o.a.createElement(ne.a,{className:a.butt,mt:2,mb:4},t.SearchText.length<1&&t.typesCheckbox.length<1&&o.a.createElement(ke.a,{className:a.pagination,hideDisabled:!0,pageRangeDisplayed:5,activePage:t.activePage,itemsCountPerPage:t.loadCountPrimary,totalItemsCount:807,onChange:t.pokemonsRepeat.length<807?t.PageBefore807:t.handlePageChange}))))))}),ge=Object(j.a)({palette:{primary:w.a}}),xe=Object(k.a)(function(e){return{root:{width:"100%",maxHeight:"80%",flexGrow:1,display:"flex",justifyContent:"center"}}}),Ce=function(){xe();return o.a.createElement(N.a,{theme:ge},o.a.createElement(u.a,{position:"static",color:"primary"},o.a.createElement("h1",null,"Pokedex by Dimas"),o.a.createElement("h3",null,"\u0432\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b \u0441\u0432\u044f\u0442\u043e\u0439 \u0432\u043e\u0434\u043e\u0439 "),o.a.createElement("h2",null,"\u041a\u043e\u043d\u0435\u0446")))},ve=Object(k.a)(function(e){return{root:{minHeight:"100vh",border:"1px solid blue"}}}),je=Object(s.a)(function(){Object(n.useContext)(R),ve();var e=Object(n.useState)(!1),t=Object(m.a)(e,2);t[0],t[1];return o.a.createElement("div",null,o.a.createElement(ce,{disable:!1}),o.a.createElement(be,null),o.a.createElement(Ce,null))}),Ne=Object(k.a)({rootError:{display:"flex",height:"100vh",justifyContent:"center"},cardError:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},Error:{display:"flex",justifyContent:"center"}}),we=function(e){var t=Ne();return o.a.createElement(ne.a,{mt:2,mb:2,className:t.rootError},o.a.createElement(se.a,{className:t.cardError},o.a.createElement(me.a,null,o.a.createElement(E.a,{className:t.Error,variant:"h3"},"ERROR"),o.a.createElement(E.a,{className:t.Error,variant:"h5"},e.error_type))))},Pe=a(188),Oe=a(187),Be=Object(k.a)(function(e){var t;return t={root:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-around"},card:{width:"90vw",maxWidth:"1600px",display:"flex",justifyContent:"center"},content:{flexGrow:1,padding:0,paddingBottom:"0px"},number:{display:"flex",justifyContent:"center"},types:{display:"flex",justifyContent:"space-around"},name:{flexGrow:1,textAlign:"center",display:"flex",justifyContent:"center"},avatar:{display:"flex",justifyContent:"center"},avatarSize:Object(p.a)({width:150,height:150,display:"flex",justifyContent:"center",alignItems:"center"},e.breakpoints.up("md"),{width:300,height:300})},Object(p.a)(t,"types",{display:"flex",justifyContent:"center"}),Object(p.a)(t,"media",{display:"flex",justifyContent:"center"}),Object(p.a)(t,"rootError",{display:"flex",height:"100vh"}),Object(p.a)(t,"typesName",{display:"block",padding:"3px",width:"100px",textAlign:"center ",boxShadow:" 0px 0px 10px 0.5px rgba(0,0,0,0.2)"}),Object(p.a)(t,"story",{textAlign:"center"}),Object(p.a)(t,"skils",{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}),Object(p.a)(t,"statsBarRoot",{display:"flex",justifyContent:"space-around",alignItems:"center"}),Object(p.a)(t,"statsBarName",{display:"flex",flexDirection:"column",justifyContent:"space-around"}),Object(p.a)(t,"paper",{padding:"2.5px 0px 2.5px 0px"}),Object(p.a)(t,"bar",{display:"flex",justifyContent:"space-between"}),Object(p.a)(t,"cardFooter",{height:104}),t}),Se={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},De=Object(s.a)(function(e){var t=Object(n.useContext)(R),a=Be(),r=function(e){return e.types.length>1?"linear-gradient( to right ,#"+("fighting"===e.types[0].type.name?"C0C0C0":Se[e.types[0].type.name])+" 50% ,  #"+("fighting"===e.types[1].type.name?"C0C0C0":Se[e.types[1].type.name])+" 50%)":"#"+("fighting"===e.types[0].type.name?"C0C0C0":Se[e.types[0].type.name])},l=Object(n.useState)(!0),c=Object(m.a)(l,1)[0];if(void 0!==t.pokemon)return isNaN(+t.pokemon)?void 0!=t.pokemon&&void 0!=t.species&&o.a.createElement(ne.a,{className:a.main},o.a.createElement(ce,{disable:!0}),o.a.createElement(Oe.a,{in:c,timeout:{enter:400}},o.a.createElement(ne.a,{className:a.root,mt:2,mb:2,mr:2,ml:2},o.a.createElement(se.a,{className:a.card},o.a.createElement(me.a,{className:a.content},o.a.createElement(ne.a,{pt:1,pb:1,style:{background:r(t.pokemon),color:"White"}},o.a.createElement(E.a,{className:a.number,variant:"h4"},"\u2116",t.pokemon.id),o.a.createElement(E.a,{variant:"h3",className:a.name},t.pokemon.name)),o.a.createElement(E.a,{className:a.avatar},o.a.createElement(Pe.a,{className:a.avatarSize,image:t.pokemon.sprites.front_default,title:t.pokemon.name})),o.a.createElement(E.a,{className:a.types,variant:"h5"},t.pokemon.types.map(function(e){return o.a.createElement(ne.a,{ml:1,mr:1,style:{backgroundColor:"#"+Se[e.type.name],color:(t=e.type.name,"fighting"===t?"DimGray":"white")},className:a.typesName},e.type.name);var t})),o.a.createElement(E.a,{variant:"h5"},o.a.createElement(ne.a,{mt:3,mb:3,ml:2,mr:2},o.a.createElement("span",{className:"count"},function(){var e,a=t.species.generation.name.indexOf("-");return e=t.species.generation.name[0].toUpperCase()+t.species.generation.name.slice(1,a),e+"-"+t.species.generation.name.slice(a+1).toUpperCase()}()))),o.a.createElement(ne.a,{mt:3,mb:1,ml:2,mr:6},o.a.createElement(E.a,{variant:"h4"},o.a.createElement("span",{className:"count"},t.species.genera[2].genus),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",{className:"count"},function(){var e=!1,a="Hello";return t.species.flavor_text_entries.filter(function(t){return!1===e&&"en"===t.language.name&&(a=t.flavor_text,e=!0,!0)}),a}())))),o.a.createElement(ne.a,{pt:1,pb:1,mt:1,mb:1,style:{background:r(t.pokemon),color:"White"}},o.a.createElement(E.a,{className:a.number,variant:"h4"},"Stats")),o.a.createElement(ne.a,{className:a.skils,pt:6,pb:6},o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"HP:")," ",o.a.createElement("span",{className:"count"},t.pokemon.stats[5].base_stat)),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Attack:")," ",o.a.createElement("span",{className:"count"},t.pokemon.stats[4].base_stat))),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Speed:")," ",o.a.createElement("span",{className:"count"},t.pokemon.stats[0].base_stat))),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Defense:")," ",o.a.createElement("span",{className:"count"},t.pokemon.stats[3].base_stat))),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Sp Atk:")," ",o.a.createElement("span",{className:"count"},t.pokemon.stats[2].base_stat))),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("div",null,o.a.createElement("span",null,"Sp Def:")," ",o.a.createElement("span",{className:"count"},t.pokemon.stats[1].base_stat)))),o.a.createElement(ne.a,{pt:1,pb:1,mt:1,mb:6,style:{background:r(t.pokemon),color:"White"}},o.a.createElement(E.a,{className:a.number,variant:"h4"},"Informations")),o.a.createElement(ne.a,{mt:3,mb:3,ml:2,mr:6},o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"Base Happiness:")," ",o.a.createElement("span",{className:"count"},t.species.base_happiness)),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"Egg groups:")," ",o.a.createElement("span",{className:"count"},t.species.egg_groups.map(function(e){return e.name+" "}))),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"Height:")," ",o.a.createElement("span",{className:"count"},t.pokemon.height)),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"Weigth:")," ",o.a.createElement("span",{className:"count"},t.pokemon.weight)),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"Gender rate:")," ",o.a.createElement("span",{className:"count"},t.species.gender_rate)),o.a.createElement(E.a,{variant:"h6"},o.a.createElement("span",null,"Capture rate:")," ",o.a.createElement("span",{className:"count"},t.species.capture_rate))))))),o.a.createElement(Ce,null)):o.a.createElement(we,{error_type:t.pokemon});fetch("https://pokeapi.co/api/v2/pokemon/"+e.match.params.id).then(function(a){return a.json().then(function(n){if(!a.ok)return Promise.reject({status:a.status,data:n});t.CurrentPokemonPage(e.match.params.id)}).catch(function(e){console.log("error:",e),t.pokemon=a.status})})}),_e=a(33),Ae=Object(k.a)(function(e){return{card:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxwidth:"100vh",maxheight:"100vw",minwidth:"40vh",minHeight:"40vw"},grid:{minHeight:"100vh"},img:{Height:"20%",width:"20%"},typogra:{textAlign:"center",fontWeight:"40vh"}}}),Re=Object(s.a)(function(e){var t=Ae();return Object(n.useContext)(R).PokemonGet(20),o.a.createElement(ne.a,{className:t.main},o.a.createElement(ce,{disable:!0}),o.a.createElement(Ee.a,{container:!0,justify:"center",alignItems:"center",className:t.grid},o.a.createElement(ne.a,{className:t.box,mt:1,mb:1,ml:1,mr:1},o.a.createElement(se.a,{className:t.card},o.a.createElement("img",{src:"longico-23-512.png",className:t.img}),o.a.createElement(me.a,null,o.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p",className:t.typogra},"\u042d\u0442\u043e\u0442 \u043f\u043e\u043a\u0435\u0434\u0435\u043a\u0441 \u0441\u043e\u0437\u0434\u0430\u043d \u043c\u043d\u043e\u0439 (\u0421\u043e\u0431\u043e\u043b\u0435\u0432\u0441\u043a\u0438\u043c \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u043c \u0410\u043d\u0430\u0442\u043e\u043b\u0438\u0435\u0432\u0438\u0447\u0435\u043c)")),o.a.createElement(me.a,null,o.a.createElement(E.a,{paragraph:!0,className:t.typogra},"\u0414\u043b\u044f \u043d\u0438\u043d\u0442\u0435\u043d\u0434\u043e:"),o.a.createElement(E.a,{paragraph:!0,className:t.typogra},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u043d\u0435 \u0431\u0435\u0439\u0442\u0435 \u044f \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u043b \u0437\u0430\u0434\u0430\u043d\u0438\u0435"))))),o.a.createElement(Ce,null))});l.a.render(o.a.createElement(oe.a,null,o.a.createElement(_e.c,null,o.a.createElement(_e.a,{path:"/",exact:!0,component:je}),o.a.createElement(_e.a,{path:"/about",component:Re}),o.a.createElement(_e.a,{path:"/pokemon",exact:!0,render:function(){return o.a.createElement(we,{error_type:"POKEMON NOT SELECTED"})}}),o.a.createElement(_e.a,{path:"/:labuda",exact:!0,render:function(){return o.a.createElement(we,{error_type:"INVAILD URL"})}}),o.a.createElement(_e.a,{path:"/pokemon/:id",exact:!0,component:De}),o.a.createElement(_e.a,{path:"/:labuda/:labuda2/",render:function(){return o.a.createElement(we,{error_type:"INVAILD URL"})}}),o.a.createElement(_e.a,{path:"/:labuda/:labuda2/:labuda3",exact:!0,render:function(){return o.a.createElement(we,{error_type:"INVAILD URL"})}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[116,1,2]]]);
//# sourceMappingURL=main.afc956b1.chunk.js.map