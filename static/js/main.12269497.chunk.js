(this["webpackJsonpcaesar-vigenere-crypt"]=this["webpackJsonpcaesar-vigenere-crypt"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(41),l=n(30),s=n(151),u=n(34),m=n(128),p=n(132),f=n(133),d=n(39),h=n(153),v=n(134),g=n(135),y=n(136),E=n(137),b=n(76),w=n.n(b),C=function(e){var t=e.title,n=e.routes,o=e.path,c=Object(a.useState)(!1),i=Object(u.a)(c,2),s=i[0],b=i[1],C=Object(l.g)(),O=function(e){("keydown"!==e.type||"Tab"!==e.key&&"Shift"!==e.key)&&b((function(e){return!e}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{position:"fixed"},r.a.createElement(p.a,null,r.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu",onClick:O},r.a.createElement(w.a,null)),r.a.createElement(d.a,{variant:"h6"},t||"404"))),r.a.createElement(h.a,{open:s,onClose:O},r.a.createElement("div",{role:"presentation",onClick:O,onKeyDown:O,style:{width:250}},r.a.createElement(v.a,null,n.map((function(e,t){return r.a.createElement(g.a,{button:!0,selected:o.includes(e.path),onClick:function(){return C.push(e.path)},key:t},r.a.createElement(y.a,null,e.icon),r.a.createElement(E.a,{primary:e.title}))}))))))},O=n(154),k=n(78),j=Object(O.a)(Object(k.a)({palette:{type:"dark",primary:{main:"#61892f"},secondary:{main:"#86c232"},success:{main:"#6b6970"},error:{main:"#474b4f"},contrastThreshold:3,tonalOffset:.3}})),_=n(148),N=n(149),S=n(150),A=n(138),x=n(62),T=n.n(x),W=function(){var e=Object(l.g)();return r.a.createElement("div",{className:"wrapper-vertical"},r.a.createElement(d.a,{variant:"h3",component:"h1",color:"secondary",style:{marginBottom:30}},"What type of cipher do you want to use?"),r.a.createElement("div",{className:"wrapper"},r.a.createElement(A.a,{size:"large",variant:"contained",color:"primary",className:T.a.btn,onClick:function(){return e.push("/caesar")}},"\xa0\xa0Caesar\xa0\xa0"),r.a.createElement(A.a,{size:"large",variant:"contained",color:"primary",className:T.a.btn,onClick:function(){return e.push("/vigenere")}},"Vigen\xe8re")))},V=n(45),P=n(152),K=n(142),z=n(157),D=n(156),R=n(143),q=n(144),B=n(145),F=n(146),I=n(147),J=n(28),M=n.n(J),U=n(139),L=n(140),H=n(141),Y=function(e){var t=e.title,n=e.isOpen,a=void 0!==n&&n,o=e.onClose;return r.a.createElement(U.a,{open:a,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(L.a,{id:"alert-dialog-title"},t),r.a.createElement(H.a,null,r.a.createElement(A.a,{onClick:o,color:"primary",autoFocus:!0},"Close")))},$=function(e){var t=e.type,n=Object(a.useState)(""),o=Object(u.a)(n,2),c=o[0],i=o[1],s=Object(a.useState)(""),m=Object(u.a)(s,2),p=m[0],h=m[1],v=Object(a.useState)(!1),g=Object(u.a)(v,2),y=g[0],E=g[1],b=Object(a.useState)({isOpen:!1}),w=Object(u.a)(b,2),C=w[0],O=w[1],k=Object(l.g)(),j=function(e){return 65<=e&&e<=90},_=function(e){return 97<=e&&e<=122},N=function(e){return j(e)||_(e)},S=function(e,t){if(0!==p.length){if("vigenere"===t){var n=function(e){for(var t=[],n=0;n<e.length;n++){var a=e.charCodeAt(n);N(a)&&t.push((a-65)%32)}return t}(p);if(0===n.length)return void O((function(e){return Object(V.a)({},e,{title:"Key has no letters",isOpen:!0})}));if(e)for(var a=0;a<n.length;a++)n[a]=(26-n[a])%26;i((function(e){return function(e,t){for(var n="",a=0,r=0;a<e.length;a++){var o=e.charCodeAt(a);j(o)?(n+=String.fromCharCode((o-65+t[r%t.length])%26+65),r++):_(o)?(n+=String.fromCharCode((o-97+t[r%t.length])%26+97),r++):n+=e.charAt(a)}return n}(e,n)}))}if("caesar"===t){if(Number.isNaN(p))return void O((function(e){return Object(V.a)({},e,{title:"Key has no numbers",isOpen:!0})}));var r=Number.parseInt(p);e&&(r=(26-r)%26),i((function(e){return function(e,t){for(var n="",a=0;a<e.length;a++){var r=e.charCodeAt(a);j(r)?n+=String.fromCharCode((r-65+t)%26+65):_(r)?n+=String.fromCharCode((r-97+t)%26+97):n+=e.charAt(a)}return n}(e,r)}))}}else O((function(e){return Object(V.a)({},e,{title:"Key is empty",isOpen:!0})}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y,{title:C.title,isOpen:C.isOpen,onClose:function(){return O((function(e){return Object(V.a)({},e,{isOpen:!1})}))}}),t?r.a.createElement("div",{className:M.a.wrpVertical},r.a.createElement(d.a,{variant:"h4",component:"h2",color:"secondary",style:{marginBottom:20}},"vigenere"===t&&"Vigen\xe8re crypt","caesar"===t&&"Caesar crypt"),r.a.createElement("form",{className:M.a.wrpVertical,autoComplete:"off"},r.a.createElement("div",{className:M.a.wrp},r.a.createElement(P.a,{label:"Text",placeholder:"Text to be encrypted/decrypted",variant:"outlined",color:"primary",multiline:!0,rows:5,style:{width:"100%"},value:c,onChange:function(e){var t=e.currentTarget;return i(t.value)}})),r.a.createElement("div",{className:M.a.wrp},"caesar"===t?r.a.createElement(P.a,{type:"number",label:"Key",placeholder:"Encryption key (number)",size:"medium",variant:"outlined",color:"secondary",className:M.a.half,value:p,onChange:function(e){var t=e.currentTarget;return h(t.value)}}):r.a.createElement(K.a,{className:M.a.half,variant:"outlined"},r.a.createElement(z.a,null,"Key"),r.a.createElement(D.a,{type:y?"text":"password",value:p,onChange:function(e){var t=e.currentTarget;return h(t.value)},labelWidth:31,endAdornment:r.a.createElement(R.a,{position:"end"},r.a.createElement(f.a,{"aria-label":"toggle password visibility",onClick:function(){return E((function(e){return!e}))},onMouseDown:function(e){return e.preventDefault()},edge:"end"},y?r.a.createElement(q.a,null):r.a.createElement(B.a,null)))})),r.a.createElement(A.a,{size:"large",variant:"contained",color:"primary",startIcon:r.a.createElement(F.a,null),className:M.a.quarter,onClick:function(){return S(!1,t)}},"Encrypt"),r.a.createElement(A.a,{size:"large",variant:"contained",color:"primary",startIcon:r.a.createElement(I.a,null),className:M.a.quarter,onClick:function(){return S(!0,t)}},"Decrypt")))):k.replace("/home"))},G=[{title:"Home",path:"/home",component:r.a.createElement(W,null),icon:r.a.createElement(_.a,null)},{title:"Caesar encryption",path:"/caesar",component:r.a.createElement($,{type:"caesar"}),icon:r.a.createElement(N.a,null)},{title:"Vigen\xe8re encryption",path:"/vigenere",component:r.a.createElement($,{type:"vigenere"}),icon:r.a.createElement(S.a,null)}],Q=n(77),X=n.n(Q),Z=function(){return r.a.createElement(s.a,{theme:j},r.a.createElement(i.a,null,r.a.createElement("div",{className:X.a.app},r.a.createElement(l.d,null,G.map((function(e,t){return r.a.createElement(l.b,{key:t,path:e.path,exact:!0},r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{title:e.title,routes:G,path:e.path}),r.a.createElement("main",null,e.component)))})),r.a.createElement(l.a,{from:"*",to:"/home"})))))},ee=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(99),n(100);c.a.render(r.a.createElement(Z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/caesar-vigenere-crypt",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/caesar-vigenere-crypt","/service-worker.js");ee?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):te(t,e)}))}}()},28:function(e,t,n){e.exports={quarter:"EncryptionPage_quarter__1YDC9",half:"EncryptionPage_half__Tde93",wrp:"EncryptionPage_wrp__3uR6e",wrpVertical:"EncryptionPage_wrpVertical__3xjMM EncryptionPage_wrp__3uR6e"}},62:function(e,t,n){e.exports={btn:"ChooseCipherType_btn__3AAJN"}},77:function(e,t,n){e.exports={app:"app_app__llV42"}},87:function(e,t,n){e.exports=n(101)}},[[87,1,2]]]);
//# sourceMappingURL=main.12269497.chunk.js.map