(this.webpackJsonpprojekt3=this.webpackJsonpprojekt3||[]).push([[0],{10:function(e,t,n){e.exports={buttons:"Header_buttons__2B8C8",row:"Header_row__1-6IL",spacer:"Header_spacer__3egVU"}},12:function(e,t,n){e.exports={"game-title":"Game_game-title__3aPd_",mapTailContainer:"Game_mapTailContainer__Ww0of",active:"Game_active__ib4dq",map:"Game_map__3nTyb","map-placeholder":"Game_map-placeholder__2_TlC",puzzles:"Game_puzzles__2cyCY",puzzleItem:"Game_puzzleItem__3jW_f"}},14:function(e,t,n){e.exports={button:"LinkButton_button__2WqQS",active:"LinkButton_active__NWHbw"}},15:function(e,t,n){e.exports={cookies:"Cookies_cookies__bQhp_",cookiesContainer:"Cookies_cookiesContainer__2U1Tt"}},16:function(e,t,n){e.exports={section:"Links_section__1SI7b",usefullLink:"Links_usefullLink__1PMkQ"}},17:function(e,t,n){e.exports={container:"Footer_container__111HB",content:"Footer_content__3pZQZ"}},27:function(e){e.exports=JSON.parse('{"UsefulLinks":"Przydatne linki","GameTitle":"Gra - Polskie puzzle","Win":"Gratulacje! Wygrana!","Player":"Gracz","StepsCount":"Licznik krok\xf3w","StopAI":"Zatrzymaj AI dla gracza B","StartAI":"Uruchom AI dla gracza B","WaitForAI":"Teraz ruch AI, poczekaj chwil\u0119","GameDescription":"Najlepsze puzzle w Polsce, i nie tylko. My\u015blisz \u017ce znasz Polsk\u0119. 99% os\xf3b nie ko\u0144czy tej gry. B\u0105dz pierwszy! Zacznij ju\u017c dzi\u015b","QuizDescription":"Najlepsze quizy geograficzne na tej stronie, dok\u0142adnie takie jakie by\u0107 powinny. Sprawdz si\u0119! B\u0105dz najlepszy, poczuj si\u0119 jak uczestnik 1 z 10","QuizTitle":"Quizy - Quizy geograficzne","Loading":"\u0141adowanie","AvailableQuizzes":"Dost\u0119pne Quizy","Check":"Sprawd\u017a","QuizResult":"Wynik quizu","Bad":"S\u0142abo","Good":"Dobrze","QuestionNo":"Pytanie nr","PostsTitle":"Najwa\u017cniejsze us\u0142ugi mapowe","PageTitle":"Us\u0142ugi mapowe GIS","CookiesInfo":"W celu zapewnienia wy\u017cszej jako\u015bci us\u0142ug na tej stronie u\u017cyto plik\xf3w cookie.","CookiesMore":"Dowiedz si\u0119 wi\u0119cej o tym","CookiesLink":"https://ec.europa.eu/info/cookies_pl","CookiesAccept":"Akceptuj pliki cookies","More":"Wi\u0119cej"}')},28:function(e){e.exports=JSON.parse('{"UsefulLinks":"Useful links","GameTitle":"Game - Polish puzzles","Win":"Congratulations! Win!","Player":"Player","StepsCount":"Step counter","StopAI":"Stop AI for player B","StartAI":"Start AI for player B","WaitForAI":"Now AI move, wait a minute","GameDescription":"The best puzzles in Poland, and more. You think you know Poland. 99% of people don\'t finish this game. Be the first! Get started today","QuizDescription":"The best geography quizzes on this site, exactly as they should be. Check yourself! Be the best, feel like a participant on 1 out of 10","QuizTitle":"Quizzes - Geographical quizzes","Loading":"Loading","AvailableQuizzes":"Available quizzes","Check":"Check","QuizResult":"Quiz result","Bad":"Bad","Good":"Good","QuestionNo":"Question no","PostsTitle":"Major Map Services","PageTitle":"GIS mapping services","CookiesInfo":"This site uses cookies to offer you a better browsing experience.","CookiesMore":"Find out more on","CookiesLink":"https://ec.europa.eu/info/cookies_en","CookiesAccept":"Accept cookies","More":"More"}')},29:function(e,t,n){e.exports={container:"Content_container__3winJ"}},39:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),a=n(26),s=n.n(a),o=(n(39),n(14)),r=n.n(o),l=n(0);function u(e){var t=e.children,n=e.href,i=e.active,c=e.onClick;return Object(l.jsx)("a",{href:n,className:[r.a.button,i?r.a.active:""].join(" "),onClick:c,children:t})}var j=n(2),d=n(27),h=n(28),p=n(15),b=n.n(p);function m(e,t,n){var i="";if(n){var c=new Date;c.setTime(c.getTime()+24*n*60*60*1e3),i="; expires="+c.toUTCString()}document.cookie=e+"="+(t||"")+i+"; path=/"}function O(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var c=n[i];" "===c.charAt(0);)c=c.substring(1,c.length);if(0===c.indexOf(t))return c.substring(t.length,c.length)}return null}function x(){var e=Object(i.useState)(!!O("cookies_accepted")),t=Object(j.a)(e,2),n=t[0],c=t[1];return n?Object(l.jsx)(l.Fragment,{}):Object(l.jsx)("div",{className:b.a.cookies,children:Object(l.jsxs)("div",{className:b.a.cookiesContainer,children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",id:"notifications--information",fill:"#004593",width:"24px",height:"24px",children:Object(l.jsx)("path",{d:"M15.086 18.175H8.913v-1.508h1.508v-4.665H8.913v-1.507h4.665v6.172h1.576v1.508h-.068zM10.42 7c0-.617.548-1.166 1.165-1.166h.754c.617 0 1.165.549 1.165 1.166v.753c0 .617-.548 1.165-1.165 1.165h-.754c-.617 0-1.165-.548-1.165-1.165V7zM11.998.005A11.97 11.97 0 000 12.002 11.97 11.97 0 0011.998 24a11.97 11.97 0 0011.997-11.998c0-6.647-5.414-11.997-11.998-11.997z"})}),Object(l.jsxs)("p",{children:[Object(l.jsx)(v,{children:"CookiesInfo"}),Object(l.jsx)("a",{href:_("CookiesLink"),target:"_blank",rel:"noreferrer",children:Object(l.jsx)(v,{children:"CookiesMore"})})]}),Object(l.jsx)(u,{onClick:function(){c(!0),m("cookies_accepted","1")},children:Object(l.jsx)(v,{children:"CookiesAccept"})})]})})}var f={pl:d,en:h},g=Object(i.createContext)({lang:"en",changeLang:function(e){}});function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"pl";return f[t][e]||f.pl[e]||e}function v(e){var t=e.children,n=Object(i.useContext)(g).lang;return Object(l.jsx)(l.Fragment,{children:f[n][t]||f.pl[t]||t})}var k=["pl","en"];function z(e){var t=e.children,n=Object(i.useState)(O("lang")||"pl"),c=Object(j.a)(n,2),a=c[0],s=c[1];return Object(l.jsx)(g.Provider,{value:{lang:a,changeLang:function(e){e=e.toLocaleLowerCase(),k.includes(e)&&(s(e),m("lang",e))}},children:t})}var w=n(10),C=n.n(w);function y(){var e=Object(i.useContext)(g),t=e.lang,n=e.changeLang;return Object(l.jsx)("header",{children:Object(l.jsxs)("div",{className:C.a.row,children:[Object(l.jsx)("h1",{children:Object(l.jsx)(v,{children:"PageTitle"})}),Object(l.jsx)("div",{className:C.a.spacer}),Object(l.jsxs)("div",{className:C.a.buttons,children:[Object(l.jsx)(u,{component:"a",href:"https://www.facebook.com/facebook",children:"Facebook"}),Object(l.jsx)(u,{component:"a",href:"https://twitter.com/Twitter",children:"Twitter"})]}),Object(l.jsxs)("div",{className:C.a.buttons,children:[Object(l.jsx)(u,{component:"a",active:"pl"===t,onClick:function(){return n("pl")},children:"PL"}),Object(l.jsx)(u,{component:"a",active:"en"===t,onClick:function(){return n("en")},children:"EN"})]})]})})}var S=n(29),N=n.n(S),T=n(33),A=n(30),I=n(31),P=n(34),Q=n(32),G=n(4);function M(e){return Object(l.jsx)("svg",Object(G.a)(Object(G.a)({height:"329pt",viewBox:"0 0 329.26933 329",width:"329pt",xmlns:"http://www.w3.org/2000/svg"},e),{},{children:Object(l.jsx)("path",{d:"m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"})}))}var q=n(7),L=n.n(q);function B(e){var t=e.open,n=e.title,i=e.children,c=e.handleClose;return Object(l.jsx)("aside",{children:t&&Object(l.jsx)("div",{className:L.a.portal,children:Object(l.jsxs)("div",{className:L.a.view,children:[Object(l.jsxs)("header",{className:L.a.header,children:[Object(l.jsx)("h2",{className:L.a.title,children:n}),Object(l.jsx)("button",{onClick:c,className:L.a.closeGame,children:Object(l.jsx)(M,{className:L.a.closeIcon})})]}),Object(l.jsx)("section",{children:i})]})})})}var W=n(12),F=n.n(W),U=function(e){return{id:-1,url:"#",img:"./img/puzzle.PNG",imgAlt:_("GameTitle",e),title:_("GameTitle",e),description:_("GameDescription",e)}};function D(){for(var e=[],t=0,n=40;n<=43;n++)for(var i=69;i<=72;i++)e.push({index:t,x:i,y:n,image:"url(https://tile.openstreetmap.org/".concat(7,"/").concat(i,"/").concat(n,".png)")}),t++;return e}var H=function(e){Object(P.a)(n,e);var t=Object(Q.a)(n);function n(){var e;Object(A.a)(this,n);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={player:0,stepsCount:0,open:!1,win:!1,ai:!1,aiMessage:!1,aiWait:!1,selected:-1,tiles:D()},e.runAi=function(){var t=e.state,n=t.aiMessage,i=t.tiles,c=t.ai,a=t.player,s=t.selected;if(c&&1===a&&-1===s){if(e.setState({aiWait:!0}),!n){var o=e.context.lang;e.setState({aiMessage:!0}),setTimeout((function(){return alert(_("WaitForAI",o))}))}var r=Math.floor(Math.random()*i.length),l=Math.floor(Math.random()*(i.length-1));l>=r&&l++,setTimeout((function(){e.moveTo(r),setTimeout((function(){e.moveTo(l),e.setState({aiWait:!1})}),1e3*Math.random()+500)}),1e3*Math.random()+500)}},e.handleOpen=function(){e.setState({open:!0}),e.setState({tiles:e.state.tiles.sort((function(){return Math.random()-.5}))})},e.handleClose=function(){e.setState({open:!1,player:0,stepsCount:0,win:!1,ai:!1,aiWait:!1,selected:-1})},e.handleToggleAi=function(){var t=e.state.ai;e.setState({ai:!t},e.runAi)},e}return Object(I.a)(n,[{key:"moveTo",value:function(e){var t=this.state,n=t.player,i=t.stepsCount,c=t.win,a=t.selected,s=t.tiles;if(!c&&a!==e)if(-1!==a){this.setState({selected:-1}),this.setState({stepsCount:i+1});var o=Object(T.a)(s);o[a]=s[e],o[e]=s[a],o.every((function(e,t){return e.index===t}))?this.setState({win:!0}):this.setState({player:1-n},this.runAi),this.setState({tiles:o})}else this.setState({selected:e})}},{key:"render",value:function(){var e=this,t=this.state,n=t.player,i=t.stepsCount,c=t.open,a=t.win,s=t.ai,o=t.selected,r=t.tiles,u=this.context.lang;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(te,{post:U(u),onClick:this.handleOpen}),Object(l.jsxs)(B,{title:_("GameTitle",u),open:c,handleClose:this.handleClose,children:[Object(l.jsx)("div",{className:F.a.map,style:{gridTemplateColumns:"repeat(".concat(4,", 1fr)"),gridGap:a?0:void 0,userSelect:a?"none":void 0},children:r.map((function(t,n){var i=t.index,c=t.x,a=t.y;return Object(l.jsx)("div",{className:[F.a.mapTailContainer,o===n?F.a.active:""].join(" "),style:{backgroundImage:"url(https://tile.openstreetmap.org/".concat(7,"/").concat(c,"/").concat(a,".png)")},onClick:function(){e.state.aiWait||e.moveTo(n)}},i)}))}),Object(l.jsxs)("p",{children:[Object(l.jsx)(v,{children:"Player"}),0===n?"A":"B",". ",Object(l.jsx)(v,{children:"StepsCount"}),":"," ",i,". ",a&&Object(l.jsx)(v,{children:"Win"})]}),Object(l.jsx)("button",{onClick:this.handleToggleAi,children:s?Object(l.jsx)(v,{children:"StopAI"}):Object(l.jsx)(v,{children:"StartAI"})})]})]})}}]),n}(i.Component);H.contextType=g;var R=n(5),E=n.n(R),J=["localhost","127.0.0.1",""].includes(window.location.hostname)?"http://localhost:8080/":"https://pwi-mvc.appspot.com/",K=n(6),Z=n.n(K),Y=function(e){return{id:-2,url:"#",img:"./img/quiz.jpg",imgAlt:_("QuizTitle",e),title:_("QuizTitle",e),description:_("QuizDescription",e)}};function V(){var e=Object(i.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),s=Object(j.a)(a,2),o=s[0],r=s[1],u=Object(i.useState)(!1),d=Object(j.a)(u,2),h=d[0],p=d[1],b=Object(i.useState)(null),m=Object(j.a)(b,2),O=m[0],x=m[1],f=Object(i.useState)(null),k=Object(j.a)(f,2),z=k[0],w=k[1],C=Object(i.useContext)(g).lang;Object(i.useEffect)((function(){E.a.get("".concat(J,"quizzes?lang=").concat(C)).then((function(e){r(e.data)}))}),[n,C]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(te,{post:Y(C),onClick:function(){c(!0)}}),Object(l.jsxs)(B,{title:_("QuizTitle",C),open:n,handleClose:function(){c(!1),r([]),x(null),w(null)},children:[h&&Object(l.jsxs)("p",{children:[Object(l.jsx)(v,{children:"Loading"})," ..."]}),null===O?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:Object(l.jsx)(v,{children:"AvailableQuizzes"})}),0===o.length&&Object(l.jsxs)("p",{children:[Object(l.jsx)(v,{children:"Loading"})," ..."]}),o.map((function(e){return Object(l.jsxs)("div",{className:Z.a.quiz,onClick:function(){return t=e,p(!0),void E.a.get("".concat(J,"quiz?id=").concat(t.id)).then((function(e){var t=e.data,n=Object(G.a)(Object(G.a)({},t),{},{questions:t.questions.map((function(e){return Object(G.a)(Object(G.a)({},e),{},{answer:null})}))});x(n),p(!1)}));var t},children:[Object(l.jsx)("div",{style:{backgroundImage:"url(".concat(e.image,")")},className:Z.a.image}),Object(l.jsx)("div",{children:e.name})]},e.id)}))]}):null===z?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:O.name}),O.questions.map((function(e,t){return Object(l.jsx)(X,{index:t+1,schema:e,selectAnswer:function(e,t){return x((function(n){return null===n?n:Object(G.a)(Object(G.a)({},n),{},{questions:n.questions.map((function(n){return n.id===e.id?Object(G.a)(Object(G.a)({},n),{},{answer:t}):n}))})}))}},e.id)})),Object(l.jsx)("button",{disabled:!O.questions.every((function(e){return e.answer})),className:Z.a.sendBtn,onClick:function(){E.a.post("".concat(J,"quiz"),{body:{quizId:null===O||void 0===O?void 0:O.id,questions:null===O||void 0===O?void 0:O.questions.map((function(e){return{questionId:e.id,answer:e.answer}}))}}).then((function(e){w(e.data),p(!1)}))},children:Object(l.jsx)(v,{children:"Check"})})]}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:Object(l.jsx)(v,{children:"QuizResult"})}),Object(l.jsx)("h3",{children:O.name}),Object(l.jsx)("img",{src:O.image,alt:"",className:Z.a.quizImg}),Object(l.jsxs)("p",{children:[z.correct," / ",z.correct+z.errors," (",Math.round(100*z.correct/(z.correct+z.errors))," ","%)"]}),Math.round(100*z.correct/(z.correct+z.errors))<=50?Object(l.jsxs)("p",{children:[Object(l.jsx)(v,{children:"Bad"})," \ud83e\udd2b"]}):Object(l.jsxs)("p",{children:[Object(l.jsx)(v,{children:"Good"})," \ud83d\ude00"]})]})]})]})}function X(e){var t=e.index,n=e.schema,i=e.selectAnswer;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)(v,{children:"QuestionNo"})," ",t]}),Object(l.jsx)("h4",{children:n.name}),Object(l.jsx)("div",{className:Z.a.answers,children:n.options.map((function(e){return Object(l.jsx)("button",{className:Z.a.answer+" "+(e.id===n.answer&&Z.a.active||""),onClick:function(){return i(n,e.id)},children:e.name},e.id)}))})]})}var $=n(8),ee=n.n($);function te(e){var t=e.post,n=t.img,i=(t.url,t.imgAlt),c=t.title,a=t.description,s=e.onClick;return Object(l.jsxs)("article",{className:ee.a.post,onClick:s,children:[Object(l.jsx)("div",{className:ee.a.image,children:Object(l.jsx)("img",{src:n,alt:i})}),Object(l.jsx)("h3",{children:c}),Object(l.jsx)("p",{children:a})]})}function ne(){var e,t=Object(i.useState)([]),n=Object(j.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(g).lang,o=Object(i.useState)(null),r=Object(j.a)(o,2),u=r[0],d=r[1];Object(i.useEffect)((function(){E.a.get("".concat(J,"posts?lang=").concat(s)).then((function(e){a(e.data)}))}),[s]);return Object(l.jsx)("main",{children:Object(l.jsxs)("section",{children:[Object(l.jsx)("h2",{className:ee.a.title,children:Object(l.jsx)(v,{children:"PostsTitle"})}),Object(l.jsxs)("div",{className:ee.a.posts,children:[c.map((function(e){return Object(l.jsx)(te,{post:e,onClick:function(){return function(e){d(e)}(e)}},e.id)})),Object(l.jsx)(H,{}),Object(l.jsx)(V,{})]}),u&&Object(l.jsxs)(B,{title:u.title,open:!!u,handleClose:function(){d(null)},children:[Object(l.jsx)("img",{src:u.img,alt:u.imgAlt,className:ee.a.postImage}),Object(l.jsx)("p",{children:u.description}),null===(e=u.content)||void 0===e?void 0:e.map((function(e,t){return Object(l.jsx)("p",{children:e},t)})),Object(l.jsx)("a",{href:u.url,children:Object(l.jsx)(v,{children:"More"})})]})]})})}var ie=n(16),ce=n.n(ie);function ae(){var e=Object(i.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],a=Object(i.useContext)(g).lang;return Object(i.useEffect)((function(){E.a.get("".concat(J,"links?lang=").concat(a)).then((function(e){c(e.data)}))}),[a]),Object(l.jsxs)("aside",{className:ce.a.section,children:[Object(l.jsx)("h3",{children:Object(l.jsx)(v,{children:"UsefulLinks"})}),Object(l.jsx)("ul",{children:n.map((function(e){var t=e.url,n=e.name;return Object(l.jsx)("li",{children:Object(l.jsx)("a",{href:t,className:ce.a.usefullLink,children:n})},t)}))})]})}function se(){return Object(l.jsxs)("div",{className:N.a.container,children:[Object(l.jsx)(ne,{}),Object(l.jsx)(ae,{})]})}var oe=n(17),re=n.n(oe);function le(){return Object(l.jsx)("footer",{className:re.a.container,children:Object(l.jsxs)("div",{className:re.a.content,children:[Object(l.jsx)("p",{children:"Kamil Miko\u0142ajczuk"}),Object(l.jsx)(u,{href:"https://github.com/MikolajczukKamil",children:"Github"}),Object(l.jsx)(u,{href:"https://www.linkedin.com/in/kamil-miko%C5%82ajczuk-61682b16a/",children:"LinkedIn"})]})})}function ue(){return Object(l.jsxs)(z,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(se,{}),Object(l.jsx)(le,{}),Object(l.jsx)(x,{})]})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(ue,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={quiz:"Quiz_quiz__3rIpt",image:"Quiz_image__3QKl1",answers:"Quiz_answers__HPdjK",answer:"Quiz_answer__VP-xw",active:"Quiz_active__3YO6j",sendBtn:"Quiz_sendBtn__3Ymf9",quizImg:"Quiz_quizImg__1oh9W"}},7:function(e,t,n){e.exports={title:"Portal_title__3Tdg_",header:"Portal_header__1N9K1",closeGame:"Portal_closeGame__1UA2k",closeIcon:"Portal_closeIcon__2HB67",portal:"Portal_portal__4MTzm",view:"Portal_view__2UR-c"}},8:function(e,t,n){e.exports={posts:"Posts_posts__1kHQZ",title:"Posts_title__1cong",post:"Posts_post__nFtf-",image:"Posts_image__4-Rsp",postImage:"Posts_postImage__3k0SR"}}},[[59,1,2]]]);
//# sourceMappingURL=main.b1ee00ca.chunk.js.map