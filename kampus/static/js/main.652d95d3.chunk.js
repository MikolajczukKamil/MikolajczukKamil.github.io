(this.webpackJsonpkampus=this.webpackJsonpkampus||[]).push([[0],{48:function(t){t.exports=JSON.parse('{"image":"./img/simple-map.png","topLeft":{"lat":52.17076881448706,"lon":21.03121262031837},"bottomRight":{"lat":52.15577247975299,"lon":21.055840200013957},"startPosition":{"x":52.16201895796358,"y":21.04632866670382},"width":1819,"height":1782}')},52:function(t){t.exports=JSON.parse('[{"shortName":"WZIM","longName":"Wydzia\u0142 Zastosowa\u0144 Informatyki i Matematyki","position":{"lat":52.16211895796358,"lon":21.04632866670382},"positions":[{"name":"Informatyka","image":"http://www.wzim.sggw.pl/wp-content/uploads/2013/10/sggw1.jpg"},{"name":"Informatyka i Ekonometria"}]},{"shortName":"WE","longName":"Wydzia\u0142 Ekonomiczny","position":{"lat":52.16465185139993,"lon":21.04905077554705},"positions":[{"name":"Ekonomia","image":"https://www.we.sggw.pl/wp-content/uploads/2019/10/logotyp_we_PL.png"},{"name":"Finanse i Rachunkowo\u015b\u0107"},{"name":"Logistyka"},{"name":"Turystyka i Rekreacja"},{"name":"Zarz\u0105dzanie"}]}]')},69:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var o=n(0),i=n(12),a=n.n(i),s=n(112),c=n(24),r=n(102),l=n(55),h=n(116),u=n(71),g=n(113),p=n(114),d=n(109),m=n(107),f=n(108),v=n(106),j=n(4),b={current:null},A=Object(o.createContext)(b),O=n(3),M=Object(r.a)({root:{flex:1,overflow:"hidden",position:"relative","& > *":{position:"absolute"}}});function w(t){var e=t.children,n=t.className,i=M(),a=Object(o.useRef)(null);return Object(O.jsx)(A.Provider,{value:a,children:Object(O.jsx)("div",{className:Object(j.a)(n,i.root),ref:a,children:e})})}var x=n(53),k=n(18),P=n(115),R=Object(o.forwardRef)((function(t,e){return Object(O.jsxs)("svg",Object(k.a)(Object(k.a)({viewBox:"0 0 321 431",xmlns:"http://www.w3.org/2000/svg",ref:e},t),{},{children:[Object(O.jsx)("path",{d:"m311.315,212.581c-12.84,37.165 -36.27,68.88 -58.92,99.546c-22.32,30.218 -13.567,18.714 -79.09,112.305c-5.956,8.55 -18.644,8.55 -24.6,0c-60.852,-86.651 -53.346,-77.451 -79.09,-112.305c-22.65,-30.666 -46.08,-62.381 -58.92,-99.546c-18.58,-53.803 -10.55,-107.035 22.62,-149.899c30.37,-39.245 78.11,-62.682 127.69,-62.682s97.32,23.437 127.69,62.682c34.519,44.604 40.428,98.329 22.62,149.899z",fill:"#ff4d4d"}),Object(O.jsx)("path",{d:"m311.315,212.581c-12.84,37.165 -36.27,68.88 -58.92,99.546c-22.32,30.218 -13.567,18.714 -79.09,112.305c-2.8,4.019 -7.4,6.419 -12.3,6.419l0,-430.851c49.58,0 97.32,23.437 127.69,62.682c34.519,44.604 40.428,98.329 22.62,149.899z",fill:"#cd0000"}),Object(O.jsx)("path",{d:"m230.715,161.338c0,38.425 -31.27,69.69 -69.71,69.69s-69.71,-31.266 -69.71,-69.69c0,-38.435 31.27,-69.7 69.71,-69.7s69.71,31.265 69.71,69.7z",fill:"#f0f7ff"}),Object(O.jsx)("path",{d:"m230.715,161.338c0,38.425 -31.27,69.69 -69.71,69.69l0,-139.39c38.44,0 69.71,31.265 69.71,69.7z",fill:"#dfe7f4"})]}))})),D=n(37),y=function t(e,n){Object(D.a)(this,t),this.x=e,this.y=n};var N=n(48),I={map:{image:"",width:0,height:0,topLeft:{lon:0,lat:0},bottomRight:{lon:0,lat:0},startPosition:{x:0,y:0}},scale:0,updateScale:function(){}},B=Object(o.createContext)(I);function E(t){var e=t.children,n=Object(o.useState)(N),i=Object(c.a)(n,1)[0],a=Object(o.useState)(1),s=Object(c.a)(a,2),r=s[0],l=s[1],h=Object(o.useCallback)((function(t){t<=0||t>=100||l(t)}),[]);return Object(O.jsx)(B.Provider,{value:{map:i,scale:r,updateScale:h},children:e})}var C=Object(r.a)({root:Object(k.a)(Object(k.a)({},{pointerEvents:"auto !important"}),{},{cursor:"pointer"})});function T(t){var e=t.position,n=t.className,i=t.title,a=t.style,s=void 0===a?{}:a,c=Object(x.a)(t,["position","className","title","style"]),r=C(),l=Object(o.useContext)(B),h=l.map,u=l.scale,g=Object(o.useMemo)((function(){return function(t,e){var n=t.bottomRight.lon-t.topLeft.lon,o=t.bottomRight.lat-t.topLeft.lat;return new y((e.lon-t.topLeft.lon)/n*t.height,(e.lat-t.topLeft.lat)/o*t.width)}(h,e)}),[e.lat,e.lon]),p=Object(O.jsx)(R,Object(k.a)({className:Object(j.a)(r.root,n),style:Object(k.a)(Object(k.a)({},s),{},{width:32/u,height:32/u,transform:"translate(".concat(g.x-16,"px, ").concat(g.y-32,"px)")})},c));return i?Object(O.jsx)(P.a,{title:i,children:p}):p}var H=n(51),L=function(){function t(e,n,o,i){var a=this;Object(D.a)(this,t),this.mapRef=e,this.rootRef=n,this.map=o,this.scale=i,this.baseX=void 0,this.baseY=void 0,this.isMapInMoving=!1,this.start={x:0,y:0},this.now={x:0,y:0},this.handleStartMovingDesktop=function(t){var e=t.clientX,n=t.clientY;t.target===a.mapRef.current&&a.startMoving(e,n)},this.handleStartMovingMobile=function(t){var e=t.touches;1===e.length&&a.startMoving(e[0].clientX,e[0].clientY)},this.handleStopMoving=function(t){t.target===a.mapRef.current&&a.stopMoving()},this.handleMoveMapDesktop=function(t){var e=t.clientX,n=t.clientY;a.moveMap(e,n)},this.handleMoveMapMobile=function(t){1===t.touches.length&&(a.moveMap(t.touches[0].clientX,t.touches[0].clientY),t.preventDefault())},this.baseX=o.startPosition.x,this.baseY=o.startPosition.y}return Object(H.a)(t,[{key:"Map",get:function(){return this.map}},{key:"useNewMap",value:function(t){this.isMapInMoving&&this.stopMoving(),this.map=t,this.updateMapPosition()}},{key:"useScale",value:function(t){this.scale=t,this.updateMapPosition()}},{key:"Transform",get:function(){return"translate(-".concat(this.PositionX,"px, -").concat(this.PositionY,"px) scale(").concat(this.scale,")")}},{key:"PositionX",get:function(){var t=this.map.width,e=this.rootRef.current,n=(null===e||void 0===e?void 0:e.clientWidth)||0;return Math.max(0,Math.min(t*this.scale-n,this.baseX+(this.start.x-this.now.x)))}},{key:"PositionY",get:function(){var t=this.map.height,e=this.rootRef.current,n=(null===e||void 0===e?void 0:e.clientHeight)||0;return Math.max(0,Math.min(t*this.scale-n,this.baseY+(this.start.y-this.now.y)))}},{key:"updateMapPosition",value:function(){this.mapRef.current&&(this.mapRef.current.style.transform=this.Transform)}},{key:"startMoving",value:function(t,e){var n=this.mapRef.current;!this.isMapInMoving&&n&&(this.isMapInMoving=!0,this.start.x=this.now.x=t,this.start.y=this.now.y=e,n.style.cursor="move",n.addEventListener("mousemove",this.handleMoveMapDesktop),n.addEventListener("touchmove",this.handleMoveMapMobile))}},{key:"stopMoving",value:function(){var t=this.mapRef.current;this.isMapInMoving&&t&&(this.baseX=this.PositionX,this.baseY=this.PositionY,this.isMapInMoving=!1,this.start.x=this.now.x=0,this.start.y=this.now.y=0,t.style.cursor="default",t.removeEventListener("mousemove",this.handleMoveMapDesktop),t.removeEventListener("touchmove",this.handleMoveMapMobile))}},{key:"moveMap",value:function(t,e){this.now.x=t,this.now.y=e,this.updateMapPosition()}}]),t}();var S=Object(r.a)({map:{userSelect:"none",backgroundRepeat:"no-repeat",backgroundPosition:"left top",transformOrigin:"top left",position:"relative","& > *":{pointerEvents:"none",position:"absolute"}}});function Q(t){var e=t.children,n=S(),i=Object(o.useContext)(B).map,a=Object(o.useRef)(null),s=function(t,e){var n=Object(o.useContext)(B),i=n.map,a=n.scale,s=Object(o.useState)(new L(t,e,i,a)),r=Object(c.a)(s,1)[0];return Object(o.useEffect)((function(){r.Map!==i&&(r.useNewMap(i),console.warn("MapController: Map instance changed"))}),[i]),Object(o.useEffect)((function(){r.useScale(a)}),[r,a]),r}(a,Object(o.useContext)(A));return Object(O.jsx)("div",{style:{width:i.width,height:i.height},children:Object(O.jsx)("div",{ref:a,className:n.map,style:{backgroundImage:"url(".concat(i.image,")"),width:i.width,height:i.height,transform:s.Transform},onMouseDown:s.handleStartMovingDesktop,onMouseUp:s.handleStopMoving,onMouseOut:s.handleStopMoving,onTouchStart:s.handleStartMovingMobile,onTouchEnd:s.handleStopMoving,onTouchCancel:s.handleStopMoving,children:e})})}var X=n(52),W=Object(r.a)((function(t){return{zoom:{width:300,margin:t.spacing(),padding:t.spacing(2)},zoomSlider:{marginTop:t.spacing(5)},someImg:{width:"100%",maxWidth:512}}}));function Y(){var t=W(),e=Object(o.useContext)(B),n=e.scale,i=e.updateScale,a=Object(o.useState)(null),s=Object(c.a)(a,2),r=s[0],j=s[1],b=function(){j(null)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(w,{children:[Object(O.jsx)(Q,{children:X.map((function(t){return Object(O.jsx)(T,{position:t.position,title:t.shortName,onClick:function(){return function(t){j(t)}(t)}},t.shortName)}))}),Object(O.jsxs)(u.a,{className:t.zoom,children:[Object(O.jsx)(l.a,{gutterBottom:!0,children:"Zoom"}),Object(O.jsx)(h.a,{value:n,step:.1,min:.1,max:10,className:t.zoomSlider,valueLabelDisplay:"on",onChange:function(t,e){i(e)}})]})]}),Object(O.jsxs)(g.a,{open:null!==r,onClose:b,children:[Object(O.jsx)(v.a,{children:null===r||void 0===r?void 0:r.shortName}),Object(O.jsxs)(m.a,{children:[Object(O.jsx)(f.a,{children:null===r||void 0===r?void 0:r.longName}),null===r||void 0===r?void 0:r.positions.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)(l.a,{children:e.name}),e.image&&Object(O.jsx)("img",{src:e.image,className:t.someImg,alt:""})]},e.name)}))]}),Object(O.jsx)(d.a,{children:Object(O.jsx)(p.a,{onClick:b,color:"primary",variant:"contained",children:"OK"})})]})]})}var F=n(36),q=n(110),G=n(111),V=Object(r.a)((function(t){return{logo:Object(F.a)({height:t.spacing(3)},t.breakpoints.up("sm"),{height:t.spacing(4)})}}));function z(){var t=V();return Object(O.jsx)(q.a,{position:"static",children:Object(O.jsx)(G.a,{children:Object(O.jsx)("img",{src:"data:image/png;base64,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",className:t.logo,alt:""})})})}function Z(){return Object(O.jsxs)(E,{children:[Object(O.jsx)(s.a,{}),Object(O.jsx)(z,{}),Object(O.jsx)(Y,{})]})}var U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,118)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),o(t),i(t),a(t),s(t)}))};n(69);a.a.render(Object(O.jsx)(Z,{}),document.getElementById("root")),U()}},[[70,1,2]]]);
//# sourceMappingURL=main.652d95d3.chunk.js.map